<template>
	<div class="searchPopup">
		<el-dialog
		  title="商品搜索"
		  :visible.sync="searchVisible.show"
		  width="30%"
		  center>		
		    <div class="searchFormBox">
				<el-form :model="searchForm">
				    <el-form-item label="商品条码" :label-width="searchForm.formLabelWidth">
				      <el-input v-model="searchForm.tiaoma" autocomplete="off"></el-input>
				    </el-form-item>
				    <el-form-item label="商品名称" :label-width="searchForm.formLabelWidth">
				     <el-input v-model="searchForm.name" autocomplete="off"></el-input>
				    </el-form-item>
				  </el-form>
				  <span slot="footer" class="dialog-footer">
					<el-button @click="searchVisible.show = false">取 消</el-button>
					<el-button type="primary" @click="searchVisible.show = false">确 定</el-button>
				  </span>
			</div>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		props:{
		  searchVisible:Object,			
		  searchForm: Object,
		},
	}
</script>

<style scoped>
	.searchFormBox{
		padding: 20px 30px 50px;
		box-sizing: border-box;
		text-align: center;
	}
</style>
