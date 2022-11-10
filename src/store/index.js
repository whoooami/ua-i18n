import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import init from './modules/init.js'

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
	
	modules:{
		init,
	},
	
	state: {
		// uid: 0,
		// token: ,
		// loginProvider: "",
		// user: {},
		// openid: null,
		// testvuex:false,
        // colorIndex: 0,
        // colorList: ['#FF0000','#00FF00','#0000FF']
		
		// vm: {},
	},
	mutations: {
		
		// setTestVuex(state, b){
		// 	state.testvuex = b
		// },
        // setColorIndex(state,index){
        //     state.colorIndex = index
        // }
		// SEND_THIS(state, vm) {
		// 	state.vm = vm;
		// 	console.log("send_this", vm);
		// },
	},
    getters:{
        // currentColor(state){
        //     return state.colorList[state.colorIndex]
        // },
		// getVm(state) {
		// 	return state.vm;
		// },
    },
	actions: {
		// lazy loading openid
		// getUserOpenId: async function ({
		// 	commit,
		// 	state
		// }) {
		// 	return await new Promise((resolve, reject) => {
		// 		if (state.openid) {
		// 			resolve(state.openid)
		// 		} else {
		// 			uni.login({
		// 				success: (data) => {
		// 					commit('login')
		// 					setTimeout(function () { //模拟异步请求服务器获取 openid
		// 						const openid = '123456789'
		// 						console.log('uni.request mock openid[' + openid + ']');
		// 						commit('setOpenid', openid)
		// 						resolve(openid)
		// 					}, 1000)
		// 				},
		// 				fail: (err) => {
		// 					console.log('uni.login 接口调用失败，将无法正常使用开放接口等服务', err)
		// 					reject(err)
		// 				}
		// 			})
		// 		}
		// 	})
		// },
		
	},
    // 在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。
    strict: debug
})

export default store
