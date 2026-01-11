// pages/test/index.js
const words = require('../../utils/words.js');
const storage = require('../../utils/storage.js');

Page({
    data: {
        testType: 'choice', // choice, spell, listen
        questions: [],
        currentIndex: 0,
        currentQuestion: null,
        currentOptions: [],
        answered: false,
        selectedOption: '',
        inputAnswer: '',
        correctCount: 0,
        showResult: false,
        timer: 10,
        totalTime: 0,
        startTime: 0
    },

    timerInterval: null,

    onLoad() {
        this.initTest();
    },

    onUnload() {
        this.clearTimer();
    },

    // 初始化测试
    initTest() {
        const questions = words.getRandomWords(10);
        this.setData({
            questions,
            currentIndex: 0,
            correctCount: 0,
            showResult: false,
            totalTime: 0,
            startTime: Date.now()
        });
        this.loadQuestion(0);
        this.startTimer();
    },

    // 加载题目
    loadQuestion(index) {
        if (index >= this.data.questions.length) {
            this.showResults();
            return;
        }

        const question = this.data.questions[index];
        const options = this.generateOptions(question);

        this.setData({
            currentIndex: index,
            currentQuestion: question,
            currentOptions: options,
            answered: false,
            selectedOption: '',
            inputAnswer: '',
            timer: 10
        });

        // 听力题自动播放
        if (this.data.testType === 'listen') {
            setTimeout(() => this.playSound(), 500);
        }
    },

    // 生成选项
    generateOptions(correctWord) {
        const allWords = words.getAllWords();
        const options = [correctWord.meaning];

        while (options.length < 4) {
            const random = allWords[Math.floor(Math.random() * allWords.length)];
            if (!options.includes(random.meaning)) {
                options.push(random.meaning);
            }
        }

        return options.sort(() => Math.random() - 0.5);
    },

    // 选择选项
    selectOption(e) {
        if (this.data.answered) return;

        const option = e.currentTarget.dataset.option;
        const isCorrect = option === this.data.currentQuestion.meaning;

        this.setData({
            answered: true,
            selectedOption: option
        });

        if (isCorrect) {
            this.setData({ correctCount: this.data.correctCount + 1 });
            this.vibrate(true);
        } else {
            storage.addWrongWord(this.data.currentQuestion.id);
            this.vibrate(false);
        }

        setTimeout(() => {
            this.loadQuestion(this.data.currentIndex + 1);
        }, 1000);
    },

    // 填空题输入
    onInput(e) {
        this.setData({ inputAnswer: e.detail.value });
    },

    // 提交填空答案
    submitSpell() {
        const answer = this.data.inputAnswer.trim().toLowerCase();
        const correct = this.data.currentQuestion.word.toLowerCase();
        const isCorrect = answer === correct;

        if (isCorrect) {
            this.setData({ correctCount: this.data.correctCount + 1 });
            this.vibrate(true);
            wx.showToast({ title: '正确! ✓', icon: 'none' });
        } else {
            storage.addWrongWord(this.data.currentQuestion.id);
            this.vibrate(false);
            wx.showToast({ title: `正确答案: ${correct}`, icon: 'none' });
        }

        setTimeout(() => {
            this.loadQuestion(this.data.currentIndex + 1);
        }, 1500);
    },

    // 播放发音
    playSound() {
        const word = this.data.currentQuestion.word;
        wx.showToast({ title: `🔊 ${word}`, icon: 'none', duration: 1000 });
        // 实际项目中可使用 TTS API
    },

    // 切换题型
    switchType(e) {
        const type = e.currentTarget.dataset.type;
        this.setData({ testType: type });
        this.initTest();
    },

    // 开始计时
    startTimer() {
        this.clearTimer();
        this.timerInterval = setInterval(() => {
            if (this.data.timer > 0) {
                this.setData({ timer: this.data.timer - 1 });
            } else {
                // 超时自动下一题
                if (!this.data.answered && this.data.testType !== 'spell') {
                    this.selectOption({ currentTarget: { dataset: { option: '' } } });
                }
            }
        }, 1000);
    },

    // 清除计时器
    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    },

    // 显示结果
    showResults() {
        this.clearTimer();
        const totalTime = Math.round((Date.now() - this.data.startTime) / 1000);

        this.setData({
            showResult: true,
            totalTime
        });

        // 检查成就
        if (this.data.correctCount === this.data.questions.length) {
            storage.unlockAchievement('perfect_test');
        }
    },

    // 震动反馈
    vibrate(success) {
        const settings = storage.getSettings();
        if (settings.vibrationEnabled) {
            if (success) {
                wx.vibrateShort({ type: 'light' });
            } else {
                wx.vibrateShort({ type: 'heavy' });
            }
        }
    },

    // 重新开始
    restart() {
        this.initTest();
    },

    // 返回首页
    goHome() {
        wx.switchTab({ url: '/pages/home/index' });
    }
});
