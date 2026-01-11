/**
 * utils/sm2.js - SM-2 间隔重复算法
 * 基于 SuperMemo 2 算法实现自适应复习计划
 */

/**
 * SM-2 算法参数
 * - repetition: 连续正确回答次数
 * - easeFactor: 难度系数 (最小 1.3)
 * - interval: 下次复习间隔 (天)
 * - nextReview: 下次复习时间戳
 */

const MIN_EASE_FACTOR = 1.3;
const DEFAULT_EASE_FACTOR = 2.5;

/**
 * 创建新的单词学习记录
 */
function createNewRecord(wordId) {
    return {
        wordId,
        repetition: 0,
        easeFactor: DEFAULT_EASE_FACTOR,
        interval: 0,
        nextReview: Date.now(),
        lastReview: null,
        status: 'new' // new, learning, mastered
    };
}

/**
 * 计算下一次复习
 * @param {Object} record - 当前记录
 * @param {number} quality - 回答质量 (0-5)
 *   0 - 完全不记得
 *   1 - 不正确，但看到答案后想起来了
 *   2 - 不正确，但答案看起来很简单
 *   3 - 正确，但需要很大努力回想
 *   4 - 正确，稍有犹豫
 *   5 - 完美回答
 * @returns {Object} - 更新后的记录
 */
function processAnswer(record, quality) {
    // 确保 quality 在有效范围内
    quality = Math.max(0, Math.min(5, Math.round(quality)));

    let { repetition, easeFactor, interval } = record;

    if (quality >= 3) {
        // 答对了
        switch (repetition) {
            case 0:
                interval = 1;
                break;
            case 1:
                interval = 6;
                break;
            default:
                interval = Math.round(interval * easeFactor);
        }
        repetition += 1;
    } else {
        // 答错了，重新开始
        repetition = 0;
        interval = 1;
    }

    // 更新难度系数
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    easeFactor = Math.max(MIN_EASE_FACTOR, easeFactor);

    // 计算下次复习时间
    const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;

    // 确定状态
    let status = 'learning';
    if (repetition === 0) {
        status = 'new';
    } else if (repetition >= 5 && easeFactor >= 2.0) {
        status = 'mastered';
    }

    return {
        ...record,
        repetition,
        easeFactor: Math.round(easeFactor * 100) / 100,
        interval,
        nextReview,
        lastReview: Date.now(),
        status
    };
}

/**
 * 简化的回答处理 - 只用"认识"和"不认识"
 * @param {Object} record - 当前记录
 * @param {boolean} known - 是否认识
 * @returns {Object} - 更新后的记录
 */
function processSimpleAnswer(record, known) {
    // 认识 = quality 4, 不认识 = quality 1
    return processAnswer(record, known ? 4 : 1);
}

/**
 * 获取单词当前状态
 * @param {Object} record - 单词记录
 * @returns {string} - 'new' | 'learning' | 'review' | 'mastered'
 */
function getWordStatus(record) {
    if (!record) return 'new';

    if (record.status === 'mastered') return 'mastered';

    if (record.nextReview <= Date.now()) {
        return 'review';
    }

    return record.status;
}

/**
 * 判断单词是否需要复习
 * @param {Object} record - 单词记录
 * @returns {boolean}
 */
function needsReview(record) {
    if (!record) return false;
    return record.nextReview <= Date.now();
}

/**
 * 获取下次复习的友好时间描述
 * @param {Object} record - 单词记录
 * @returns {string}
 */
function getNextReviewText(record) {
    if (!record) return '未学习';

    const now = Date.now();
    const diff = record.nextReview - now;

    if (diff <= 0) return '现在复习';

    const minutes = Math.floor(diff / (60 * 1000));
    const hours = Math.floor(diff / (60 * 60 * 1000));
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));

    if (days > 0) return `${days}天后`;
    if (hours > 0) return `${hours}小时后`;
    if (minutes > 0) return `${minutes}分钟后`;
    return '即将复习';
}

/**
 * 计算单词掌握度百分比
 * @param {Object} record - 单词记录
 * @returns {number} - 0-100
 */
function getMasteryPercentage(record) {
    if (!record) return 0;

    // 基于 repetition 和 easeFactor 计算
    const repScore = Math.min(record.repetition / 5, 1) * 60;
    const easeScore = Math.min((record.easeFactor - MIN_EASE_FACTOR) / (3.0 - MIN_EASE_FACTOR), 1) * 40;

    return Math.round(repScore + easeScore);
}

/**
 * 按复习优先级排序单词
 * @param {Array} records - 单词记录数组
 * @returns {Array} - 排序后的数组
 */
function sortByReviewPriority(records) {
    return records.slice().sort((a, b) => {
        // 需要复习的优先
        const aNeeds = needsReview(a);
        const bNeeds = needsReview(b);

        if (aNeeds && !bNeeds) return -1;
        if (!aNeeds && bNeeds) return 1;

        // 都需要复习时，按超时时间排序
        if (aNeeds && bNeeds) {
            return a.nextReview - b.nextReview;
        }

        // 都不需要复习时，按下次复习时间排序
        return a.nextReview - b.nextReview;
    });
}

/**
 * 统计学习数据
 * @param {Object} records - 所有单词记录 { wordId: record }
 * @returns {Object}
 */
function getStatistics(records) {
    const values = Object.values(records);

    const stats = {
        total: values.length,
        new: 0,
        learning: 0,
        mastered: 0,
        needsReview: 0
    };

    values.forEach(record => {
        switch (record.status) {
            case 'new':
                stats.new++;
                break;
            case 'learning':
                stats.learning++;
                break;
            case 'mastered':
                stats.mastered++;
                break;
        }

        if (needsReview(record)) {
            stats.needsReview++;
        }
    });

    return stats;
}

module.exports = {
    // 核心功能
    createNewRecord,
    processAnswer,
    processSimpleAnswer,

    // 状态查询
    getWordStatus,
    needsReview,
    getNextReviewText,
    getMasteryPercentage,

    // 工具函数
    sortByReviewPriority,
    getStatistics,

    // 常量
    MIN_EASE_FACTOR,
    DEFAULT_EASE_FACTOR
};
