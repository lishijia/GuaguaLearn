// pages/settings/index.js
const storage = require('../../utils/storage.js');
const onboarding = require('../../utils/onboarding.js');

Page({
    data: {
        settings: {},
        primaryColor: '#0EA5E9'
    },

    onShow() {
        this.loadSettings();
    },

    loadSettings() {
        const settings = storage.getSettings();
        this.setData({ settings });
    },

    // 每日目标
    onDailyGoalChange(e) {
        const value = e.detail.value;
        storage.saveSettings({ dailyGoal: value });
        this.setData({ 'settings.dailyGoal': value });
    },

    // 学习提醒开关
    onReminderToggle(e) {
        const value = e.detail.value;
        storage.saveSettings({ reminderEnabled: value });
        this.setData({ 'settings.reminderEnabled': value });
    },

    // 提醒时间
    onReminderTimeChange(e) {
        const value = e.detail.value;
        storage.saveSettings({ reminderTime: value });
        this.setData({ 'settings.reminderTime': value });
    },

    // 音效开关
    onSoundToggle(e) {
        const value = e.detail.value;
        storage.saveSettings({ soundEnabled: value });
        this.setData({ 'settings.soundEnabled': value });
    },

    // 震动开关
    onVibrationToggle(e) {
        const value = e.detail.value;
        storage.saveSettings({ vibrationEnabled: value });
        this.setData({ 'settings.vibrationEnabled': value });
        if (value) {
            wx.vibrateShort({ type: 'light' });
        }
    },

    // 自动播放开关
    onAutoPlayToggle(e) {
        const value = e.detail.value;
        storage.saveSettings({ autoPlaySound: value });
        this.setData({ 'settings.autoPlaySound': value });
    },

    // 主题设置
    setTheme(e) {
        const theme = e.currentTarget.dataset.theme;
        storage.saveSettings({ themeMode: theme });
        this.setData({ 'settings.themeMode': theme });
        wx.showToast({ title: '主题已切换', icon: 'none' });
    },

    // 重置进度
    resetProgress() {
        wx.showModal({
            title: '确认重置',
            content: '这将清除所有学习进度、打卡记录和成就，此操作不可恢复！',
            confirmColor: '#EF4444',
            confirmText: '确认重置',
            success: (res) => {
                if (res.confirm) {
                    storage.resetAllProgress();
                    wx.showToast({ title: '已重置', icon: 'success' });
                }
            }
        });
    },

    // 导出数据
    exportData() {
        wx.showLoading({ title: '导出中...' });

        const result = storage.exportData();

        wx.hideLoading();

        if (result.success) {
            wx.showModal({
                title: '导出成功',
                content: `数据已生成，请复制保存。大小: ${(result.size / 1024).toFixed(2)} KB`,
                editable: true,
                placeholderText: result.data,
                confirmText: '复制',
                success: (res) => {
                    if (res.confirm) {
                        wx.setClipboardData({
                            data: result.data,
                            success: () => {
                                wx.showToast({ title: '已复制到剪贴板', icon: 'success' });
                            }
                        });
                    }
                }
            });
        } else {
            wx.showModal({
                title: '导出失败',
                content: result.error || '未知错误',
                showCancel: false
            });
        }
    },

    // 导入数据
    importData() {
        wx.showModal({
            title: '导入数据',
            content: '请粘贴之前导出的数据',
            editable: true,
            placeholderText: '粘贴数据到这里...',
            confirmText: '导入',
            success: (res) => {
                if (res.confirm && res.content) {
                    wx.showModal({
                        title: '导入模式',
                        content: '选择导入方式',
                        cancelText: '覆盖',
                        confirmText: '合并',
                        success: (modeRes) => {
                            const merge = modeRes.confirm;
                            wx.showLoading({ title: '导入中...' });

                            const result = storage.importData(res.content, { merge });

                            wx.hideLoading();

                            if (result.success) {
                                wx.showModal({
                                    title: '导入成功',
                                    content: `已导入 ${result.importCount} 项数据\n导出时间: ${new Date(result.exportTime).toLocaleString()}`,
                                    showCancel: false
                                });
                            } else {
                                wx.showModal({
                                    title: '导入失败',
                                    content: result.error,
                                    showCancel: false
                                });
                            }
                        }
                    });
                }
            }
        });
    },

    // 查看数据统计
    showDataStats() {
        const result = storage.getDataStats();

        if (result.success) {
            const stats = result.stats;
            wx.showModal({
                title: '数据统计',
                content: `存储使用: ${stats.currentSize} KB / ${stats.limitSize} KB (${stats.usagePercent}%)\n\n已学单词: ${stats.totalLearned}\n已掌握: ${stats.totalMastered}\n学习记录: ${stats.wordRecordsCount}\n连续打卡: ${stats.streak} 天`,
                showCancel: false
            });
        } else {
            wx.showToast({ title: '获取统计失败', icon: 'none' });
        }
    },

    // 查看使用指南
    showOnboarding() {
        wx.navigateTo({
            url: '/pages/onboarding/index'
        });
    }
});
