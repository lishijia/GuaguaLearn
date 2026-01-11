/**
 * utils/onboarding.js - 用户引导系统
 * 管理首次使用引导和新功能介绍
 */

const storage = require('./storage.js');

const ONBOARDING_KEY = 'guagua_onboarding_completed';
const ONBOARDING_VERSION = '1.0';

/**
 * 引导步骤配置
 */
const ONBOARDING_STEPS = [
    {
        id: 'welcome',
        title: '欢迎来到瓜瓜记单词! 🎉',
        description: '一款专为小学生设计的英语单词学习应用，让你轻松掌握英语词汇！',
        icon: '🎯',
        position: 'center'
    },
    {
        id: 'learn',
        title: '开始学习 📖',
        description: '点击首页的"开始学习"按钮，开始学习新单词。支持年级分类和随机学习。',
        icon: '📚',
        position: 'center'
    },
    {
        id: 'flashcard',
        title: '单词卡片 🔄',
        description: '左滑表示"不认识"，右滑表示"认识"，上滑可以收藏单词。',
        icon: '👆',
        position: 'center'
    },
    {
        id: 'review',
        title: '智能复习 🧠',
        description: '应用会根据你的记忆情况，自动安排复习时间。记得按时复习哦！',
        icon: '🔁',
        position: 'center'
    },
    {
        id: 'test',
        title: '练习测试 🎯',
        description: '通过选择题、填空题、听力题等多种方式检验学习成果。',
        icon: '✏️',
        position: 'center'
    },
    {
        id: 'progress',
        title: '学习进度 📊',
        description: '查看你的学习统计、打卡记录和成就，见证自己的进步！',
        icon: '🏆',
        position: 'center'
    },
    {
        id: 'settings',
        title: '个性化设置 ⚙️',
        description: '在设置中可以调整每日目标、学习提醒、主题等，打造专属学习体验。',
        icon: '🎨',
        position: 'center'
    },
    {
        id: 'search',
        title: '快速搜索 🔍',
        description: '新增搜索单词功能，可以快速查找任何单词的含义和发音！',
        icon: '🔍',
        position: 'center'
    },
    {
        id: 'backup',
        title: '数据备份 💾',
        description: '在设置中可以导出学习数据，或从备份恢复，再也不怕丢失进度！',
        icon: '📤',
        position: 'center'
    },
    {
        id: 'ready',
        title: '准备好了吗？ 🚀',
        description: '现在就开始你的英语学习之旅吧！加油！',
        icon: '💪',
        position: 'center'
    }
];

/**
 * 检查是否已完成引导
 */
function hasCompletedOnboarding() {
    const data = storage.get(ONBOARDING_KEY, {});
    return data.completed === true && data.version === ONBOARDING_VERSION;
}

/**
 * 标记引导已完成
 */
function markOnboardingCompleted() {
    storage.set(ONBOARDING_KEY, {
        completed: true,
        version: ONBOARDING_VERSION,
        completedAt: new Date().toISOString()
    });
}

/**
 * 重置引导状态（用于测试）
 */
function resetOnboarding() {
    storage.remove(ONBOARDING_KEY);
}

/**
 * 获取引导步骤
 */
function getOnboardingSteps() {
    return ONBOARDING_STEPS;
}

/**
 * 获取特定步骤
 */
function getStep(stepId) {
    return ONBOARDING_STEPS.find(step => step.id === stepId);
}

/**
 * 功能提示管理
 */
const FEATURE_TIPS_KEY = 'guagua_feature_tips';

/**
 * 获取已显示的功能提示
 */
function getShownTips() {
    return storage.get(FEATURE_TIPS_KEY, []);
}

/**
 * 标记功能提示已显示
 */
function markTipShown(tipId) {
    const shown = getShownTips();
    if (!shown.includes(tipId)) {
        shown.push(tipId);
        storage.set(FEATURE_TIPS_KEY, shown);
    }
}

/**
 * 检查功能提示是否已显示
 */
function isTipShown(tipId) {
    return getShownTips().includes(tipId);
}

/**
 * 功能提示配置
 */
const FEATURE_TIPS = {
    swipe_gesture: {
        id: 'swipe_gesture',
        title: '手势提示',
        description: '试试左右滑动卡片？→ 认识  ← 不认识',
        icon: '👆',
        showOnce: true
    },
    favorite: {
        id: 'favorite',
        title: '收藏功能',
        description: '上滑卡片可以收藏重点单词 ⭐',
        icon: '⭐',
        showOnce: true
    },
    pronunciation: {
        id: 'pronunciation',
        title: '发音练习',
        description: '点击单词可以听发音哦 🔊',
        icon: '🔊',
        showOnce: true
    },
    streak: {
        id: 'streak',
        title: '连续打卡',
        description: '连续学习可以获得更多成就！🔥',
        icon: '🔥',
        showOnce: false  // 可以多次显示
    }
};

/**
 * 获取功能提示
 */
function getFeatureTip(tipId) {
    return FEATURE_TIPS[tipId];
}

/**
 * 检查是否应该显示功能提示
 */
function shouldShowTip(tipId) {
    const tip = FEATURE_TIPS[tipId];
    if (!tip) return false;

    if (tip.showOnce) {
        return !isTipShown(tipId);
    }
    return true;
}

/**
 * 显示功能提示
 */
function showFeatureTip(page, tipId) {
    if (!shouldShowTip(tipId)) return;

    const tip = getFeatureTip(tipId);
    if (!tip) return;

    wx.showModal({
        title: tip.title,
        content: tip.description,
        showCancel: false,
        confirmText: '知道了',
        success: () => {
            if (tip.showOnce) {
                markTipShown(tipId);
            }
        }
    });
}

module.exports = {
    // 引导流程
    hasCompletedOnboarding,
    markOnboardingCompleted,
    resetOnboarding,
    getOnboardingSteps,
    getStep,

    // 功能提示
    showFeatureTip,
    shouldShowTip,
    getFeatureTip,
    markTipShown,
    isTipShown,

    // 常量
    ONBOARDING_VERSION,
    ONBOARDING_STEPS,
    FEATURE_TIPS
};
