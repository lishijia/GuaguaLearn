// pages/study/index.js
const words = require('../../utils/words.js');
const storage = require('../../utils/storage.js');
const sm2 = require('../../utils/sm2.js');

Page({
    data: {
        mode: 'learn', // learn, review
        grade: null,
        words: [],
        currentIndex: 0,
        currentWord: null,
        isFlipped: false,
        swipeClass: '',
        isFavorite: false,
        rememberCount: 0,
        forgetCount: 0,
        favoriteCount: 0,
        showFinish: false
    },

    touchStartX: 0,
    touchStartY: 0,

    onLoad(options) {
        const mode = options.mode || 'learn';
        const grade = options.grade ? parseInt(options.grade) : null;

        this.setData({ mode, grade });
        this.loadWords();
    },

    // 加载单词
    loadWords() {
        let wordList = [];
        const settings = storage.getSettings();
        const count = settings.dailyGoal;

        if (this.data.mode === 'review') {
            // 复习模式: 获取待复习单词
            const reviewIds = storage.getWordsToReview();
            wordList = words.getWordsByIds(reviewIds).slice(0, count);

            if (wordList.length === 0) {
                wx.showToast({ title: '暂无需要复习的单词', icon: 'none' });
                setTimeout(() => wx.navigateBack(), 1500);
                return;
            }
        } else {
            // 学习模式
            if (this.data.grade) {
                wordList = words.getWordsByGrade(this.data.grade).slice(0, count);
            } else {
                wordList = words.getRandomWords(count);
            }
        }

        this.setData({
            words: wordList,
            currentIndex: 0,
            currentWord: wordList[0],
            isFavorite: storage.isFavorite(wordList[0]?.id)
        });

        // 自动播放发音
        const autoPlay = storage.getSettings().autoPlaySound;
        if (autoPlay) {
            setTimeout(() => this.playSound(), 500);
        }
    },

    // 翻转卡片
    flipCard() {
        this.setData({ isFlipped: !this.data.isFlipped });
        this.vibrate();
    },

    // 播放发音
    playSound() {
        const word = this.data.currentWord?.word;
        if (!word) return;

        if (!this.innerAudioContext) {
            this.innerAudioContext = wx.createInnerAudioContext();
            // 即使在静音模式下也能播放声音 (iOS需要)
            if (wx.setInnerAudioOption) {
                wx.setInnerAudioOption({
                    obeyMuteSwitch: false,
                    mixWithOther: false
                });
            } else {
                this.innerAudioContext.obeyMuteSwitch = false;
            }

            this.innerAudioContext.onError((res) => {
                console.error('Play Sound Error:', res);
                // 具体的错误提示
                let msg = '发音失败';
                if (res.errCode === 10001) msg = '系统错误';
                if (res.errCode === 10002) msg = '网络错误';
                if (res.errCode === 10003) msg = '文件错误';
                if (res.errCode === 10004) msg = '格式错误';
                wx.showToast({ title: msg, icon: 'none' });
            });
        }

        // 使用有道词典语音接口 (type=2 美音, type=1 英音)
        this.innerAudioContext.src = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(word)}&type=2`;
        this.innerAudioContext.play();
    },

    // 触摸开始
    onTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
    },

    // 触摸移动
    onTouchMove(e) {
        // 可以添加卡片跟随手指倾斜效果
    },

    // 触摸结束
    onTouchEnd(e) {
        const endX = e.changedTouches[0].clientX;
        const endY = e.changedTouches[0].clientY;
        const deltaX = endX - this.touchStartX;
        const deltaY = endY - this.touchStartY;

        const threshold = 80;

        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            if (deltaX > threshold) {
                this.markRemember();
            } else if (deltaX < -threshold) {
                this.markForget();
            }
        } else {
            if (deltaY < -threshold) {
                this.toggleFavorite();
            }
        }
    },

    // 标记认识
    markRemember() {
        this.processWord(true);
        this.setData({
            rememberCount: this.data.rememberCount + 1,
            swipeClass: 'swipe-right'
        });
        this.nextWord();
    },

    // 标记不认识
    markForget() {
        this.processWord(false);
        this.setData({
            forgetCount: this.data.forgetCount + 1,
            swipeClass: 'swipe-left'
        });
        this.nextWord();
    },

    // 切换收藏
    toggleFavorite() {
        const wordId = this.data.currentWord.id;
        const isFav = storage.isFavorite(wordId);

        if (isFav) {
            storage.removeFavorite(wordId);
        } else {
            storage.addFavorite(wordId);
            this.setData({ favoriteCount: this.data.favoriteCount + 1 });
        }

        this.setData({ isFavorite: !isFav });
        this.vibrate();
        wx.showToast({ title: isFav ? '取消收藏' : '已收藏 ⭐', icon: 'none' });
    },

    // 处理单词 (SM-2)
    processWord(known) {
        const wordId = this.data.currentWord.id;
        let record = storage.getWordRecord(wordId);

        if (!record) {
            record = sm2.createNewRecord(wordId);
        }

        const updated = sm2.processSimpleAnswer(record, known);
        storage.saveWordRecord(wordId, updated);

        // 更新学习进度
        if (this.data.mode === 'learn') {
            storage.addTodayLearned(1);
        } else {
            storage.addTodayReviewed(1);
        }

        // 检查成就
        storage.checkAndUnlockAchievements();
    },

    // 下一个单词
    nextWord() {
        this.vibrate();

        setTimeout(() => {
            const nextIndex = this.data.currentIndex + 1;

            if (nextIndex >= this.data.words.length) {
                this.showFinishModal();
                return;
            }

            const nextWord = this.data.words[nextIndex];
            this.setData({
                currentIndex: nextIndex,
                currentWord: nextWord,
                isFlipped: false,
                swipeClass: '',
                isFavorite: storage.isFavorite(nextWord.id)
            });

            // 自动播放
            if (storage.getSettings().autoPlaySound) {
                setTimeout(() => this.playSound(), 300);
            }
        }, 300);
    },

    // 显示完成弹窗
    showFinishModal() {
        this.setData({ showFinish: true, swipeClass: '' });

        // 执行打卡
        const result = storage.checkIn();
        if (result.success) {
            wx.showToast({ title: `打卡成功! 连续${result.streak}天`, icon: 'none' });
        }
    },

    // 震动反馈
    vibrate() {
        if (storage.getSettings().vibrationEnabled) {
            wx.vibrateShort({ type: 'light' });
        }
    },

    // 返回首页
    goHome() {
        wx.switchTab({ url: '/pages/home/index' });
    },

    // 继续学习
    continueStudy() {
        this.setData({
            showFinish: false,
            currentIndex: 0,
            rememberCount: 0,
            forgetCount: 0,
            favoriteCount: 0
        });
        this.loadWords();
    }
});
