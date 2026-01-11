// pages/progress/index.js
const storage = require('../../utils/storage.js');
const sm2 = require('../../utils/sm2.js');
const words = require('../../utils/words.js');

Page({
    data: {
        progress: {},
        streak: 0,
        chartRange: 7,
        chartData: [],
        heatmapData: [],
        stats: { mastered: 0, learning: 0, new: 0 },
        achievements: []
    },

    onShow() {
        this.loadData();
    },

    loadData() {
        const progress = storage.getProgress();
        const streak = storage.getStreak();
        const wordRecords = storage.getWordRecords();
        const stats = sm2.getStatistics(wordRecords);

        // 计算未学习数量
        const totalWords = words.getTotalCount();
        stats.new = totalWords - stats.total;

        this.setData({
            progress,
            streak,
            stats
        });

        this.loadChartData();
        this.loadHeatmapData();
        this.loadAchievements();
    },

    // 加载图表数据
    loadChartData() {
        const range = this.data.chartRange;
        const data = [];
        const dayNames = ['日', '一', '二', '三', '四', '五', '六'];

        for (let i = range - 1; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);

            // 模拟数据，实际应从存储读取每日学习量
            const value = Math.floor(Math.random() * 30) + 5;
            const height = Math.max(20, value * 4);

            data.push({
                value,
                height,
                label: range === 7 ? dayNames[date.getDay()] : date.getDate()
            });
        }

        this.setData({ chartData: data });
    },

    // 加载热力图数据
    loadHeatmapData() {
        const checkInRecords = storage.getCheckInRecords();
        const data = [];

        // 生成最近35天的数据
        for (let i = 34; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];

            if (checkInRecords.dates && checkInRecords.dates.includes(dateStr)) {
                // 随机分配热度等级
                data.push(Math.floor(Math.random() * 4) + 1);
            } else {
                data.push(0);
            }
        }

        this.setData({ heatmapData: data });
    },

    // 加载成就
    loadAchievements() {
        const unlockedIds = storage.getAchievements();
        const allDefs = storage.getAllAchievementDefs();

        const achievements = Object.values(allDefs).map(def => ({
            ...def,
            unlocked: unlockedIds.includes(def.id)
        }));

        this.setData({ achievements });
    },

    // 切换图表范围
    setChartRange(e) {
        const range = parseInt(e.currentTarget.dataset.range);
        this.setData({ chartRange: range });
        this.loadChartData();
    }
});
