import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'//布局组件
import Home from '@/views/Home/Home.vue'//收银首页
import Help from '@/views/Help/Help.vue'//帮助组件
import Records from '@/views/Records/Records.vue'//销售记录
import Set from '@/views/Set/Set.vue'//系统设置
import Login from '@/views/Login/Login.vue'//登录
import TopNav from '@/components/TopNav/TopNav.vue'//公用头部导航组件
import Vip from '@/views/Vip/Vip.vue'//Vip
import Switch from '@/views/Switch/Switch.vue'//Switch
import LoginChange from '@/views/LoginChange/LoginChange.vue'//LoginChange


import AccountManagement from '@/views/Set/Children/AccountManagement/AccountManagement.vue'//
import ChangePassword from '@/views/Set/Children/ChangePassword/ChangePassword.vue'//
import GeneralSet from '@/views/Set/Children/GeneralSet/GeneralSet.vue'//
import HelpCenter from '@/views/Set/Children/HelpCenter/HelpCenter.vue'//
import PrintingSet from '@/views/Set/Children/PrintingSet/PrintingSet.vue'//

Vue.use(Router)
export default new Router({
	//mode: 'history',
 routes: [
	{
	  path: '/',
	  redirect: {
		name: 'login'
	  },
	},
  {
  	path:'/demo',
  	name:'demo',
  	component: () => import("@/views/demo/demo.vue"),
  },
	{
	  path: '/Login',
	  name: 'login',
	  component: Login,
	},
  {
    path: '/superPage',
    name: 'superPage',
    component: () => import("@/views/superPage"),
  },
  
    {
      path: '/Layout',
      name: 'layout',
      component: Layout,
			redirect:'/Layout/Home',
			children:[
				{
				  path:'Home',
				  name:'home',
				  component: Home
				},
				{
				  path:'Help',
				  name:'Help',
				  component: Help
				},
        {
          path:'LoginChange',
          name:'LoginChange',
          component: LoginChange
        },

        {
          path:'Switch',
          name:'Switch',
          component: Switch
        },
        {
          path:'Vip',
          name:'Vip',
          component: Vip
        },
				{
				  path:'Records',
				  name:'records',
				  component: Records
				},
				{
				  path:'Set',
				  name:'set',

				  component: Set,
					children:[
						{
							path:'PrintingSet',
							name:'printingset',
							component: PrintingSet
						},
						{
							path:'AccountManagement',
							name:'accountmanagement',
							component: AccountManagement
						},
// 						{
// 							path:'ChangePassword',
// 							name:'changepassword',
// 							component: ChangePassword
// 						},
// 						{
// 							path:'GeneralSet',
// 							name:'generalset',
// 							component: GeneralSet
// 						},
// 						{
// 							path:'HelpCenter',
// 							name:'helpcenter',
// 							component: HelpCenter
// 						},

					]
				},
			]
    },

 ]
})
