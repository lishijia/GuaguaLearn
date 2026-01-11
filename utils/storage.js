/**
 * utils/storage.js - 本地存储工具
 * 管理用户设置、学习进度、收藏单词等数据
 */

const KEYS = {
    // 用户设置
    SETTINGS: 'guagua_settings',
    // 学习进度
    PROGRESS: 'guagua_progress',
    // 单词学习记录 (SM-2 数据)
    WORD_RECORDS: 'guagua_word_records',
    // 收藏单词
    FAVORITES: 'guagua_favorites',
    // 打卡记录
    CHECK_IN: 'guagua_checkin',
    // 成就
    ACHIEVEMENTS: 'guagua_achievements',
    // 错题本
    WRONG_WORDS: 'guagua_wrong_words'
};

// 默认设置
const DEFAULT_SETTINGS = {
    dailyGoal: 20,           // 每日目标单词数
    reminderEnabled: false,   // 学习提醒开关
    reminderTime: '20:00',    // 提醒时间
    soundEnabled: true,       // 音效开关
    vibrationEnabled: true,   // 震动反馈开关
    autoPlaySound: true,      // 自动播放发音
    themeMode: 'system'       // 外观模式: system/light/dark
};

// 默认进度
const DEFAULT_PROGRESS = {
    todayLearned: 0,          // 今日已学
    todayReviewed: 0,         // 今日已复习
    totalLearned: 0,          // 总学习量
    totalMastered: 0,         // 已掌握数量
    streak: 0,                // 连续打卡天数
    lastStudyDate: null       // 最后学习日期
};

/**
 * 获取数据
 */
function get(key, defaultValue = null) {
    try {
        const data = wx.getStorageSync(key);
        return data !== '' ? data : defaultValue;
    } catch (e) {
        console.error('Storage get error:', e);
        return defaultValue;
    }
}

/**
 * 设置数据
 */
function set(key, value) {
    try {
        wx.setStorageSync(key, value);
        return true;
    } catch (e) {
        console.error('Storage set error:', e);
        return false;
    }
}

/**
 * 删除数据
 */
function remove(key) {
    try {
        wx.removeStorageSync(key);
        return true;
    } catch (e) {
        console.error('Storage remove error:', e);
        return false;
    }
}

/**
 * 清空所有数据
 */
function clear() {
    try {
        wx.clearStorageSync();
        return true;
    } catch (e) {
        console.error('Storage clear error:', e);
        return false;
    }
}

// ========== 用户设置 ==========

/**
 * 获取用户设置
 */
function getSettings() {
    return get(KEYS.SETTINGS, DEFAULT_SETTINGS);
}

/**
 * 保存用户设置
 */
function saveSettings(settings) {
    const current = getSettings();
    return set(KEYS.SETTINGS, { ...current, ...settings });
}

/**
 * 重置设置
 */
function resetSettings() {
    return set(KEYS.SETTINGS, DEFAULT_SETTINGS);
}

// ========== 学习进度 ==========

/**
 * 获取学习进度
 */
function getProgress() {
    const progress = get(KEYS.PROGRESS, DEFAULT_PROGRESS);

    // 检查是否是新的一天，重置今日数据
    const today = new Date().toDateString();
    if (progress.lastStudyDate !== today) {
        progress.todayLearned = 0;
        progress.todayReviewed = 0;
    }

    return progress;
}

/**
 * 更新学习进度
 */
function updateProgress(updates) {
    const current = getProgress();
    const today = new Date().toDateString();

    const newProgress = {
        ...current,
        ...updates,
        lastStudyDate: today
    };

    return set(KEYS.PROGRESS, newProgress);
}

/**
 * 增加今日学习数量
 */
function addTodayLearned(count = 1) {
    const progress = getProgress();
    return updateProgress({
        todayLearned: progress.todayLearned + count,
        totalLearned: progress.totalLearned + count
    });
}

/**
 * 增加今日复习数量
 */
function addTodayReviewed(count = 1) {
    const progress = getProgress();
    return updateProgress({
        todayReviewed: progress.todayReviewed + count
    });
}

// ========== 打卡记录 ==========

/**
 * 获取打卡记录
 */
function getCheckInRecords() {
    return get(KEYS.CHECK_IN, { dates: [], currentStreak: 0, maxStreak: 0 });
}

/**
 * 执行打卡
 */
function checkIn() {
    const records = getCheckInRecords();
    const today = new Date().toISOString().split('T')[0];

    // 已经打卡过了
    if (records.dates.includes(today)) {
        return { success: false, message: '今日已打卡' };
    }

    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const isConsecutive = records.dates.includes(yesterday);

    records.dates.push(today);
    records.currentStreak = isConsecutive ? records.currentStreak + 1 : 1;
    records.maxStreak = Math.max(records.maxStreak, records.currentStreak);

    set(KEYS.CHECK_IN, records);

    // 同步更新进度中的连续天数
    updateProgress({ streak: records.currentStreak });

    return { success: true, streak: records.currentStreak };
}

/**
 * 获取连续打卡天数
 */
function getStreak() {
    const records = getCheckInRecords();
    const today = new Date().toISOString().split('T')[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

    // 如果今天或昨天打卡了，返回当前连续天数
    if (records.dates.includes(today) || records.dates.includes(yesterday)) {
        return records.currentStreak;
    }

    // 否则连续天数归零
    return 0;
}

// ========== 单词学习记录 (SM-2) ==========

/**
 * 获取所有单词记录
 */
function getWordRecords() {
    return get(KEYS.WORD_RECORDS, {});
}

/**
 * 获取单个单词记录
 */
function getWordRecord(wordId) {
    const records = getWordRecords();
    return records[wordId] || null;
}

/**
 * 保存单词记录
 */
function saveWordRecord(wordId, record) {
    const records = getWordRecords();
    records[wordId] = record;
    return set(KEYS.WORD_RECORDS, records);
}

/**
 * 获取待复习单词ID列表
 */
function getWordsToReview() {
    const records = getWordRecords();
    const now = Date.now();

    return Object.entries(records)
        .filter(([_, record]) => record.nextReview <= now)
        .map(([wordId, _]) => parseInt(wordId));
}

/**
 * 获取待复习单词数量
 */
function getReviewCount() {
    return getWordsToReview().length;
}

// ========== 收藏单词 ==========

/**
 * 获取收藏列表
 */
function getFavorites() {
    return get(KEYS.FAVORITES, []);
}

/**
 * 添加收藏
 */
function addFavorite(wordId) {
    const favorites = getFavorites();
    if (!favorites.includes(wordId)) {
        favorites.push(wordId);
        set(KEYS.FAVORITES, favorites);
    }
    return true;
}

/**
 * 移除收藏
 */
function removeFavorite(wordId) {
    const favorites = getFavorites();
    const index = favorites.indexOf(wordId);
    if (index > -1) {
        favorites.splice(index, 1);
        set(KEYS.FAVORITES, favorites);
    }
    return true;
}

/**
 * 是否已收藏
 */
function isFavorite(wordId) {
    const favorites = getFavorites();
    return favorites.includes(wordId);
}

// ========== 成就系统 ==========

const ACHIEVEMENT_DEFS = {
    first_word: { id: 'first_word', name: '初次学习', desc: '学习第一个单词', icon: '🎯' },
    streak_3: { id: 'streak_3', name: '三日坚持', desc: '连续学习3天', icon: '🔥' },
    streak_7: { id: 'streak_7', name: '一周挑战', desc: '连续学习7天', icon: '💪' },
    streak_30: { id: 'streak_30', name: '月度达人', desc: '连续学习30天', icon: '🏆' },
    words_10: { id: 'words_10', name: '小试牛刀', desc: '累计学习10个单词', icon: '📚' },
    words_50: { id: 'words_50', name: '渐入佳境', desc: '累计学习50个单词', icon: '📖' },
    words_100: { id: 'words_100', name: '百词斩', desc: '累计学习100个单词', icon: '💯' },
    words_500: { id: 'words_500', name: '词汇达人', desc: '累计学习500个单词', icon: '🌟' },
    words_1000: { id: 'words_1000', name: '词汇大师', desc: '累计学习1000个单词', icon: '👑' },
    perfect_test: { id: 'perfect_test', name: '完美测验', desc: '测试全部正确', icon: '✨' }
};

/**
 * 获取已解锁成就
 */
function getAchievements() {
    return get(KEYS.ACHIEVEMENTS, []);
}

/**
 * 解锁成就
 */
function unlockAchievement(achievementId) {
    const achievements = getAchievements();
    if (!achievements.includes(achievementId)) {
        achievements.push(achievementId);
        set(KEYS.ACHIEVEMENTS, achievements);
        return { unlocked: true, achievement: ACHIEVEMENT_DEFS[achievementId] };
    }
    return { unlocked: false };
}

/**
 * 检查并解锁成就
 */
function checkAndUnlockAchievements() {
    const progress = getProgress();
    const streak = getStreak();
    const unlocked = [];

    // 检查学习量成就
    if (progress.totalLearned >= 1 && !getAchievements().includes('first_word')) {
        unlocked.push(unlockAchievement('first_word'));
    }
    if (progress.totalLearned >= 10 && !getAchievements().includes('words_10')) {
        unlocked.push(unlockAchievement('words_10'));
    }
    if (progress.totalLearned >= 50 && !getAchievements().includes('words_50')) {
        unlocked.push(unlockAchievement('words_50'));
    }
    if (progress.totalLearned >= 100 && !getAchievements().includes('words_100')) {
        unlocked.push(unlockAchievement('words_100'));
    }
    if (progress.totalLearned >= 500 && !getAchievements().includes('words_500')) {
        unlocked.push(unlockAchievement('words_500'));
    }
    if (progress.totalLearned >= 1000 && !getAchievements().includes('words_1000')) {
        unlocked.push(unlockAchievement('words_1000'));
    }

    // 检查打卡成就
    if (streak >= 3 && !getAchievements().includes('streak_3')) {
        unlocked.push(unlockAchievement('streak_3'));
    }
    if (streak >= 7 && !getAchievements().includes('streak_7')) {
        unlocked.push(unlockAchievement('streak_7'));
    }
    if (streak >= 30 && !getAchievements().includes('streak_30')) {
        unlocked.push(unlockAchievement('streak_30'));
    }

    return unlocked.filter(u => u.unlocked);
}

/**
 * 获取所有成就定义
 */
function getAllAchievementDefs() {
    return ACHIEVEMENT_DEFS;
}

// ========== 错题本 ==========

/**
 * 获取错题列表
 */
function getWrongWords() {
    return get(KEYS.WRONG_WORDS, []);
}

/**
 * 添加错题
 */
function addWrongWord(wordId) {
    const wrongWords = getWrongWords();
    if (!wrongWords.includes(wordId)) {
        wrongWords.push(wordId);
        set(KEYS.WRONG_WORDS, wrongWords);
    }
    return true;
}

/**
 * 移除错题
 */
function removeWrongWord(wordId) {
    const wrongWords = getWrongWords();
    const index = wrongWords.indexOf(wordId);
    if (index > -1) {
        wrongWords.splice(index, 1);
        set(KEYS.WRONG_WORDS, wrongWords);
    }
    return true;
}

/**
 * 重置所有学习进度
 */
function resetAllProgress() {
    remove(KEYS.PROGRESS);
    remove(KEYS.WORD_RECORDS);
    remove(KEYS.CHECK_IN);
    remove(KEYS.ACHIEVEMENTS);
    remove(KEYS.WRONG_WORDS);
    // 保留设置和收藏
    return true;
}

module.exports = {
    // 基础操作
    get,
    set,
    remove,
    clear,

    // 用户设置
    getSettings,
    saveSettings,
    resetSettings,

    // 学习进度
    getProgress,
    updateProgress,
    addTodayLearned,
    addTodayReviewed,

    // 打卡
    getCheckInRecords,
    checkIn,
    getStreak,

    // 单词记录
    getWordRecords,
    getWordRecord,
    saveWordRecord,
    getWordsToReview,
    getReviewCount,

    // 收藏
    getFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,

    // 成就
    getAchievements,
    unlockAchievement,
    checkAndUnlockAchievements,
    getAllAchievementDefs,

    // 错题
    getWrongWords,
    addWrongWord,
    removeWrongWord,

    // 重置
    resetAllProgress,

    // 常量
    KEYS,
    DEFAULT_SETTINGS,
    DEFAULT_PROGRESS,
    ACHIEVEMENT_DEFS
};
