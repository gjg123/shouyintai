import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
// 		zydc_token: '',
// 		name: '',
// 		roles: [],
// 
//   },
//   mutations: {
// 		set_zydc_token:function(state,token){
// 			state.zydc_token=token
// 		}
//   },
//   actions: {
// 		set_zydc_token( {commit} , i ){
//         commit( 'set_zydc_token' , i )
//     },
//   }
// })
const store = new Vuex.Store({
  state: {
		zydc_token: '',
		name: '',
		roles: [],

  },
  mutations: {
		set_zydc_token:function(state,token){
			state.zydc_token=token
		}
  },
  actions: {
		set_zydc_token( {commit} , i ){
        commit( 'set_zydc_token' , i )
    },
  }
})
export default store