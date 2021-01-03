// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import md5 from 'js-md5'
import ElementUI from 'element-ui'
import Vuex from 'vuex'
import 'element-ui/lib/theme-chalk/index.css'
Vue.prototype.$md5 = md5
Vue.use(Vuex)

// 路由请求拦截
// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     var token = localStorage.getItem("zydc_token")
//     //判断是否存在zydc_token，如果存在的话，则每个http header都加上token
//     if (token) {
// 　　　　 config.headers.zydc_token = localStorage.getItem("zydc_token");
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error.response);
//   });

// // 路由响应拦截
// // http response 拦截器
// axios.interceptors.response.use(function (response) {
//   // token 已过期，重定向到登录页面
//   if (response.data.code == "8001"){
//         //console.log(" token 已过期，重定向到登录页面")
//         localStorage.clear()
//         router.replace({
//             path: '/',
//             query: {redirect: router.currentRoute.fullPath}
//         })
//     }
//   return response

// })

// 路由拦截
// router.beforeEach((to, from, next) => {
//   if (to.path === '/Login') {
//   console.log(to.path)
//     next()
//   } else {
// 		if (localStorage.getItem('zydc_token')){
// 			next();
// 		}else{
// 			next({
// 				path: '/Login',
// 				query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
// 			})
// 		}

//   }
// })

// 绑定到axios实例
Vue.prototype.$http = axios
Vue.use(ElementUI)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
