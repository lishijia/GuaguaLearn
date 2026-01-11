// pages/home/index.js
const storage = require('../../utils/storage.js');
const words = require('../../utils/words.js');

Page({
    data: {
        progress: {},
        streak: 0,
        dailyGoal: 20,
        reviewCount: 0,
        grades: []
    },

    onLoad() {
        this.loadGrades();
    },

    onShow() {
        this.loadData();
        this.drawProgressRing();
    },

    loadData() {
        const progress = storage.getProgress();
        const streak = storage.getStreak();
        const settings = storage.getSettings();
        const reviewCount = storage.getReviewCount();

        this.setData({
            progress,
            streak,
            dailyGoal: settings.dailyGoal,
            reviewCount
        });

        // 自动执行每日打卡
        if (progress.todayLearned > 0) {
            storage.checkIn();
        }
    },

    loadGrades() {
        const grades = words.getGradeInfo();
        this.setData({ grades });
    },

    // 绘制环形进度
    drawProgressRing() {
        const ctx = wx.createCanvasContext('progressRing');
        const progress = this.data.progress.todayLearned / this.data.dailyGoal;
        const centerX = 80;
        const centerY = 80;
        const radius = 65;
        const lineWidth = 12;

        // 背景圆
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.setStrokeStyle('rgba(255, 255, 255, 0.2)');
        ctx.setLineWidth(lineWidth);
        ctx.stroke();

        // 进度圆
        if (progress > 0) {
            const endAngle = -0.5 * Math.PI + Math.min(progress, 1) * 2 * Math.PI;
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, -0.5 * Math.PI, endAngle);
            ctx.setStrokeStyle('#FFFFFF');
            ctx.setLineWidth(lineWidth);
            ctx.setLineCap('round');
            ctx.stroke();
        }

        ctx.draw();
    },

    // 开始学习
    startLearning() {
        wx.navigateTo({
            url: '/pages/study/index?mode=learn'
        });
    },

    // 快速复习
    quickReview() {
        if (this.data.reviewCount === 0) {
            wx.showToast({ title: '暂无需要复习的单词', icon: 'none' });
            return;
        }
        wx.navigateTo({
            url: '/pages/study/index?mode=review'
        });
    },

    // 随机测试
    randomTest() {
        wx.switchTab({
            url: '/pages/test/index'
        });
    },

    // 选择年级
    selectGrade(e) {
        const grade = e.currentTarget.dataset.grade;
        wx.navigateTo({
            url: `/pages/study/index?mode=learn&grade=${grade}`
        });
    }
});
