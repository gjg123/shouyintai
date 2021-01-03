<template>
	<div class="layout">
		<header class="header">
			<top-nav></top-nav>
		</header>
		<div class="main">
			<router-view/>
		</div>
	</div>
</template>

<script>
	import TopNav from '@/components/TopNav/TopNav.vue'//公用头部导航组件
	import Home from '@/views/Home/Home.vue'//首页组件
	export default {
		name:'Layout',
		components:{
			TopNav,
			Home
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	.layout{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding-bottom: 32px;
		box-sizing: border-box;
	}
	.header{
		width:100%;
		
		display: flex;
		justify-content: center;
		background:#48a9fa ;
	}
	.main{
		width:80%;
		height: 100%;
		/*height: calc(100% -40px);*/
		margin: 0 auto;
		overflow: hidden;
	}
</style>
