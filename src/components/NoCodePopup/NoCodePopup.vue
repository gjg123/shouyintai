<template>
	<div class="NoCodePopup">
		<el-dialog
		  title="无码收银"
		  :visible.sync="noCodeVisible.show"
		  width="30%"
		  center>
		
		    <div class="noCodeBox">
				<el-form :model="noCodeForm">
				    <el-form-item label="收款金额" :label-width="noCodeForm.formLabelWidth">
				      <el-input v-model="noCodeForm.price" autocomplete="off"></el-input>
				    </el-form-item>
				    
				</el-form>
				<span slot="footer" class="dialog-footer">
					<el-button @click="noCodeVisible.show = false">取 消</el-button>
					<el-button type="primary" @click="noCodeVisible.show = false">确 定</el-button>
				</span>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		props:{
			noCodeVisible:Object,			
			noCodeForm: Object,
		},
	}
</script>

<style scoped>
	.noCodeBox{		
		padding: 20px 30px 50px;
		box-sizing: border-box;
		text-align: center;
	}
</style>
