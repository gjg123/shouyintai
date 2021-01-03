<template>
	<div class="changePassword">
		
		  
			<div class="box">
				<span class="span">旧密码</span>
				<el-input type="password"  v-model="oldPassword"></el-input>
			</div>
		  
		 
			<div class="box">
				<span class="span">新密码</span>
				<el-input type="password" v-model="newPassword"></el-input>
			</div>
			  <div class="box">
				<span class="span">确认密码</span>
				<el-input type="password" v-model="confirmPassword"></el-input>
			  </div>
		  
		  
			<div class="btnBox">
				<el-button type="primary" >返回</el-button>
				<el-button >保存</el-button>
			</div>
		  
		</el-form>
	</div>
</template>

<script>
	export default {
		    data() {			  
			    return {
				  oldPassword:'',
				  newPassword:'',
				  confirmPassword:'',
				}				
			},
			methods: {
			 
			}
	}
</script>

<style scoped>
	.changePassword{
		padding-top: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		width:100%;
		height:100%;
	}
	.box{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px 0;
		
	}
	.span{
		display: inline-block;
		width:150px;
		text-align: center;
		line-height: 40px;
		height:40px;
	}
	.btnBox{
		padding:20px 0;
	}
</style>
