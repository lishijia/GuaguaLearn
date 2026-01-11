// pages/onboarding/index.js
const onboarding = require('../../utils/onboarding.js');
const storage = require('../../utils/storage.js');

Page({
    data: {
        steps: [],
        currentIndex: 0,
        currentStep: null,
        canGoBack: false,
        canSkip: false
    },

    onLoad() {
        const steps = onboarding.getOnboardingSteps();
        this.setData({
            steps,
            currentStep: steps[0],
            canSkip: steps.length > 1
        });
    },

    // 下一步
    nextStep() {
        const nextIndex = this.data.currentIndex + 1;

        if (nextIndex >= this.data.steps.length) {
            // 完成引导
            this.finishOnboarding();
        } else {
            this.setData({
                currentIndex: nextIndex,
                currentStep: this.data.steps[nextIndex],
                canGoBack: true
            });

            // 检查是否可以跳过
            this.setData({
                canSkip: nextIndex < this.data.steps.length - 1
            });
        }
    },

    // 上一步
    prevStep() {
        if (this.data.currentIndex > 0) {
            const prevIndex = this.data.currentIndex - 1;
            this.setData({
                currentIndex: prevIndex,
                currentStep: this.data.steps[prevIndex],
                canGoBack: prevIndex > 0,
                canSkip: true
            });
        }
    },

    // 跳过引导
    skipOnboarding() {
        wx.showModal({
            title: '跳过引导',
            content: '你可以稍后在设置中重新查看引导',
            confirmText: '跳过',
            cancelText: '继续',
            success: (res) => {
                if (res.confirm) {
                    this.finishOnboarding();
                }
            }
        });
    },

    // 完成引导
    finishOnboarding() {
        onboarding.markOnboardingCompleted();
        storage.checkAndUnlockAchievements();

        wx.showToast({
            title: '设置完成！',
            icon: 'success',
            duration: 1500
        });

        setTimeout(() => {
            wx.switchTab({
                url: '/pages/home/index'
            });
        }, 1500);
    },

    // 点按步骤指示器跳转
    onStepTap(e) {
        const index = e.currentTarget.dataset.index;
        if (index !== this.data.currentIndex) {
            this.setData({
                currentIndex: index,
                currentStep: this.data.steps[index],
                canGoBack: index > 0
            });
        }
    }
});
