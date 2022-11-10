import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入store.
import store from '@/store'  
Vue.prototype.$store = store  

import i18n from '@/i18n/i18n.js'
Vue.prototype._i18n = i18n

const app = new Vue({
	store,
    i18n,
	...App
})

// app.$mount();
import router from '@/common/router/router.js'
import {
	RouterMount
} from 'uni-simple-router'

// #ifdef H5
RouterMount(app, '#app');
// #endif

// #ifndef H5
app.$mount();
// #endif