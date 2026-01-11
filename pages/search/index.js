// pages/search/index.js
const words = require('../../utils/words.js');
const storage = require('../../utils/storage.js');

Page({
    data: {
        searchKeyword: '',
        searchResults: [],
        searchHistory: [],
        isSearching: false,
        showResults: false
    },

    onLoad() {
        this.loadSearchHistory();
    },

    // 加载搜索历史
    loadSearchHistory() {
        const history = storage.get('search_history', []);
        this.setData({ searchHistory: history });
    },

    // 搜索输入
    onSearchInput(e) {
        const keyword = e.detail.value;
        this.setData({ searchKeyword: keyword });
    },

    // 执行搜索
    onSearch() {
        const keyword = this.data.searchKeyword.trim();

        if (!keyword) {
            wx.showToast({ title: '请输入搜索关键词', icon: 'none' });
            return;
        }

        this.setData({ isSearching: true });

        // 执行搜索
        const results = words.searchWords(keyword);

        // 保存搜索历史
        this.saveSearchHistory(keyword);

        this.setData({
            searchResults: results.slice(0, 50), // 限制显示50条结果
            isSearching: false,
            showResults: true
        });

        if (results.length === 0) {
            wx.showToast({ title: '未找到相关单词', icon: 'none' });
        } else {
            wx.showToast({ title: `找到 ${results.length} 个单词`, icon: 'none' });
        }
    },

    // 保存搜索历史
    saveSearchHistory(keyword) {
        let history = this.data.searchHistory;

        // 移除重复项
        history = history.filter(item => item !== keyword);

        // 添加到开头
        history.unshift(keyword);

        // 限制历史记录数量
        if (history.length > 10) {
            history = history.slice(0, 10);
        }

        this.setData({ searchHistory: history });
        storage.set('search_history', history);
    },

    // 点击历史记录
    onHistoryTap(e) {
        const keyword = e.currentTarget.dataset.keyword;
        this.setData({ searchKeyword: keyword });
        this.onSearch();
    },

    // 清空搜索历史
    clearHistory() {
        wx.showModal({
            title: '清空历史',
            content: '确定要清空所有搜索历史吗？',
            success: (res) => {
                if (res.confirm) {
                    this.setData({ searchHistory: [] });
                    storage.remove('search_history');
                    wx.showToast({ title: '已清空', icon: 'success' });
                }
            }
        });
    },

    // 查看单词详情
    viewWord(e) {
        const wordId = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: `/pages/word-detail/index?id=${wordId}`
        });
    },

    // 清空搜索
    clearSearch() {
        this.setData({
            searchKeyword: '',
            searchResults: [],
            showResults: false
        });
    },

    // 学习该单词
    learnWord(e) {
        const word = e.currentTarget.dataset.word;
        // 跳转到学习页面，从该单词开始
        wx.navigateTo({
            url: `/pages/study/index?mode=learn&wordId=${word.id}`
        });
    }
});
