<template>
  <div class="loginBox">
		<div class="box">
			<div>
				<!-- <img src="../../assets/per.png" alt=""> -->
			</div>
			<div>
				<div>
					<!-- ID:{{macAddrss}} -->
				</div>
				<div>
         <!-- <span class="lableName">用户名</span> -->
					<input maxlength="11" @blur="upperCase()" type="text" placeholder="请输入用户名" class="inp" v-model="username"/>
				</div>
				<div>
        <!--  <span class="lableName">密码</span> -->
					<input @blur="upperCasePwd()" type="password" placeholder="请输入密码" class="inp" v-model="password"/>
				</div>
        <div>
          <!-- <span class="lableName">角色</span> -->
            <el-select style="width: 225px;margin: 10px 0;" v-model="value" placeholder="请选择角色">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
        </div>
				<div  class="forgetPwd">
					<!-- <span>忘记密码?</span> -->
				</div>
				<div>
					<el-button style="width: 100%;margin: 10px 0;" @click="loginIn" type="success">登录00</el-button>
				</div>
			</div>
		</div>
		<div>
			<el-dialog
			  title="提示"
			  :visible.sync="dialogVisible"
			  width="50%"
			  >
			  <div class="titBox">
				  <div>
					  <span class="tit">无法获取企业编号，请输入信息!</span>
           <div>
             <div style="margin: 10px 0;">
               <span>所属行业</span>
               <el-select ref="selection2" @change="onSelectedDrug2" v-model="value2" placeholder="请选择">
                   <el-option
                     v-for="item in options2"
                     :key="item.industryNo"
                     :label="item.industryName"
                     :value="item.industryNo">
                   </el-option>
                 </el-select>
             </div>
                <div style="margin: 10px 0;">
                  <span>企业名称</span>
                  <el-select @change="onSelectedDrug1" ref="selection1" v-model="value1" placeholder="请选择">
                      <el-option
                        v-for="item in options1"
                        :key="item.enterpriseNo"
                        :label="item.enterpriseName"
                        :value="item.enterpriseNo">
                      </el-option>
                    </el-select>
                </div>

                <div style="margin: 10px 0;">
                  <span>选择城市</span>
                  <div style="display: inline-block;">
                    <el-select ref="selection3" v-model="value3" placeholder="请选择">
                        <el-option
                          v-for="item in options3"
                          :key="item.cityNo"
                          :label="item.cityName"
                          :value="item.cityNo">
                        </el-option>
                      </el-select>
                   <!-- <city></city> -->
                  </div>
                </div>
                <div style="margin: 10px 0;">
                  <span>选择店铺</span>
                  <div style="display: inline-block;">
                    <el-select ref="selection4" v-model="value4" placeholder="请选择">
                        <el-option
                          v-for="item in options4"
                          :key="item.shopNo"
                          :label="item.shopName"
                          :value="item.shopNo">
                        </el-option>
                      </el-select>
                   <!-- <city></city> -->
                  </div>
                </div>
                <div style="margin: 10px 0;">
                  <span>设备编号</span>
                  <input  type="text" placeholder="请输入设备编号" class="inp" v-model="codeDeverces"/>
                </div>
           </div>
					  <div class="okBox">
						  <span slot="footer" class="dialog-footer">
						  		<el-button type="primary" @click="saveUserBefore">保存</el-button>
						  </span>
					  </div>
				  </div>
			  </div>
			</el-dialog>
		</div>
		<div>
			<el-dialog
			  title=""
			  :visible.sync="inputVisibal"
			  width="50%"
			  >
			  <div class="inpsBox">
				  <div>
					  <span class="tit"> 提示:设备激活申请!</span>
					  <input  type="text" placeholder="请输入设备名称 " class="inps" v-model="sbmc"/>
					  <div class="okBox">
						  <span slot="footer" class="dialog-footer">
						  		<el-button type="primary" @click="inputVisibalPopup">确 定</el-button>
						  </span>
					  </div>
				  </div>
			  </div>
			</el-dialog>
		</div>
		<div>
			<el-dialog
			  title="提示"
			  :visible.sync="jihuo"
			  width="50%"
			  >
			  <div class="jihuoBox">
				<div class="zdhBox">
					<span class="zdh">终端号未激活,请先激活终端号</span>
					<el-button type="primary" @click="jihuo = false">确 定</el-button>
				</div>
			  </div>
			</el-dialog>
		</div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import city from '../demo/demo.vue'
export default {
  components:{
    city
  },
  data() {
    return {
      code:null,
      codeDeverces:'',
      options: [{
      value: '收银员',
      label: '收银员'
    }, {
      value: '管理员',
      label: '管理员'
    }, {
      value: '财务',
      label: '财务'
    }],
    options1:[
      {
        enterpriseId: '01',
        enterpriseName: '冠华瑞和'
      }, {
        enterpriseId: '02',
        enterpriseName: '大华'
      }, {
        enterpriseId: '03',
        enterpriseName: '镜头大厦'
      },
    ],
    options2: [
      {
        industryId: '01',
        industryName: '珠宝首饰'
      }, {
        industryId: '02',
        industryName: '餐饮'
      }, {
        industryId: '03',
        industryName: '物流'
      },
    ],
    options3:[
      {
        "cityId": "B347FD46-D70F-4F22-9501-601CEB8075D9",
        "cityNo": "00000001",
        "cityName": "北京",
        "cityDescribe": "北京欢迎你您！"
      }, {
        "cityId": "B2EE1DDB-89D0-4CA6-8149-134DD9D5B74D",
        "cityNo": "00000002",
        "cityName": "上海",
        "cityDescribe": "上海是全国最大的城市"
      },
    ],
    options4:[
      {
      "shopId": "33D552A3-FCDC-4DE7-8D5B-EEEFE715ADF0",
      "shopNo": "00000001",
      "shopName": "盛世豪情",
      "shopDescribe": "盛世豪情盛世豪情盛世豪情盛世豪情"
    },
  ],
    value: '',
    value2:'',
    value1:'',
    value3:'',
    value4:'',
	  jihuo:false,
	  sbmc:'',
	  extIs:1,
	  offlineShopCode:"",//
	  shopCode:"",
	  userInfo:{},
    code:'',
	  inputVisibal:false,
	  macAddrss:"",
	  dialogVisible:false,
      username: "",
      password: "",
      userkey:false,
      erryMsg:""
    };
  },
  mounted() {
	  console.log(this.$route)
	  console.log(this.$route.query.macAddrss)
	  let userInfo = localStorage.getItem('userInfo')
	  this.userInfo = JSON.parse(userInfo)
	  let _macAddrssNew = this.$route.query.macAddrss || null;
	  let _macAddrssOld = localStorage.getItem('macAddrss') || null;
	  if(_macAddrssNew !== _macAddrssOld){
		   // this.macAddrss = _macAddrssNew === ""?_macAddrssOld:_macAddrssNew;
		   this.macAddrss = _macAddrssNew || _macAddrssOld;
	  }
	  localStorage.setItem('macAddrss',this.macAddrss)
  },
  created(){

	 //console.log(this.$router)
  },
  methods: {
    //企业名称选择下拉框事件
     onSelectedDrug1(id){
       console.log(id)
       this.value3 = ''
       let strId = ''
       for (let i=0;i<this.options1.length;i++){
         if (id == this.options1[i].enterpriseNo){
           strId = this.options1[i].enterpriseId
           break
         }
       }
       this.getShopList(strId)// 获取店铺信息
     },
      //行业下拉框改变事件
      onSelectedDrug2(id){
        console.log(id)
        console.log(this.options2)
        this.value1 = ''
        let strId = ''
        for (let i=0;i<this.options2.length;i++){
          if (id == this.options2[i].industryNo){
            strId = this.options2[i].industryId
            break
          }
        }
        this.getEnterpriseList(strId)//获取企业名称和编码
      },
      saveUserBefore(){
        console.log(this.value2)
        console.log(this.value1)

        console.log(this.value3)
        console.log(this.value4)
        let str = this.value2 + this.value1 +this.value3 + this.value4
        var strs = ''
        if (this.codeDeverces == ''){
          strs = '        '
        }else {
          strs = this.codeDeverces
        }
        this.code = str + strs
        console.log(this.code)
        localStorage.setItem('codeShopEnterprise',this.code)


        this.dialogVisible = false
      },
       //获取企业名称和编码
      getEnterpriseList(id){
        let that = this
        this.$http({
          method:"get",
          url:"/api/getEnterpriseList?industryId="+id,
        })
        .then(function(res) {
        	console.log('接口调用获取企业名称和编码成功')
          console.log(res)
          that.options1 = res.data.list
        })
        .catch(function(err) {
          console.log('接口调用失败');
        });
      },
      //获取行业
      getIndustryList(){
        let that = this
        this.$http({
          method:"get",
          url:"/api/getIndustryList",
        })
        .then(function(res) {
        	console.log('接口调用')
          console.log(res)
          that.options2 = res.data.list
        })
        .catch(function(err) {
          console.log('接口调用失败');
        });
      },
      //获取城市
      getCityList(){
        let that = this
        this.$http({
          method:"get",
          url:"/api/getCityList",
        })
        .then(function(res) {
        	console.log('接口调用')
          console.log(res)
          that.options3 = res.data.list
        })
        .catch(function(err) {
          console.log('接口调用失败');
        });
      },
      // 获取店铺信息
      getShopList(id){
        let that = this
        this.$http({
          method:"get",
          url:"/api/getShopList?enterpriseId="+id,
        })
        .then(function(res) {
        	console.log('接口调用')
          console.log(res)
          that.options4 = res.data.list
        })
        .catch(function(err) {
          console.log('接口调用失败');
        });
      },
      loginIn(){
        this.$router.push({path:'/Layout/Home'})
        // this.$md5('hello world')
          if (!localStorage.getItem('codeShopEnterprise')){
            this.dialogVisible = true
            this.value2 = ''
            this.value1 = ''
            this.value3 = ''
            this.value4 = ''
            this.getIndustryList() //获取行业
            this.getCityList()//获取城市
          }else {
            var that = this
            this.$http({
              method:"post",
              url:"/api/login",
               data:{
                 'userName':'admin',
                 'password':'123456',
                 'role':1,
                 'code':localStorage.getItem('codeShopEnterprise')
               }
            })
            .then(function(res) {
              console.log('登录接口调用成功')
              console.log(res)
            })
            .catch(function(err) {
              console.log('接口调用失败');
            });
          }





       		 //this.$router.push({path:'/Layout/Home'})



      		//设备管理code就是MAk地址
      		//先判断mak地址,判断MAk地址是否为空,若为空则提示须激活,若激活状态,则继续往下走
      		//若为空则获取shopCode 和
      		//店铺code 	shopCode
      		//var shopCode = JSON.parse(localStorage.getItem("userInfo")).shopCode//店铺code
      		//console.log(shopCode)
      		//MAk地址 this.macAddrss
      		//判断MAC地址是否为空,若为空则提示须激活,若激活状态,则继续往下走进入登录
      		//console.log(this.macAddrss+"----登陆接口----------")
      		// if (this.macAddrss ===''){
      		// 	this.dialogVisible = true//提示弹框
      		// 	return;
      		// }
      		//this.username == "13533334444" && this.password == "123123" &&
      		// if (this.password == '' || this.username == ''){
      		// 	this.$alert('输入不能为空!请重新输入', '提示', {
      		// 	  confirmButtonText: '确定',
      		// 	   center: true,
      		// 	});
      		// 	return
      		// }
      	// 	var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
      	//  　　if (!myreg.test(this.username)) {
      	// 		this.$alert('请输入正确的手机号格式', '提示', {
      	// 		  confirmButtonText: '确定',
      	// 		   center: true,
      	// 		});
      	// 		return
      	// 	}
      	 	// var data = {
      	 	// 	"phone":"13533334444",//this.username.replace(/(^\s*)|(\s*$)/g, ""),//that.username,
      	 	// 	"pwd":"123123",//this.password.replace(/(^\s*)|(\s*$)/g, ""),//"123123",//that.password,
      	 	// 	"source":"pay",
      	 	// }
      	 	// var that = this
      	 	// this.$http({
      	 	//   method:"get",
      	 	//   url:"/api/get?id=1",

      	 	// })
      	 	// .then(function(res) {
      	 	// 	console.log('接口调用失败')
      //	 		if (res.status == 200 && res.data.statusCode == 200){
      //	 			console.log(res.data)
      //	 			if (res.data.statusCode == 401){//没有权限
      //	 				 that.$alert(res.data.message, '提示', {
      //	 				  confirmButtonText: '确定',
      //	 				   center: true,
      //	 				});
      //	 				return;
      //	 			}
      //	 			var tokens = res.data.result.token
      //	 			localStorage.setItem("zydc_token",tokens)
      //	 			//that.$store.dispatch('set_zydc_token',tokens)
      //	 			that.sucessa()//获取用户信息
      //	 			that.getShopInfo()
      //	 		}else {
      //	 			 that.$alert(res.data.message, '提示', {
      //	 			  confirmButtonText: '确定',
      //	 			   center: true,
      //	 			});
      //	 		}
      	 	// })
      	 	// .catch(function(err) {
      	 	//   console.log('接口调用失败');
      	 	// });



      },
      upperCasePwd(){
          //判断字符串是否为数字和字母组合
        let reg = /^[0-9a-zA-Z]+$/
          if(!(reg.test(this.password))){ //服务单号
        this.$message({
          message: '输入有误，请重填!',
        });

              return false;
            } else {

            return true;
          }
      },
      //电话用户名
      upperCase(){
          if(!(/^1[34578]\d{9}$/.test(this.username))){
              this.$message({
                message: '手机号码有误，请重填!',
              });
              return false;
          } else {
            return true;
          }
      },
      init (){
       console.log(this.$route)
      },
      sucessa(){
      var that = this
      var data = {}
      this.$http({
          method: "post",
          url:"/api/login/loginSuccess",
          data:data,
      })
      .then(function(res) {
          if (res.status === 200 && res.data.statusCode == 200){
            console.log(res.data)
          var menu = res.data.result.menu	//菜单
          var userInfo = res.data.result.account_info	//用户信息
          localStorage.setItem("userInfo",JSON.stringify(userInfo))
          localStorage.setItem("menu",menu)
          console.log(that.macAddrss)
          that.shopCode = res.data.result.account_info.shopCode
          that.offlineShopCode = res.data.result.account_info.offlineShopCode
          if (that.shopCode != '' && that.shopCode != null && that.shopCode != undefined){
            var data = {
              "shopCode":that.shopCode,
              "deviceId":that.macAddrss
            }
          }else {
            alert("无法获取到shopcode")
          }

        //	that.getuserName()//获取门店名称
          //根据 mac地址和 店铺code查询设备记录信息
          that.getxinxi(data)
          }
      })
      .catch(function(err) {
          console.log(err);
      });
    },
    getShopInfo() {
      let _that = this;
      this.$http({
        url: "/api/login/getLoginUserShopInfo",
        method: "post",
        data: {}
      })
        .then(function(res) {
          // console.log(res)
          if (res.data.statusCode == "200") {
            let info = res.data.result;
        console.log(res.data)
            window.localStorage.setItem("shopInfo", JSON.stringify(info));
            // console.log(JSON.parse(window.localStorage.getItem('userInfo')))
          } else {
         that.$alert(res.data.message, '提示', {
           confirmButtonText: '确定',
            center: true,
         });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //获取门店名称
    getuserName(){
      console.log(this.shopCode)
      var data = {
        shopRetailCode:this.shopCode//门店code
      }
      var that = this
      this.$http({
        method:"post",
        url:"/api/shopRetail/info",
        data:data,
      })
      .then(function(res) {
        if (res.status == 200 && res.data.statusCode == 200){
          console.log(res.data)
          console.log(res.data.result)
          var nameList = res.data.result
          console.log(nameList.companyName)
          Cookies.set("userName",nameList.userName)
          //JSON.stringify(nameList.companyName)
          window.localStorage.setItem("companyName",nameList.companyName)
          window.localStorage.setItem("userName",nameList.userName)
        }else {
          alert(res.data.message)
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    //激活
    activation(data){
      var that = this
      this.$http({
        method:"post",
        url:"/api/login/login",
        data:data,
      })
      .then(function(res) {
        if (res.status == 200 && res.data.statusCode == 200){
          console.log(res.data)
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    //点击弹框确定时 获取到输入的设备名称
    inputVisibalPopup(){
      console.log(this.sbmc)
          if (this.sbmc != ''){
            if (this.shopCode != '' && this.shopCode != null && this.shopCode != undefined){
              var data = {
                "deviceName":this.sbmc,//手动的输入设备名称
                "shopCode":this.shopCode,//
                "deviceId":this.macAddrss,//:设备唯一身份ID:就是mac   dizhi
                "ext1":'1',
              }
            }else {
              alert("无法获取shopcode")
            }

            this.addxinxi(data)
          }else {
            this.$alert('请输入内容', '提示', {
              confirmButtonText: '确定',
               center: true,
            });
            //alert("请输入内容")
          }
    },
    //根据 mac地址和 店铺code查询设备记录信息
    getxinxi(data){
      var that = this
      this.$http({
        method:"post",
        url:"/api/shopShouqianbaConfig/listByMACAddress",
        data:data,
      })
      .then(function(res) {
        console.log(res)
        if (res.status == 200 && res.data.statusCode == "200"){
            console.log(res.data)
            //查寻信息后如果为空,弹框提示输入设备名称
          if (res.data.result == null){
            //弹框提示输入设备名称 添加设备
            that.inputVisibal = true
          }else {
            //有信息,判断终端号terminalSn是否为空//如果不为空,是激活状态,弹出提示
            var terminalSn = res.data.result.terminalSn
            console.log(terminalSn)

            that.extIs = res.data.result.ext1
            console.log(that.extIs)
            if (terminalSn != '' && terminalSn != undefined){
              //保存用户名和密码到,cookies过期时间30分钟
              var inFifteenMinutes = new Date(new Date().getTime() + 30 * 60 * 1000);
              Cookies.set('username', that.username, {
                expires: inFifteenMinutes
              });
              if (that.extIs == 0){//禁用
                that.$alert('此设备禁用', '提示', {
                  confirmButtonText: '确定',
                   center: true,
                });
                //alert("此设备禁用")
                return;
              }
              console.log("444444")
              localStorage.setItem('peizhiList',JSON.stringify(res.data.result))
              that.$router.push({path:'/Layout/Home'})
            }else {
              that.jihuo = true//弹出提示
              return;
            }
          }
        }else {
          that.$alert(res.data.message, '提示', {
            confirmButtonText: '确定',
             center: true,
          });
        }
      })
      .catch(function(err) {
        console.log(err);
      });
    },
    //添加信息接口
    addxinxi(data){
      var that = this
      this.$http({
        method:"post",
        url:"/api/shopShouqianbaConfig/save",
        data:data,
      })
      .then(function(res) {
        if (res.status == 200 && res.data.statusCode == 200){
          console.log(res.data)
           that.$message({
            dangerouslyUseHTMLString: true,
            message: '<div class="sucessTitle">设备添加成功,可以去后台激活了!</div>'
          });
          that.inputVisibal = false
          return ;
        }
      })
      .catch(function(err) {
        console.log(err);
      });

    },

  }
};
</script>

<style scoped>
  .lableName{
    width: 100px;
    display: inline-block;
    text-align: right;
    background: #fff;
    height: 40px;
    line-height: 40px;
    float: left;

  }
	.sucessTitle{
		width:300px;
		height:150px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.zdhBox{
		display: flex;
		justify-content: center;
		flex-direction: column;

	}
	.titBox{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.zdhBox button{
		margin-bottom: 40px;
	}
	.zdhBox span{
		display: inline-block;
		height:50px;
		line-height: 50px;
		margin: 30px 0;
		font-size: 20px;

	}
	.jihuoBox{
		width:100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.tit{
		width:100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: bold;
		font-size: 25px;

	}
	.forgetPwd{
		text-align: right;
		color:#999;
		font-size: 16px;
	}
	.loginBox{
		width:100%;
		height:100%;
		position: relative;
		background: url(../../assets/home.png) no-repeat 0 0;
    background-size: cover;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;

	}
	.box img{
		width:100px;
		height:120px;
		margin-right:50px;
		padding-bottom:55px;
	}
	.box{
		/* position: absolute;
		right:200px;
		top:30%; */
		width:600px;
		height:300px;
		display: flex;
		justify-content: center;
		align-items: center;
		background:rgba(255,255,255,.2);
	}
	.btn{
		width:100px;
		height:40px;
		background: #fff;
		border:1px solid #ccc;
		outline: none;
		margin-left:20px;
	}
	.el-dialog__body{
		/* display: flex;
		justify-content: center; */
	}
	.okBox button{
		margin: 20px 0;
	}
	.okBox{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.inpsBox{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.inps{
		width:400px;
		padding-left: 20px;
		height:40px;
		line-height: 40px;
		display: inline-block;
		box-sizing: border-box;
		margin: 20px 0;
		margin-left: 0px;
	}
	.inp{
		width:200px;
		height:40px;
		padding-left: 20px;
		display: inline-block;
		margin: 10px 0;
	}
</style>
