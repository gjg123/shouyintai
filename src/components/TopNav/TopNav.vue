<template>
	<div class="topNav synav">
		<div>
			<img src="../../assets/kk_03.png" class="syimg"/>
			<el-menu :router="true"
				:default-active="$route.path"
				background-color="#48a9fa"
				:collapse="isCollapse"
				mode="horizontal"
				text-color="#fff"
				active-text-color="#ffd04b">
			        <template v-for="route in items">
			          <el-menu-item v-if="!route.children || route.children.length == 1" :index="route.path" :key="route.path">
						  <span slot="title">{{ route.name }}</span>
			          </el-menu-item>
			          <el-submenu v-else :index="route.path" :key="route.path">
			            <template slot="title">
							<span slot="title">{{ route.name }}</span>
			            </template>
			            <el-menu-item v-for="child in route.children" :index="child.path" :key="child.path">
							<span slot="title">{{ child.name }}</span>
			            </el-menu-item>
			          </el-submenu>
			        </template>
			</el-menu>
		</div>
		<div class="user">
			<span>用户名称:</span>
			<span class="userName">{{userInfo.phone}}</span>
			<span>店铺名称:</span>
			<span class="userName">{{shopInfo.shopName}}</span>
			<img @click="out" src="../../assets/kk_06.png"/>
		</div>
	</div>
</template>

<script>
	import Cookies from 'js-cookie'
	export default {
		data() {
		  return {
			    companyName:"王",//店铺名称
				username:'111',
				shopName:'222',
				shopInfo:{},
				userInfo:"",
				activeIndex: '1',
				activeIndex2: '1',
				isCollapse:false,
				items: [
						{
						  icon: "fa-money",
						  name: "收银台",
						  path: "/Layout/Home",
						},
						{
						  name: "销售记录",
						  path: "/Layout/Records",
						},

            {
              name: "VIP会员",
              path: "/Layout/Vip",
            },
            {
              name: "换班登录",
              path: "/Layout/LoginChange",
            },
						{
						  name: "模式切换",
						  path: "/Layout/Switch",
						},
            {
              name: "系统设置",
              path: "/Layout/Set",
            },
				]
		  };
		},
		mounted() {
			// var shopInfo = localStorage.getItem('shopInfo')//用户信息
			// this.shopInfo = JSON.parse(shopInfo)
			// var userInfo = localStorage.getItem('userInfo')//用户信息
			// this.userInfo = JSON.parse(userInfo)
		//if (this.username == undefined && this.username == undefined){
// 				alert("已过期,请重新登录")
// 			}
		},
		created(){
			//this.getUserList()
		},
		methods: {
			out(){
				// Cookies.remove('username');
				// Cookies.remove('zydc_token');

				// localStorage.removeItem('userInfo');
				// localStorage.removeItem('menu');
				// localStorage.removeItem('shopInfo');
				// localStorage.removeItem('companyName');
				// localStorage.removeItem('userName');
				// localStorage.removeItem('zydc_token');
				// localStorage.removeItem('peizhiList');

				this.$router.push({path:'/Login'})
			},
			getUserList(){
				var userInfo = localStorage.getItem('userInfo')
				console.log()
				this.userName = JSON.parse(userInfo).name
				this.shopName = JSON.parse(userInfo).shopCode
			},
		    handleSelect(key, keyPath) {
				console.log(key, keyPath);
		    }
		}
	}
</script>

<style scoped>
	.synav{
		padding-left: 70px;
		box-sizing: border-box;
		position: relative;
	}
	.syimg{
		width:60px;
		height:50px;
		position: absolute;
		top:5px;
		left:0;
	}
	.loginoutImg{

		height:40px;
		padding-top: 0px;
		box-sizing: border-box;
	}
	.userName{
		margin-right:20px;
	}
	.topNav{
		/*height: 60px;*/
		width:80%;
		color:#fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.user{

		display: flex;
		align-items: center;

	}



</style>
