// pages/settings/index.js
const storage = require('../../utils/storage.js');

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
    }
});
