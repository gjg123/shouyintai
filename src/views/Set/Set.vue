<template>
	<div class="set">
		<div class="leftContent">
			<p class="title">系统设置</p>
			<ul class="topUl">
				<li>

					<router-link to="/Layout/Set/printingSet">打印设置</router-link>
				</li>
				<li>
					<router-link to="/Layout/Set/AccountManagement">账号管理</router-link>
				</li>
        <li>
        	<router-link to="/Layout/Set/AccountManagement">密码修改</router-link>
        </li>
        
			</ul>
		</div>
		<div class="rightContent">

			<router-view/>
		</div>
	</div>
</template>

<script>
	export default {
		    data() {
			  return {
				tabPosition: 'left'
			  };
			}
	}
</script>

<style scoped>
	.set{
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
	}
	.leftContent{

		width:30%;
		height:100%;

		box-sizing: border-box;
		border:1px solid #999;
	}
	.rightContent{
		width:70%;
		height:100%;

	}
	.title{
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ccc;
		height:48px;
	}
	.topUl{
		padding:0 10px 10px;
	}
	.topUl li{
		width: 100%;
		height:48px;
		display: flex;
		justify-content: center;
		align-items: center;
		border:1px solid #999;
		margin :10px 0;
	}
</style>
