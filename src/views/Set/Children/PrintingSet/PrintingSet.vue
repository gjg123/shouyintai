<template>
	<div class="generalSet">
		<div class="generalSetCenter">
			<div class="itemBox">
				<span class="lables">小票打印机IP:</span>
				<el-input class="aaa" type="text" v-model="form.ip" autocomplete="off"></el-input>
				<el-button class="" size="small"  type="primary" >查找</el-button>
			</div>	
			<div class="itemBox">
				<span class="lables">打印机规格:</span>
				<el-select v-model="form.guige" placeholder="请选择活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			</div>
			<div class="itemBox">
				<span class="lables">打印张数:</span>
				<el-select v-model="form.num" placeholder="请选择活动区域">
			      <el-option label="区域一" value="shanghai"></el-option>
			      <el-option label="区域二" value="beijing"></el-option>
			    </el-select>
			</div>
			
			<div class="itemBox upDiv">
				<span class="lables">小票LOGO:</span>
					<el-upload
					  class="uploadDiv"
					  ref="upload"
					  action="https://jsonplaceholder.typicode.com/posts/"
					  :on-preview="handlePreview"
					  :on-remove="handleRemove"
					  :file-list="fileList"
					  :auto-upload="false">
					  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
					  
					  <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
					</el-upload>
			</div>
			<div class="itemBox lastItemBox">
			  	 <el-button size="small"  type="danger" >返回</el-button>
				 <el-button @click="clickSave" size="small"  type="danger" >保存</el-button>
			</div>
					   
		</div>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	fileList: [],
		form:{
			ip:"44444",
			guige:"99999",
			num:123,
			
		}
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      clickUpLoad(){
      	
      },
      clickSave(){
      	console.log(this.$refs.upload.uploadFiles)
      	console.log(this.fileList)
      }
    }
  }
</script>

<style scoped>
	.upDiv .lables{
		margin-right: 10px;

	}
	.upDiv{
		height:100px;
		display: flex;
		justify-content: center;
		align-items: center;
		justify-content: flex-start;
	}
	.uploadDiv{
		width:80px;
	}
	.aaa{
		
		width:220px;
	}
	.lables{
		width:150px;
		text-align: right;
		display: inline-block;
	}
	.itemBox{
		margin:20px;
	}
	.generalSet{
		
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
	}
	.generalSetCenter{
		margin-top: 50px;
	}
	.lastItemBox{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cha{
		
	}
</style>
