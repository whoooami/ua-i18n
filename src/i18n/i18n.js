import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './langs/zh-CN.js'
import enUS from './langs/en-US.js'

Vue.use(VueI18n)

const messages = {
    "en-US": enUS,
    "zh-CN": zhCN
}

const i18n = new VueI18n({
    locale: uni.getStorageSync('lang') ? uni.getStorageSync('lang'): 'zh-CN',  //默认中文，也可根据系统语言动态设置
    messages
})

export default i18n