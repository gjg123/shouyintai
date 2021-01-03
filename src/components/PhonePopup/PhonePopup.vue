<template>
	<div class="phonePoupu">
		<el-dialog
		  title="手机号"
		  :visible.sync="phoneVisible.show"
		  width="30%"
		  center>
		
		    <div class="phoneBox">
				<el-form :model="phoneForm">
				    <el-form-item label="手机号" :label-width="phoneForm.formLabelWidth">
				      <el-input v-model="phoneForm.price" autocomplete="off"></el-input>
				    </el-form-item>
				    
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button @click="phoneVisible.show = false">取 消</el-button>
					<el-button type="primary" @click="phoneVisible.show = false">确 定</el-button>
				</span>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		props:{
			phoneVisible:Object,			
			phoneForm: Object,
		},
	}
</script>

<style scoped>
	.phoneBox{
		padding: 20px 30px 50px;
		box-sizing: border-box;
		text-align: center;
	}
</style>
