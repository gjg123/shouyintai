<template>
	<div class="accountManagement">
		<div class="itemBox">
			<div class="list">
				<span class="lab">当前账号:</span>
				<span>ADMIN</span>
				<el-button class="btnzx"  size="small"  type="primary">注销</el-button>
			</div>
			<div class="list">
				<span class="lab">本机IP:</span>
				<span>192.168.3.44</span>
			</div>
			<div class="backGo">
				<el-button class="btnBack" size="small"   >返回</el-button>
			</div>
		</div>
		

		
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped>
	.accountManagement{
		/*background: red;*/
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
		
		
	}
	.btnzx{
		margin-left: 30px;
	}
	.itemBox{
		margin-top: 50px;
		
	}
	.list{
		margin: 20px 0;
	}
	.btnBack{
		color: #fff;
		background: #f26827;
	}
	.lab{
		display: inline-block;
		width:100px;
		text-align: right;
		margin-right:2px;
	}
	.backGo{
		height:100px;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
</style>
