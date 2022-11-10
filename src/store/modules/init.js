// 初始化数据模块
// import api from '@/common/request/index'
// import Vue from "vue";
import store from '@/store'
// import Router from '@/common/router/router.js';
import {INIT, AUTH, AGENDA} from "../name.js";

const state = {
	
    [INIT.LANG]: uni.getStorageSync('lang')? uni.getStorageSync('lang'): "en-US",
}

const actions = {
	
}

const mutations = {
    
    [INIT.SET_LANG](state, data) {
        state[INIT.LANG] = data;
        uni.setStorageSync(INIT.LANG, data);
    }
	
}

const getters = {
	
    [INIT.IS_CHINESE]: state => {
        return state[INIT.LANG].indexOf("zh") == 0;
    }
}

export default {
	state,
	mutations,
	actions,
	getters
}
