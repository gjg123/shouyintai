<template>
	<div class="home">
		<div class="content">
			<el-table
				  :data="tableData3"
				  :height="tableHeight"
				  border
				  ref="listPowerSupplyTab"
				  :row-style="tableRowStyle"
				  class="taball"
			      :header-cell-style="headStyle"
				  tooltip-effect="dark"
				  style="width: 100%"
				  highlight-current-row
				  @selection-change="handleSelectionChange">
				  <el-table-column
					type="selection"
					align="center"
					width="55">
				  </el-table-column>
				  <el-table-column
					label="商品条码"
					align="left">
					<template slot-scope="scope">{{ scope.row.barCode  }}</template>
				  </el-table-column>


				  <el-table-column
					prop="productName"
					label="商品名称"
					align="center">

				  </el-table-column>

				  <el-table-column
					prop="costPrice"
					label="原价"
					align="center"
					show-overflow-tooltip>
					<template slot-scope="scope">{{ Number(scope.row.costPrice).toFixed(2)}}</template>
				  </el-table-column>

				<el-table-column
					prop="-"
					label="折扣"
					align="center"
					show-overflow-tooltip>
          <template slot-scope="scope">-</template>
				  </el-table-column>


				<el-table-column
					prop="num"
					label="数量"
					align="center"
					show-overflow-tooltip>
				  </el-table-column>

				<el-table-column
					prop="price"
					label="现价"
					align="center"
					show-overflow-tooltip>
					<template slot-scope="scope">{{ Number(scope.row.price).toFixed(2)}}</template>
				  </el-table-column>

				  <el-table-column
					prop="total"
					label="小计"
					align="center"
					show-overflow-tooltip>
					<template slot-scope="scope">{{ Number(scope.row.total).toFixed(2)}}</template>
				  </el-table-column>
			</el-table>
		</div>

		<div class="footer">
			<div class="weibu">
				<div class="deletBox">
					<!-- <el-button :disabled="isxuanze" @click="deletGoods" type="danger"  >删除商品</el-button> -->
          <el-button  @click="deletGoods" type="danger"  >删除商品</el-button>
				</div>
			</div>
			<div class="bottomCenter">
				<div class="bot">
					  <div class="inpWrapper">
						<div class="searchBox">
							<!-- <input  @focus="goodsList"  v-model="searchValue" type="text" placeholder="请输入关键字搜索产品" name="a" id="" value="" class="search"/> -->
							<input v-model="searchValue" type="text" placeholder="请输入关键字搜索产品" name="a" id="" value="" class="search"/>
							<img src="../../assets/jp_03.png" class="imgjp" @click="goodsList"/>
						</div>
					<!-- 	@keyup.enter.native="currentPage()" -->
						<div class="syBox">
							<input   type="text" placeholder="输入价格无码收银" name="" id="" value="" class="sy"/>
							<img src="../../assets/jp_03.png" class="syjp" @click="noCodeVisible.show = true"/>
						</div>
					  </div>
					  <div class=" phoneBox">
						<div class="phoneWrapper">
							<input type="text" placeholder="请输入手机号" name="" id="" value="" class="phone"/>
							<img src="../../assets/jp_03.png" class="phoneImg" @click="phoneVisible.show = true"/>
						</div>
						<div class="user">
							<div class="username">
								<ul>
									<li ref="yhm">用户名</li>
									<li>1866666</li>
								</ul>
							</div>
							<div class="yue">
								<ul>
									<li >余额</li>
									<li>100</li>
								</ul>
							</div>
							<div class="jifen">
								<ul>
									<li>积分</li>
									<li>20</li>
								</ul>
							</div>
						</div>
					  </div>
					  <div  class="inpWrapper" @click="moneyVisibleBtn" >
						<div class="yinzi">
							收款{{Number(moneyTota).toFixed(2)}}元
						</div>
					  </div>
				</div>
			</div>
		</div>

		<!-- 选择商品 -->
		<el-dialog
		  title="选择商品"
		  :visible.sync="multipleGoodsVisible.show"
		  width="50%"
		  center>
		    <div class="searchFormBox">
				 <el-table
				 	  :data="tableData4"
				 	  border
				 	  ref="Table"
				 	  :row-style="tableRowStyle"
				 	  class="taball"
				       :header-cell-style="headStyle"
				 	  tooltip-effect="dark"
				 	  style="width: 100%"
				 	  highlight-current-row
					  @current-change="handleCurrentChange"
				 	  @selection-change="handleSelectionChange">
				 	  <el-table-column
				 		type="selection"
				 		align="center"
				 		width="55">
				 	  </el-table-column>
				 	  <el-table-column
				 		label="商品条码"
				 		align="left">
				 		<template slot-scope="scope">{{ scope.row.barCode  }}</template>
				 	  </el-table-column>


				 	  <el-table-column
				 		prop="productName"
				 		label="商品名称"
				 		align="center">

				 	  </el-table-column>

				 	  <el-table-column
				 		prop="costPrice"
				 		label="原价"
				 		align="center"
				 		show-overflow-tooltip>
				 		<template slot-scope="scope">{{ Number(scope.row.costPrice).toFixed(2)}}</template>
				 	  </el-table-column>

				 	<el-table-column
				 		prop="-"
				 		label="折扣"
				 		align="center"
				 		show-overflow-tooltip>
				 	  </el-table-column>


				 	<el-table-column
				 		prop="num"
				 		label="数量"
				 		align="center"
				 		show-overflow-tooltip>
				 	  </el-table-column>

				 	<el-table-column
				 		prop="price"
				 		label="现价"
				 		align="center"
				 		show-overflow-tooltip>
				 		<template slot-scope="scope">{{ Number(scope.row.price).toFixed(2)}}</template>
				 	  </el-table-column>

				 	  <el-table-column
				 		prop="total"
				 		label="小计"
				 		align="center"
				 		show-overflow-tooltip>
				 		<template slot-scope="scope">{{ Number(scope.row.total).toFixed(2)}}</template>
				 	  </el-table-column>
				 </el-table>
			    <span slot="footer" class="dialog-footer">
					<el-button @click="multipleGoodsVisible.show = false">取 消</el-button>
					<el-button type="primary" @click="multipleOk">确 定</el-button>
			    </span>

			</div>
		</el-dialog>

		<!--商品搜索弹框-->
		<!-- <search-Popup :searchVisible="searchVisible" :searchForm="searchForm"></search-Popup>	 -->
		 <el-dialog
		   title="商品搜索"
		   :visible.sync="searchVisible.show"
		   width="50%"
		   center>
		     <div class="searchFormBox">
		 		<el-form :model="searchForm">
		 			<div class="selectBox">
		 				<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						</el-select>
						<div id="inpSearch"></div>
						<el-input @blur="upperCase()" v-model="barCodesearch" autocomplete="off"></el-input>

		 			</div>
		 		  </el-form>
		 		  <span slot="footer" class="dialog-footer">
		 			<el-button @click="searchVisible.show = false">取 消</el-button>
		 			<el-button type="primary" @click="searchVisibleTrue(1)">确 定</el-button>
		 		  </span>

		 	</div>
		 </el-dialog>
		 <!--无码收银弹框-->
		<nocode-popup :noCodeVisible="noCodeVisible" :noCodeForm="noCodeForm"></nocode-popup>
		<!--手机号弹框-->
		<phone-popup :phoneVisible="phoneVisible" :phoneForm="phoneForm"  ></phone-popup>
		<!-- 收款弹框 -->
		<money-poupu :foo.sync="tableData3"   ref="changeLkl"  :searchValue="searchValue" :saveMoneyList="saveMoneyList" :moneyTota="moneyTota" :input="input" :moneyVisible="moneyVisible" :moneyForm="moneyForm" :tableData5="tableData5" :tableData2="tableData2"></money-poupu>
		<el-dialog
		  title="提示"
		  :visible.sync="centerDialogVisible"
		  width="30%"
		  center>
		  <span class="cen">请您选择商品?</span>
		  <span slot="footer" class="dialog-footer">
			<el-button  type="primary" @click="centerDialogVisible = false">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	//搜索商品
	import SearchPopup from '@/components/SearchPopup/SearchPopup.vue'
	//无码收银
	import NocodePopup from '@/components/NoCodePopup/NoCodePopup.vue'
	//弹框手机号
	import PhonePopup from '@/components/PhonePopup/PhonePopup.vue'
	//收款
	import MoneyPoupu from '@/components/MoneyPoupu/MoneyPoupu.vue'


	export default {
		components:{
			SearchPopup,
			NocodePopup,
			PhonePopup,
			MoneyPoupu
		},
		data(){
			return {
				tableHeight: 50,

				currentRow: {},//对话框里的单选的行
				serialCode:"",//串码
				serialCodes:"",//扫码枪的串码
				 options: [{
			          value: '条形码',
			          label: '条形码'
			        }, {
			          value: '串码',
			          label: '串码'
			        }, {
			          value: '商品名称',
			          label: '商品名称'
			        },],
			    value:'条形码',
				serialCodesC2:"",//保存的串码,有搜索结果的
				centerDialogVisible:false,
				getType:"",
				saomaCode:'',
				barCodesearch:'',
				cuanCode:'',//
				loading2:false,
				moneyAll:0,
				barCode:'',
				searchValue:'',
				productName:'',
				userList:{},
				checkArr:[],//勾选的所有行
				isChecked:true,//商品个数是否勾选
				checkNum:0,//勾选的数量
				isshibai:false,
				checked:'',
				userInfo:[],
				input:'输入内容',
				getMoneyErroe:false,
				saveMoneyList:{},

				searechData : {//创建订单数据
					"userCode":'',
					'userAccount':'',//'13533334444',
					'salesmanCode':'USER0000000000000000',
					'salesman':'13533334444',
					"receiveCode": "",
					'discount':'0',
					'isOnline':0,
					'slist':''
				},
				slistObj:{//店铺数据
					"shopCode":'', //"S00000000000000000001",
					'orderType':2,
					'orderResource':3,
					'shipMode':2,
					'remarks':"haha",
					'paymentMode':10,
					'expressPrice':'',
					'orderState':0,
				},
				plist:[],
				slist:[],
				multipleGoodsVisible:{
					show:false,
				},
				noCodeVisible:{//无码收银
					show:false,

				},
				noCodeForm:{
					price:'0',
					formLabelWidth: '120px',
				},

				phoneVisible:{
					show:false,
				},
				searchVisible: {//搜索
					show:false,
				},
				userinfo:{},
				searchForm: {//搜索
					name: '商品名称',
					tiaoma:'商品条码',
					formLabelWidth: '120px',
				},
				getMoneyData:{
					price:'0',
				},

				phoneForm:{
					price:'0',
					formLabelWidth:'120px'
				},

				moneyVisible:{
					show:false,
				},
				moneyForm: {
				    show: false,
				    title: "",
				    sss: "8000"
				},
				formLabelWidth: '120px',
				tableData5: [
					{
					  goodsBarCode: '',
					  goodsName: '',
					  goodsPrice:"0",
					  goodsDiscount: '0',
					  goodsNum:0,
					  newPrice:0,
					  total:0
					}

				],
				tableData2:[
					{
						xianjin:'现金',
						bu:'111'
					},
					{
						xianjin:'拉卡拉',
						bu:'111'
					},
					{
						xianjin:'pos',
						bu:'222'
					}
				],
				tableData4:[],
				tableData3: [
          {
            'barCode':'11236',
            'costPrice'  :'10',
            'num'  :2,
            'id':1,
            'productName':'苹果',
            'price'  :20,
            'total':20,
          },
          {
            'barCode':'11237',
            'costPrice'  :'15',
            'num'  :2,
            'id':2,
            'productName':'牛奶',
            'price'  :15,
            'total':30,
          },
          {
            'barCode':'11238',
            'costPrice'  :'9',
            'productName':'饼干',
            'num'  :3,
            'id':3,
            'price'  :9,
            'total':27,
          },
				],


			}
		},
		watch:{

		},
		mounted() {
			//固定表头
  			setTimeout(() => {
				this.tableHeight = window.innerHeight - this.$refs.listPowerSupplyTab.$el.offsetTop;
			},100)
		},
		created(){
			//this.getUserInfo()
		},
		computed: {
	        moneyTota: function () {
	        	var _sum = 0;
                this.tableData3.forEach(function(item,index){
                    _sum += Number(item.total);
                    return true;//every每个值都运行
                })
	            this.moneyAll = _sum
	            return _sum;
	        },
			isxuanze: function () {
				if (this.checkNum === 0 ){
					return true
				}else if (this.checkNum >= 1){
					return false
				}
			},
	    },
		methods:{
			//单选表格
			handleCurrentChange(val) {
				if (this.multipleGoodsVisible.show){
					this.currentRow = val;
					this.$refs.Table.toggleRowSelection(val);
				}
			},
			//单选表格的确定按钮
			multipleOk(){
				if (this.currentRow.fictitiousStock > 0){
					this.multipleGoodsVisible.show = false
					console.log(this.currentRow)
					console.log(this.tableData3)
					this.tableData3.push(this.currentRow)
					console.log(this.tableData3)
					this.tableData3 = this.computedSave(this.tableData3)
					console.log(this.tableData3)
					this.$nextTick( ()=> {
						 this.checkedM();//每次更新了数据，触发这个函数即可。
					})
				}else {
					this.$alert('商品库存为0', '提示', {
					  confirmButtonText: '确定',
					   center: true,
					});
				}
			},
			clearData(){
				this.tableData3 = []
			},
			checkedM(){//设置表格复选框默认为选中状态
              //首先el-table添加ref="table"引用标识
			  if (!this.multipleGoodsVisible.show){
				  for (let i=0;i<this.tableData3.length;i++){
					 // this.$refs.multipleTable.toggleRowSelection(this.tableData3[2],true);
					  this.$refs.listPowerSupplyTab.toggleRowSelection(	this.tableData3[i],
						true
					  );
				  }
			  }
			},
			changeCurse(){//收银台首页,关键字搜索框,清空
				this.searchValue = ''
			},
			getUserInfo(){	//获取用户信息
				var user = localStorage.getItem('userInfo')
				this.userList = JSON.parse(user)
			},
			//创建订单 获取并保存订单编码orderCode 并传给子弹框组件在创建流水时需要传参
			moneyVisibleBtn(){
        this.moneyVisible.show = true
        return
				// if (this.moneyTota > 0){
				// 	const loading = this.$loading({
				// 	  lock: true,
				// 	  text: '正在努力加载中.....',
				// 	  spinner: 'el-icon-loading',
				// 	  background: 'rgba(0, 0, 0, 0.7)'
				// 	});
				// 	MoneyPoupu.methods.clearData();	//父组件调用

				// 	this.$refs.changeLkl.lakala =  this.moneyTota
				// 	var searechData = {}//总数据
				// 	var slistObj = {}//店铺列表

				// 	var slist = []
				// 	var plist = []

				// 	//用户信息
				// 	//userCode和salesmanCode一样
				// 	searechData.userCode=this.userList.code//用户编号动态
				// 	searechData.userAccount=this.userList.phone//用户名动态
				// 	searechData.salesmanCode=this.userList.code//用户编号动态
				// 	searechData.salesman=this.userList.phone
				// 	searechData.paymentMode=10//支付方式
				// 	searechData.receiveCode=''
				// 	searechData.isOnline=0
				// 	searechData.discount=0
				// 	//店铺信息
				// 	slistObj.shopCode = this.userList.shopCode//线下店铺code
				// 	slistObj.orderType=2
				// 	slistObj.orderResource=3
				// 	slistObj.shipMode=2
				// 	slistObj.remarks=''
				// //	slistObj.paymentMode=10
				// 	slistObj.expressPrice=10
				// 	slistObj.orderState=0
				// 	slist.push(slistObj)//店铺列表
				// 	var gList
				// 	gList = this.computedSave(this.tableData3)

				// 	console.log(gList)//商品列表
				// 	console.log(this.tableData3)
				// 	console.log(this.value)
				// 	for (var i=0;i<gList.length;i++){
				// 			if (gList[i].productSerialCode == undefined){
				// 				gList[i].productSerialCode = ''
				// 			}
				// 			var plistObj = {
				// 				'fictitiousProductCode':'',
				// 				'productBarcode':gList[i].barCode,
				// 				//如果有串码就把串码传过去,如果没有就传空字符串productSerialCode
				// 				'productSerialCode':gList[i].productSerialCode,//串码
				// 				'productNum':gList[i].num,
				// 				'productPrice':gList[i].price,
				// 			//	'productPrice':gList[i].total,
				// 				'productCode':gList[i].productCode
				// 			}
				// 			plist.push(plistObj)
				// 	}
				// 	slistObj.plist = plist
				// 	console.log(plist)
				// 	searechData.slist = slist
				// 	console.log(searechData)//总列表
				// 	localStorage.setItem("cj",JSON.stringify(searechData))
				// 	var that = this
				// 	this.$http({
				// 	  method:"post",
				// 	  url:"/api/ordinaryOrder/createOrdinaryOrder",
				// 	  data:searechData,
				// 	})
				// 	.then(function(res) {
				// 		setTimeout(() => {
				// 		  loading.close();
				// 		}, 100);
				// 		if (res.status == 200 && res.data.statusCode == 200){
				// 			that.moneyVisible.show = true
				// 			console.log(res.data)
				// 			console.log(res.data.result)
				// 			console.log("创建订单")
				// 			that.serialCodesC2 = ''//串码
				// 			that.serialCode = ''//串码
				// 			that.serialCodes = ''//串码
				// 			that.saveMoneyList = ''
				// 			plist = ''
				// 			slist = ''
				// 			searechData = ''
				// 			plistObj = ''
				// 			slistObj = ''
				// 			slist = ''
				// 			that.saveMoneyList = res.data.result[0]
				// 		}else{
				// 			that.$alert("创建订单失败!", '提示', {
				// 			  confirmButtonText: '确定',
				// 			   center: true,
				// 			});
				// 		}
				// 	})
				// 	.catch(function(err) {
				// 		setTimeout(() => {
				// 		  loading.close();
				// 		}, 100);
				// 		that.$alert("创建订单失败!", '提示', {
				// 		  confirmButtonText: '确定',
				// 		   center: true,
				// 		});
				// 	  console.log(err);
				// 	});

				// }else {
				// 	this.centerDialogVisible = true
				// }

			},
			//
			upperCase(){
				if (this.value === '条形码'){
					//纯数字
					let reg = /^\d+$/
					if(!(reg.test(this.barCodesearch))){
						this.$message({
							message: '输入有误，请重填!',
						});
					    return false;
					  } else {
						return true;
					  }
				}
				//数字或数字和-
				if(this.value === '串码'){
					if(!/^[\d\-]+$/g.test(this.barCodesearch)) {
						this.$message({
							message: '输入有误，请重填!',
						});
						return ;
					}
				}
			},
			currentPage(){

			},
			//输入框搜索商品
			searchVisibleTrue(x,y){
				var that = this
				var data = {};
        	if (this.value == '商品名称'){
            console.log('商品名称搜索')
        		data = {
        			//'barCode':that.barCodesearch,
        			'shopCode':this.userList.shopCode,//"S00000000000000000001",
        		//	'cuanCode':that.cuanCode,//串码
        			'productName':this.barCodesearch.replace(/(^\s*)|(\s*$)/g, ""),
        			'isBinding':1,
        		}
        		//this.searchGoodsName(data)
        	}
          if (this.value == '条形码'){
              console.log('条形码搜索')

          		let reg = /^\d+$/
          		if(!(reg.test(this.barCodesearch))){
          			this.$message({
          				message: '输入有误，请重填!',
          			});
          			return ;
          		}

          		data = {
          			'barCode':this.barCodesearch.replace(/(^\s*)|(\s*$)/g, ""),
          			'shopCode':this.userList.shopCode,//"S00000000000000000001",
          			'isBinding':1,
          		}
          		//this.barCodeSearchFun(this.barCodesearch)//搜索框条码搜索
          }
				// if (x == 1){//搜索框
				// 	if (this.barCodesearch == '' || this.value == ''){
				// 		let reg = /^\d+$/
				// 		if(!(reg.test(this.barCodesearch))){
				// 			this.$message({
				// 				message: '输入有误，请重填!',
				// 			});
				// 			return ;
				// 		}

				// 	}
				// 	if (this.value == '条形码'){


				// 		let reg = /^\d+$/
				// 		if(!(reg.test(this.barCodesearch))){
				// 			this.$message({
				// 				message: '输入有误，请重填!',
				// 			});
				// 			return ;
				// 		}

				// 		data = {
				// 			'barCode':this.barCodesearch.replace(/(^\s*)|(\s*$)/g, ""),
				// 			'shopCode':this.userList.shopCode,//"S00000000000000000001",
				// 			'isBinding':1,
				// 		}
				// 		this.barCodeSearchFun(this.barCodesearch)//搜索框条码搜索
				// 	}
				// 	if (this.value == '串码'){
				// 			if(!/^[\d\-]+$/g.test(this.barCodesearch)) {
				// 				this.$message({
				// 					message: '输入有误，请重填!',
				// 				});
				// 				return ;
				// 			}
				// 		data = {
				// 			'productBarCode':this.barCodesearch.replace(/(^\s*)|(\s*$)/g, ""),//	String(36)	必填	商品条形码
		 	// 				'shopId':this.userList.shopCode,//'S00000000000000000001',//	String(36)	必填	商店ID
		 	// 				'productScanType':0,//	Integer	必填	商品扫码类型(1:条形码、0:串码)
				// 		}
				// 		this.serialCodeSearch(data)
				// 	}
				// 	if (this.value == '商品名称'){
				// 		data = {
				// 			//'barCode':that.barCodesearch,
				// 			'shopCode':this.userList.shopCode,//"S00000000000000000001",
				// 		//	'cuanCode':that.cuanCode,//串码
				// 			'productName':this.barCodesearch.replace(/(^\s*)|(\s*$)/g, ""),
				// 			'isBinding':1,
				// 		}
				// 		this.searchGoodsName(data)
				// 	}

				// }
				// if (x == 2 ){//回车键

				// }
				// if (x == 3){
				// 	 data = {
				// 		'barCode':c.replace(/(^\s*)|(\s*$)/g, ""),
				// 		'shopCode':this.userList.shopCode,//"S00000000000000000001",
				// 	//	'cuanCode':that.cuanCode,//串码
				// 	//	'productName':that.productName,
				// 		'isBinding':1,
				// 	}
				// }
			},

			//搜索框条形码搜索
			barCodeSearchFun(d){
				const loading = this.$loading({
				  lock: true,
				  text: '正在努力搜索中.....',
				  spinner: 'el-icon-loading',
				  background: 'rgba(0, 0, 0, 0.7)'
				});
				console.log(d)
					let data = {
						'barCode':d.replace(/(^\s*)|(\s*$)/g, ""),
						'shopCode':this.userList.shopCode,//"S00000000000000000001",
						'isBinding':1,
					}
					let that = this
					this.$http({
					  method: "post",
					  url:"/api/product/selectProductForCash",   
					  data:data,
					})
					.then(function(res) {
//  						res.status = 200;
// 						res.data.statusCode = 200;
// 						res.data.result.list = [
// 							{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"442","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
//
// 							{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"443","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
//  							{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"444","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
//
//
// 							{"productScanType":0, "productSerialCode":"4","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":333,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"445","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":155,"isDel":0},
//  							{"productScanType":0, "productSerialCode":"5","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":333,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"446","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":155,"isDel":0},
//
// 							{"productScanType":0, "productSerialCode":"6","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":222,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"447","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":156,"isDel":0}
// 						];
						setTimeout(() => {
						  loading.close();
						}, 100);
						if (res.status == 200 && res.data.statusCode == 200){
							console.log(res.data)
							if (res.data.result == null){
								that.searchVisible.show = false
								that.$alert(res.data.message, '提示', {
								  confirmButtonText: '确定',
								   center: true,
								});
								return;
							}
 							let list = res.data.result.list
							console.log(list)
							if (list.length == 0){
								that.searchVisible.show = false
								 that.$alert('~~您查找的商品没有库存了!', '提示', {
								  confirmButtonText: '确定',
								   center: true,
								});
								return
							}

							if (list.length <= 1){

								if (that.value == '条形码' && list[0].productScanType == 0){
									that.$alert('此商品为串码付款,请选择串码搜索', '提示', {
									  confirmButtonText: '确定',
									   center: true,
									});
									return
								}
								console.log(list)
								for (let i=0;i<list.length;i++){
									list[i].num = 1
									list[i].total = list[i].num * list[i].price
									if (list[i].fictitiousStock > 0){
										that.tableData3.push(list[i])
										if (that.value == '串码'){
											list[i].productSerialCode = that.serialCode
										}else if (that.value == '条形码' || that.value == '商品名称'){
											list[i].productSerialCode = ''
										}
									}else {
										that.$alert('此商品库存为0', '提示', {
										  confirmButtonText: '确定',
										   center: true,
										});
									}
								}
								that.tableData3 = that.computedSave(that.tableData3)
								that.searchVisible.show = false
								that.multipleGoodsVisible.show = false
								that.$nextTick( ()=> {
									 that.checkedM();//每次更新了数据，触发这个函数即可。
								})

							}
							if (list.length > 1){	//多个商品


								that.searchVisible.show = false
								let arrCM = []
								for (let i=0;i<list.length;i++){
									list[i].num = 1

									list[i].total = list[i].num * list[i].price
									if (that.value == '条形码' && list[i].productScanType == 1){
										list[i].productSerialCode = ''
										arrCM.push(list[i])
									}
									if (that.value == '串码' && list[i].productScanType == 0){
										list[i].productSerialCode = that.serialCode
										arrCM.push(list[i])

									}
								}

								setTimeout(() => {
								  loading.close();
								}, 10);
								setTimeout(() => {
								  that.tableData4 = arrCM
								  that.multipleGoodsVisible.show = true
								}, 10);

							}
						}else {

 							setTimeout(() => {
								  loading.close();
							}, 10);
							that.searchVisible.show = false
							that.$alert(res.data.message, '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
						}
					})
					.catch(function(err) {
						that.searchVisible.show = false
						setTimeout(() => {
						  loading.close();
						}, 10);
						that.$alert(err, '提示', {
						  confirmButtonText: '确定',
						   center: true,
						});
					  console.log(err);
					});
			},
			// 扫码枪的 条形码搜索
			barCodeSearchFun2(d){
					const loading = this.$loading({
					  lock: true,
					  text: '正在努力搜索中.....',
					  spinner: 'el-icon-loading',
					  background: 'rgba(0, 0, 0, 0.7)'
					});
					 let data = {
						'barCode':d.replace(/(^\s*)|(\s*$)/g, ""),
						'shopCode':this.userList.shopCode,//"S00000000000000000001",
					//	'cuanCode':that.cuanCode,//串码
					//	'productName':that.productName,
						'isBinding':1,
					}
					let that = this
					this.$http({
					  method: "post",
					  url:"/api/product/selectProductForCash",
					  data:data,
					})
					.then(function(res) {
// 						res.status = 200;
// 						res.data.statusCode = 200;
// 						res.data.result.list = []
// 						res.data.result.list = [
// 							{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"442","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
//
// 							{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"443","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
// 							{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"444","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
//
//
// 							{"productScanType":0, "productSerialCode":"4","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":333,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"445","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":155,"isDel":0},
// 							{"productScanType":0, "productSerialCode":"5","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":333,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"446","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":155,"isDel":0},
//
// 							{"productScanType":0, "productSerialCode":"6","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":222,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"447","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":156,"isDel":0}
// 						];
						if (res.status == 200 && res.data.statusCode == 200){
							//that.searchVisible.show = false
							console.log(res.data)
							if (res.data.result == null ){
								that.$alert(res.data.message, '提示', {
								  confirmButtonText: '确定',
								   center: true,
								});
								return;
							}
							var list = res.data.result.list
							console.log(list)
							if (list.length == 0 ){
								let  data = {
									'productBarCode':d.replace(/(^\s*)|(\s*$)/g, ""),//	String(36)	必填	商品条形码
									'shopId':that.userList.shopCode,//'S00000000000000000001',//	String(36)	必填	商店ID
									'productScanType':0,//	Integer	必填	商品扫码类型(1:条形码、0:串码)
								}
								that.serialCodeSearchS(data)	//若没有返回数据,则再走扫码枪上的串码
							}
//
							if (list.length <= 1){

								if (list[0].productScanType == 0){
									setTimeout(() => {
									  loading.close();
									}, 10);
									that.$alert('此商品为串码付款,请选择串码搜索', '提示', {
									  confirmButtonText: '确定',
									   center: true,
									});
									return
								}
								console.log(list)
								for (let i=0;i<list.length;i++){
									list[i].num = 1
									list[i].total = list[i].num * list[i].price
									if (list[i].fictitiousStock > 0){
										that.tableData3.push(list[i])
										list[i].productSerialCode = ''
									}else {
										that.$alert('此商品库存为0', '提示', {
										  confirmButtonText: '确定',
										   center: true,
										});
									}
								}
								that.tableData3 = that.computedSave(that.tableData3)
								setTimeout(() => {
								  loading.close();
								}, 300);
								that.$nextTick( ()=> {
									 that.checkedM();//每次更新了数据，触发这个函数即可。
								})
								that.searchVisible.show = false
							}
							if (list.length > 1){	//多个商品

								that.searchVisible.show = false
								let arrT = []

								for (let i=0;i<list.length;i++){
									list[i].num = 1
									list[i].total = list[i].num * list[i].price
									list[i].productSerialCode = ''
									if (list[i].productScanType == 1){
										arrT.push(list[i])
									}

								}
								setTimeout(() => {
								  loading.close();
								}, 300);
								setTimeout(() => {
								  that.multipleGoodsVisible.show = true
								  that.tableData4 = arrT
								}, 300);
							}
						}else {
							setTimeout(() => {
							  loading.close();
							}, 300);
// 							that.$alert(res.data.message, '提示', {
// 							  confirmButtonText: '确定',
// 							   center: true,
// 							});
						}
					})
					.catch(function(err) {
						setTimeout(() => {
						  loading.close();
						}, 300);
// 						that.$alert(err, '提示', {
// 							confirmButtonText: '确定',
// 							center: true,
// 						});
					});
			},
			//扫码枪的串码搜索
			serialCodeSearchS(d){
				console.log(d)
				var that = this
				this.$http({
				  method: "post",
				  url:"/api/inventoryBarCodeDB/findBarCodeByShopId",
				  data:d,
				})
				.then(function(res) {
					if (res.status == 200 && res.data.statusCode == 200){
						console.log(res.data)
						if (res.data.result == null){
							//alert(res.data.message)
							that.$alert(res.data.message, '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
							return;
						}
						if (res.data.result.length == 0){
							 that.$alert('~您查找的串码无对应条码!', '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
							return;
						}else{
							let barCodeArr = res.data.result
							console.log(barCodeArr[0].productBarCode)
							let code = barCodeArr[0].productBarCode
							console.log("扫码枪串码搜索成功")
							console.log(d.productBarCode)
							that.serialCodesC2 = d.productBarCode
							let data = {
								'barCode':that.barCodesearch,
								'shopCode':that.userList.shopCode,//"S00000000000000000001",
								'isBinding':1,
							}
							that.barCodeSearchFunS(code)//扫码枪的有串码搜索jiegu9o的条形码搜索
						}
					}else {
						that.$alert(res.data.message, '提示', {
						  confirmButtonText: '确定',
						   center: true,
						});
						//alert(res.data.message)
					}
				})
				.catch(function(err) {
				  console.log(err);
				});
			},

			//扫码枪的串码搜索有结果的条码搜索
			barCodeSearchFunS(d){
				console.log(d)
				let data = {
					'barCode':d.replace(/(^\s*)|(\s*$)/g, ""),
					'shopCode':this.userList.shopCode,//"S00000000000000000001",
					'isBinding':1,
				}
				let that = this
				this.$http({
				  method: "post",
				  url:"/api/product/selectProductForCash",
				  data:data,
				})
				.then(function(res) {
// 					res.status = 200;
// 					res.data.statusCode = 200;
// 					res.data.result.list = []
// 					res.data.result.list = [
// 						{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"442","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
//
// 						{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"443","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
// 						{"productScanType":1, "productSerialCode":"","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":444,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"444","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":154,"isDel":0},
//
//
// 						{"productScanType":0, "productSerialCode":"4","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":333,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"445","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":155,"isDel":0},
// 						{"productScanType":0, "productSerialCode":"5","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":333,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"446","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":155,"isDel":0},
//
// 						{"productScanType":0, "productSerialCode":"6","shopCode":"S00000000000000000001","isReturn":1,"fictitiousStock":"2","isBinding":1,"costPrice":222,"updateUser":"USER0000000000000000","updateTime":1556172573000,"categoryCode":"FL201812191706510000000008/FL201812211708320000000020/FL201812211708200000000019","productName":"454","barCode":"447","attributeCode":"ZHSX201904250939125196","attributeNames":"黑色-16G","productCode":"SJSP2019042509391211181","presentPrice":0,"createTime":1556156354000,"price":200,"isSale":0,"masterGraph":"group1/M00/00/35/Ch4xJFzBTwiAK5JvAADeJCbscaM063.jpg","createUser":"USER0000000000000000","id":156,"isDel":0}
// 					];
// 					res.status == 200
// 					res.data.statusCode == 200
					if (res.status == 200 && res.data.statusCode == 200){
						that.searchVisible.show = false
						console.log(res.data)
						if (res.data.result == null ){
							//alert(res.data.message)
							that.$alert(res.data.message, '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
							return;
						}
						var list = res.data.result.list
						console.log(list)
						if (list.length <= 1){

							for (let i=0;i<list.length;i++){
								list[i].num= 1
								list[i].price = 10
								list[i].total = list[i].num*list[i].price
								if (list[i].fictitiousStock > 0 && list[i].productScanType == 0){
									that.tableData3.push(list[i])
									list[i].productSerialCode = that.serialCodesC2

								}else {
									that.$alert('您查找的商品库存为0!', '提示', {
									  confirmButtonText: '确定',
									   center: true,
									});
								}
							}
							that.tableData3 = that.computedSave(that.tableData3)
								that.$nextTick( ()=> {
									 that.checkedM();//每次更新了数据，触发这个函数即可。
								})
							that.searchVisible.show = false
						}
						if (list.length > 1){	//多个商品

							that.searchVisible.show = false
							let arrC = []
							for (let i=0;i<list.length;i++){
								list[i].num = 1
								list[i].productSerialCode = that.serialCodesC2
								list[i].total = list[i].num * list[i].price
								if (list[i].fictitiousStock > 0 && list[i].productScanType == 0){
									arrC.push(list[i])
								}
							}
// 							setTimeout(() => {
// 							  loading.close();
// 							}, 300);
							setTimeout(() => {
							  that.multipleGoodsVisible.show = true
							  that.tableData4 = arrC
							}, 300);
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
			//搜索框的串码搜索
			serialCodeSearch(d){
				console.log(d)
				var that = this
				this.$http({
				  method: "post",
				  url:"/api/inventoryBarCodeDB/findBarCodeByShopId",
				  data:d,
				})
				.then(function(res) {
					if (res.status == 200 && res.data.statusCode == 200){
						console.log(res.data)
						if (res.data.result == null){
							//alert(res.data.message)
							that.$alert(res.data.message, '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
							return;
						}
						if (res.data.result.length == 0){
							 that.$alert('~您查找的串码无对应条码!', '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
							return;
						}else{
							that.serialCode = that.barCodesearch//全局保存串码
							console.log(that.serialCode)
							let barCodeArr = res.data.result
							console.log(barCodeArr[0].productBarCode)
							let code = barCodeArr[0].productBarCode
							console.log("搜索框串码搜索成功")

							let data = {
								'barCode':that.barCodesearch,
								'shopCode':that.userList.shopCode,//"S00000000000000000001",
							//	'cuanCode':that.cuanCode,//串码
							//	'productName':that.productName,
								'isBinding':1,
							}
							that.barCodeSearchFun(code)//搜索框串码有结果的条形码搜索
						}
					}else {
						that.$alert(res.data.message, '提示', {
						  confirmButtonText: '确定',
						   center: true,
						});
						//alert(res.data.message)
					}
				})
				.catch(function(err) {
				  console.log(err);
				});
			},
			//商品名称搜索
			searchGoodsName(d){
				let user = JSON.parse(localStorage.getItem("userInfo"))
				this.userInfo = user
				console.log(this.userInfo.shopCode)
				var that =  this
				this.$http({
				  method: "post",
				  url:"/api/product/selectProductForCash",
				  data:d,
				})
				.then(function(res) {

					if (res.status == 200 && res.data.statusCode == 200){
						console.log(res)
						//网络繁忙
						if ( res.data.result == null){
							that.$alert(res.data.message, '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
							//alert(res.data.message)
							return;
						}
						//查询无商品
						if (res.data.result.list.length == 0){
							that.$alert('亲~您查询的商品没有库存了~', '提示', {
							  confirmButtonText: '确定',
							   center: true,
							});
							return
						}

						let goodsListArr = res.data.result.list
						let arr = []
						for (let i=0;i<goodsListArr.length;i++){
							goodsListArr[i].num= 1
							goodsListArr[i].total = goodsListArr[i].num*goodsListArr[i].price
						}
						for (let i=0;i<goodsListArr.length;i++){
							if (goodsListArr[i].fictitiousStock > 0){//过滤掉库存为零的数据
								arr.push(goodsListArr[i])

							}
						}
						console.log(arr)
						arr = that.computedSave(arr)
						for (let i=0;i<arr.length;i++){
							that.tableData3.push(arr[i])
						}
						that.tableData3 = that.computedSave(that.tableData3)
						console.log(that.tableData3)

						//that.tableData3 = that.computedResult(that.tableData3)
						that.$nextTick( ()=> {
								 that.checkedM();//每次更新了数据，触发这个函数即可。
						})
						that.searchVisible.show = false
					}
				})
				.catch(function(err) {
				  console.log(err);
				});
			},
			//计算合并相同商品
			computedSave(arry){
			    let _result = [];
				for(let i = 0;i<arry.length;i++){
					//只查找条形码商品(因为串码不合并)
					//默认_result里没有此商品
					let _has = false;
					if(arry[i].productScanType === 1){
						//在_result里查找是否有此商品(_result 里是有串码商品的 并且串码商品的 条码是有可能和条码商品相同的)
						for(let j = 0;j<_result.length;j++){
							//如果有此商品 则加上此商品的数量
							if(_result[j].productScanType === 1 && _result[j].barCode === arry[i].barCode){
								_result[j].num+=arry[i].num
								_result[j].total = _result[j].num*_result[j].price
								console.log(_result[j].total,_result[j].num,_result[j].price+"444444444444444")

								_has = true;
								break;
							}
						}
						//如果没有此商品 则 _result 里添加此商品 数量为此商品数量
						if(!_has){
							_result.push(arry[i]);
						}
					}else if(arry[i].productScanType === 0){


						//如果是串码商品直接放入_result
						for(let j = 0;j<_result.length;j++){
							//如果有此商品 则不在放入_result
							if(_result[j].productScanType === 0 && _result[j].productSerialCode === arry[i].productSerialCode){//
								_has = true;
								break;
							}
						}
						if(!_has){
							_result.push(arry[i]);
						}
					}else{
						//合并商品
						for(let j = 0;j<_result.length;j++){
							//如果有此商品 则不在放入_result
							if(_result[j].barCode === arry[i].barCode){
								_result[j].num+=arry[i].num;
								_has = true;
								break;
							}
						}
						if(!_has){
							_result.push(arry[i]);
						}
					}
				}
				return _result;
			},
			computedResult(arry){
				this.moneyAll = 0
				for (let i=0;i<arry.length;i++){
					this.$set(arry[i],'total', arry[i].price)
				}

				let newfood=[];
				var temp = {};
					for(var i in arry) {
						var key= arry[i].id;
						if(temp[key]) {
							temp[key].id = temp[key].id ;
							temp[key].num = Number(temp[key].num) + Number(arry[i].num);
						} else {
							temp[key] = {};
							temp[key].id = arry[i].id;
							temp[key].num = arry[i].num;
						}
						temp[key].productName= arry[i].productName;
						temp[key].id= arry[i].id;
						temp[key].barCode= arry[i].barCode;
						temp[key].productCode= arry[i].productCode;

						temp[key].total= Number(arry[i].price)*Number(temp[key].num);
						temp[key].costPrice= arry[i].costPrice;
						temp[key].price= arry[i].price;
						temp[key].shopCode= arry[i].shopCode;
						temp[key].fictitiousStock= arry[i].fictitiousStock;
						temp[key].masterGraph= arry[i].masterGraph;
					}
				  for(var k in temp){
					 newfood.push(temp[k])
				  }
				  console.log(newfood);
				  return newfood
			},
			//关键字搜索框搜索商品
			goodsList(){
				this.searchVisible.show = true
				console.log(this.searchValue)
				this.barCode = this.searchValue
			},
			tableRowStyle(){
				return 'border:1px;'
			},

			//勾选状态
			handleSelectionChange(val) {
				if (!this.multipleGoodsVisible.show){
					console.log(val.length)
					console.log(val)
					this.checkArr = val
					this.checkNum = val.length
				}
				if (this.multipleGoodsVisible.show){//单选
						if (val.length > 1) {
						  this.$refs.Table.clearSelection();
						  this.$refs.Table.toggleRowSelection(val.pop());
							console.log(val)
						}
						if (val.length === 1){
							//console.log(val)
						}
				}
			},
			//删除商品
			deletGoods(){
				// console.log(this.isChecked)
 			// 	console.log(this.checkNum)
				// console.log(this.tableData3)
				// console.log(this.checkArr)

				this.tableData3 = this.getSubtract(this.tableData3,this.checkArr)

			},
			//删除方法
			getSubtract(unionArr,subsetArr){
				var new_tmp = new Array();
		        for(var i=0;i<unionArr.length;i++){
		            var flag = true;
		            for(var j=0;j<subsetArr.length;j++){
		                if(unionArr[i].id == subsetArr[j].id){
		                    flag = false;
		                }
		            }
		            if(flag){
		                new_tmp.push(unionArr[i]);
		            }
		        }
		        return new_tmp;
			},
			checkboxInit(row,index){
				return 1
			},
			//是否勾选
			isGoodsTrue(v){
				this.isChecked = v
			},

			//表头颜色
			headStyle(row, rowIndex){
				return 'background:#f0f0f0'
			}

		}
	}
</script>

<style scoped>
@import '../../assets/css/Home.css'


</style>
