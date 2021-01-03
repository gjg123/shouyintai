<template>
	<div id="moneyPoupu">
		<div id="getMoneyBox" >
			<el-dialog
				  title="订单收款"
				  class="div"
				  :show-close="false"
				  :close-on-click-modal="false"
				  :visible.sync="moneyVisible.show"
				  width="50%"
				  center>
				    <el-form :model="moneyForm">
						<input type="text" ref="hidden" value="111111111111111" id="hiddenInp">
				    	<p class="z" style="text-align: center;width:100%;">订单总金额￥{{takeNum(moneyTota)}}</p>
				    	 <div class="aBox">
				    		<p class="paymentMethod" style="text-align: center;width:100%;">收款方式</p>
							<div class="tBox">
							<ul class="spanBox">
								<li>
									<span ref="lkl" class="leftSpan centerSpan">拉卡拉</span>
									<span class="rightSpan centerSpan">
										<input ref="lklInp" @blur="getTotalL"   :disabled="false" type="text" name="lakala" id="" v-model="lakala" class="inpK"/>
										<!-- <el-button  :disabled="isDithsablelkl"  id="b1" ref="getMoneyChange"   @click.prevent="getMoney(2)"   size="mini" type="danger"  >收款</el-button> -->
                    <el-button    id="b1" ref="getMoneyChange"   @click.prevent="getMoney(2)"   size="mini" type="danger"  >收款</el-button>
										<!-- <button id="b1" type="button"  @click.prevent="click3()" > saaaaa </button> -->
									</span>
								</li>
								<li>
									<span class="leftSpan">现金</span>
									<span class="rightSpan ">
										<input @blur="getTotalX" type="text" name="xianjin" id="" v-model="xianjin" class="inpK"/>
										<!-- <el-button
										    :disabled="isDithsablexj"
										    @click.prevent="getMoney(1)"
											size="mini"
											type="danger"
										  >收款</el-button> -->
                      <el-button

                          @click.prevent="getMoney(1)"
                      	size="mini"
                      	type="danger"
                        >收款</el-button>
									</span>
								</li>
							</ul>
							</div>
				    	</div>

				    	 <div class="aBox">
				    		<el-table
							    ref="multipleTable"
							    :data="tableData6"
							    border
							    tooltip-effect="dark"
							    style="width: 100%"
							    @selection-change="handleSelectionChange">
							    <el-table-column
							      type="selection"
								  :selectable='selectInit'
							      label="全选"
							      align="center"
							      width="55">
							    </el-table-column>


								<el-table-column
								  prop="paywayName"
								  label="收款方式"
								  align="center"
								  show-overflow-tooltip>
								  <template slot-scope="scope">
                    {{scope.row.paywayName}}
									<!-- {{getRefundState(scope.row.paywayName)}} -->
								  </template>

								</el-table-column>

							    <el-table-column
							      prop="netAmount"
							      label="收款金额"
							      align="center"
							      show-overflow-tooltip>
							    </el-table-column>
							  <el-table-column
							      prop="paymentState"
							      label="状态"
							      align="center"
							      show-overflow-tooltip>
								  <template slot-scope="scope">
                    {{scope.row.paymentState}}
								  		 <!-- {{getState(scope.row.paymentState)}} -->
								  </template>

							    </el-table-column>

							  <el-table-column
							      prop="createTime"
							      label="时间"
								  :formatter="dateFormat"
							      align="center"
							      show-overflow-tooltip>
							   </el-table-column>
							  </el-table>
							  <div class="weibu">
							  	<div class="checkWrapper">
							  		<!--<span>已付款总金额￥{{numbData.toFixed(2)}}</span>-->
							  	<!-- 	<span>已付款总金额￥{{takeNum(numbData)}}</span> -->
                    <span>已付款总金额￥{{takeNum(77)}}</span>
							  	</div>
							  	<div id="">
							  		<!-- <el-button :disabled="isdisableTK"  size="mini" type="danger" @click="refund">退款</el-button> -->
                    <el-button   size="mini" type="danger" @click="refund">退款</el-button>
							  	</div>
							  </div>
				    	</div>
					  </el-form>
					  <span slot="footer" class="dialog-footer">
						    <el-button @click="confNo">取 消</el-button>
						    <!-- <el-button :disabled="isDithsablelqd" type="primary" @click="confOk">确 定</el-button> -->
                <el-button  type="primary" @click="confOk">确 定</el-button>
					  </span>
				</el-dialog>
		</div>


		<!-- 收款失败 -->
		<el-dialog
		  title="订单收款"
		  :show-close="false"
		  :close-on-click-modal="false"
		  :visible.sync="errorVisible.show"
		  width="30%"
		  center>

		    <el-form :model="errorForm">
		    	<p class="ce">总金额￥{{numbData}}</p>
		    	<div class="ce">
		    		<img src="../../assets/sb.png" style="width:80px;height:80px;"/>
		    	</div>
		    	<p class="ce">所有已收款项原路退还</p>
			</el-form>
				<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="errorOk">确 定</el-button>
		    </span>
		</el-dialog>

		<!-- 收款成功 -->
		<el-dialog
		  title="订单收款"
		  :show-close="false"
		  :close-on-click-modal="false"
		  :visible.sync="successVisible.show"
		  width="30%"
		  center>
				<div class="sucessWrapper">
          <p class="allMoney sucessImg">总金额￥77元</p>
					<!-- <p class="allMoney sucessImg">总金额￥{{takeNum(numbData) }}</p> -->
					<el-form :model="successForm">

						<div class="allMoney ">
							<img src="../../assets/2.png" style="width:80px;height:80px;"/>
						</div>
						<p class="allMoney">收款成功</p>
					</el-form>
				</div>
				<span slot="footer" class="dialog-footer">
				<!-- <el-button :disabled="isjiny"  type="primary" @click="successOk">确 定</el-button> -->
        <el-button   type="primary" @click="successOk">确 定</el-button>

		    </span>
		</el-dialog>

	</div>
</template>

<script>

	export default {
		props:{
			moneyVisible:Object,
			moneyForm: Object,
			tableData5:Array,
			tableData2:Array,
			tableData3:Array,
			input:String,
			searchValue:String,
			moneyTota:Number,//总需要收款的金额
			saveMoneyList:Object
		},
		data(){
			return {
				isShowInp:true,//默认可以走getMoney方法,
				userInfo:{},//用户信息
				username:'',
				isPay:false,//没有待支付
				companyName:'',
				ddList:[],
				istukuanBtb:'',//点击的是取消按钮
				allSelextNum:0,//所有收款的和和所有输入框的和
				checkNum:0,
				loading2:false,
				isAll:'',
				sucessMoney:0,//支付成功的金额
				numArr:[],//保存流水列表的总资金
				getType:"扫码",
				tuikuanClientSn:[],//流水列表中已勾选准备退款的的流水
				clientSn:'',
				barCode:'',
				allMoneys:77,
				nullArr:[],//一个空数组
				xianjin:'',
				lakala:'',
				pos:'0',
				selectNuml:0,//拉卡拉输入框的值加上已付款的值得和
				selectNumX:0,//现金输入框的值加上已付款的值得和
				selected:{
					able:true
				},
				tableData6:[
          // {
          //   'paywayName' :'现金',
          //   'netAmount':77,
          //   'paymentState':2,
          //   'createTime':'2020-12-12 14:00:00'
          // }


        ],
				isdis:false,
				totalMoney:'',
				errorVisible:{
					show:false,
				},
				userList:{},
				errorForm:{
					title:"提示失败"
				},
				successVisible:{
					show:false
				},
				successForm:{
					title:"提示失败"
				},
				configList:{},
				istake:false,
				test:1,
			}
		},
		created(){
			this.getProductDetail2()
		},
		watch:{

		},
		computed: {
	        moneyTypeTota: function () {
				var _num =	Number(this.xianjin) + Number(this.lakala)
				return _num
			},
			isDithsablelqd:function (){
				if (this.numbData == this.moneyTota){
					return false
				}else {
					return true
				}
        return false
			},
			isDithsablelkl:function (){
				if (this.lakala <= 0){
					return true
				}else {
					return false
				}
			},
			isdisableTK:function (){
				if (this.checkNum == 0 || this.tableData6.length == 0){
					return true
				}else {
					return false
				}
			},
			isDithsablexj:function (){
				if (this.xianjin != 0){
					return false
				}else {
					return true
				}
			},
			isjiny:function (){
				if (this.numbData == 0){
					return true
				}else {
					return false
				}
			},
			numbData: function () {
				// var _NumAll = 0
				// for (let i=0;i<this.tableData6.length;i++){
				// 	if (this.numArr[i].paymentState == "2"){
				// 		_NumAll += Number(this.tableData6[i].netAmount)
				// 	}
				// }
				// this.allMoneys =  _NumAll
				// return this.allMoneys
        return 0

			},
	    },
		mounted() {
			let configList = localStorage.getItem('peizhiList')
			let userInfo = localStorage.getItem('userInfo')//用户信息
			this.configList = JSON.parse(configList)
			this.userInfo = JSON.parse(userInfo)
			this.companyName = localStorage.getItem("companyName")//店铺名称从店铺信息中取
		},
		methods :{
			  takeNum(n){
				return Number(n).toFixed(2)
			  },
			  //收款按钮失去焦点时,计算金额
			  getTotalL(){
				let reg = /^\d+(\.\d{1,2})?$/
				if(!(reg.test(this.lakala)) && this.lakala !==''){ //验证是否是纯数字包括小数和小数点
				  	this.$message({
				  		message: '输入有误，请重填!',
				  	});
				  	return ;
				}
				this.allSelextNum = Number(this.numbData) +  Number(this.xianjin) + Number(this.lakala)
				this.allSelextNum = this.takeNum(this.allSelextNum)
				if (this.allSelextNum > this.moneyTota){
					this.$alert('输入金额有误', '提示', {
					  confirmButtonText: '确定',
					   center: true,
					});
					this.lakala = ''
					this.xianjin = ''
				}
			  },
			  getTotalX(){

					let reg = /^\d+(\.\d{1,2})?$/
					if(!(reg.test(this.xianjin)) && this.xianjin !==''){ //验证是否是纯数字
						this.$message({
							message: '输入有误，请重填!',
						});
						return ;
					}
					this.allSelextNum = Number(this.numbData) +  Number(this.xianjin) + Number(this.lakala)
					this.allSelextNum = this.takeNum(this.allSelextNum)
					if (this.allSelextNum > this.moneyTota){
						this.$alert('输入金额有误', '提示', {
						  confirmButtonText: '确定',
						   center: true,
						});
						this.lakala = ''
						this.xianjin = ''
					}
			  },
			  //清空
			  clearData(){
				  this.tableData6 = []
			  },
			  //时间格式化
			  dateFormat(row, column, cellValue, index){
                    const daterc = row[column.property]
                    const dateMat= new Date(row.createTime);
                    const year = dateMat.getFullYear();
                    const month = dateMat.getMonth() + 1;
                    const day = dateMat.getDate();
                    const hh = dateMat.getHours();
                    const mm = dateMat.getMinutes();
                    const ss = dateMat.getSeconds();           
         			const timeFormat= year + "-" + this.getTwo(month)  + "-" +  this.getTwo(day) + "-" +this.getTwo(hh)   + ":" + this.getTwo(mm) + ":" + this.getTwo(ss)
					return timeFormat;	                  
			},
			getTwo(M){
				M=M>9?M:"0"+M;
				return M
			},
			//点击支付结束的确认按钮
			errorOk(){
				//this.changedd()
				this.$parent.clearData()
				this.tableData6 = []
				this.errorVisible.show  = false
				this.moneyVisible.show = false
			},
			//点击queen按钮
			successOk(){
		 		this.tableData6 = []
		// 		this.isPay = false
		 		this.$parent.clearData()

		// 		this.printing()//打印
				this.successVisible.show = false
				this.moneyVisible.show = false
			},
			//点击取消
			confNo(){
        this.cancelTheOrderCancel('url','data')//退款
        return
				if (this.numbData <= this.moneyTota || this.numbData == 0 ){
					this.isPay = false
					if (this.numbData == 0 ){
						let that = this
						this.$confirm('您还未付款, 确定要取消吗?', '提示', {
						  confirmButtonText: '确定',
						  cancelButtonText: '取消',
						  center: true,
						  type: 'warning'
						}).then(() => {
							for (let i=0;i<this.tableData6.length;i++){
								if (this.tableData6[i].paymentState == "4") {
									this.changedd()
								}
							}
							this.tableData6 = []
							this.$parent.clearData()
							this.moneyVisible.show = false


						}).catch(() => {
							console.log("点击了取消")
						});
						return;
					}
					for (let i=0;i<this.tableData6.length;i++){
						if (this.tableData6[i].paywayName == "1"  && this.tableData6[i].paymentState == "2"){
							var url = "/api/ordinaryOrder/updateOfflineCapitalFlow"
							var data = {
								"clientSn":this.tableData6[i].clientSn,
								"orderCode":this.tableData6[i].orderCode,
								"paymentState":4
							}
							this.cancelTheOrderCancel(url,data)//退款
						}

						if (this.tableData6[i].paywayName == "2" && this.tableData6[i].paymentState == "2"){
							var url = "/api/pay/sqbRevoke"
							var data = {
								'clientSn':this.tableData6[i].clientSn,//"CSN2019031311053010129",//this.tuikuanClientSn,
								'shopCode':this.configList.shopCode,//'admin',
								'shopShouqianbaConfigCode':this.configList.shopShouqianbaConfigCode,//'SSC0000000000000000'
							}
							this.cancelTheOrderCancel(url,data)//退款
						}

					}
				}
				else {
					this.$message({
					  message: '输入金额有误，请重新输入',
					  type: 'warning',
					  showClose: true,
					  center: true
					})
				}
			},
			//更改订单状态
			changedd(){
				var data ={
					"createUser":this.userInfo.code,
					"orderCode":this.saveMoneyList.orderCode,
					"orderState":8,
					"updateUser":this.userInfo.code,
				}
				//console.log(data)
				var that = this
					this.$http({
					  method: "post",
					  url:"/api/ordinaryOrder/updateOrderCapitalState",
					  data:data,
					})
					.then(function(res) {
						if (res.status == 200 && res.data.statusCode == 200){
							//that.tableData6 = that.nullArr
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
			//点击确定 更改订单orderState完成是传6,更改传8
			confOk(){
        this.isPay = true
        this.successVisible.show = true
        return
				// if (this.numbData == this.moneyTota){
				// 	console.log("5555555555555555555")
				// 	const loading = this.$loading({
				// 	  lock: true,
				// 	  text: 'loading.....',
				// 	  spinner: 'el-icon-loading',
				// 	  background: 'rgba(0, 0, 0, 0.7)'
				// 	});
				// 	//createUser =用户编号
				// 	var data ={
				// 		"createUser":this.userInfo.code,
				// 		"orderCode":this.saveMoneyList.orderCode,
				// 		"orderState":6,
				// 		"updateUser":this.userInfo.code,//用户编号
				// 	}
				// 	var that = this
				// 		this.$http({
				// 		  method: "post",
				// 		  url:"/api/ordinaryOrder/updateOrderCapitalState",
				// 		  data:data,
				// 		})
				// 		.then(function(res) {
				// 			setTimeout(() => {
				// 			  loading.close();
				// 			}, 100);
				// 			if (res.status == 200 && res.data.statusCode == 200){
				// 				console.log(res.data)
				// 				console.log(res.data.result)
				// 				that.isPay = true
				// 				that.ddList = res.data.result
				// 				console.log(that.ddList)
				// 				that.successVisible.show = true
				// 			}else {
				// 				that.$alert(res.data.message, '提示', {
				// 				  confirmButtonText: '确定',
				// 				   center: true,
				// 				});
				// 			}
				// 		})
				// 		.catch(function(err) {
				// 			setTimeout(() => {
				// 			  loading.close();
				// 			}, 100);
				// 		  console.log(err);
				// 		  that.$alert(err, '提示', {
				// 		    confirmButtonText: '确定',
				// 		     center: true,
				// 		  });
				// 		});
				// }
				// else {
				// 	this.$message({
				// 	  message: '输入金额有误，请重新输入',
				// 	  type: 'warning',
				// 	  showClose: true,
				// 	  center: true
				// 	})
				// }
			},
			printing(){
				var arr = []
				for (let i=0;i<this.ddList.sellOrderInfoList.length;i++){
					var obj =
						{
							"gname":this.ddList.sellOrderInfoList[i].productName,//	String	必填	商品名称
							"price":this.ddList.sellOrderInfoList[i].productPrice,//	String	必填	商品单价
							"num":this.ddList.sellOrderInfoList[i].productNumber,//	String	必填	商品数量
							"total":this.ddList.sellOrderInfoList[i].productTotalPrice,//	Strign	必填	小计
						}
					arr.push(obj)

				}
				let startDateM = (new Date(this.ddList.createTime)).getTime(); //得到毫秒数
				console.log(startDateM)
				let data
				data={}
				data = {
					"shopName":this.ddList.shopName,//	String	必填	门店名称
					"operatorName":this.ddList.salesman,//	String	必填	操作人姓名
					"orderId":this.ddList.orderCode,//	String	必填	订单编号
					"totalGoodsNum":this.ddList.orderProductNumber,//	String	必填	商品总数
					"totalPrice":this.ddList.orderTotalPrice,//	Strign		总金额
					"actualCollection":this.ddList.orderPayablePrice,//	Strign		 实收款
					"giveChange":"0",//	Strign		找零
					"createTime":startDateM,//this.dianpuList.createTime,//	Long		订单创建 毫秒数
					"goods":arr,//	数组		商品列表
				}
				var that = this
				try
				{
					printUtil.print(JSON.stringify(data));
				}
				catch(e)
				{
					console.log(e)
				}
			},
			//查询商品
			selecteds(){
				return true
			},
			handleDelete(index, row){
				  console.log(index, row);
			},
			handdle(row, event, column){


			},
			//流水列表勾选状态
			handleSelectionChange(val) {
				console.log(val)
				this.multipleSelection = val;
				this.tuikuanClientSn = val;
				this.checkArr = val
				this.checkNum = val.length
				var num=0
				for (let i=0;i<val.length;i++){
					num+=Number(val[i].goodsPrice)
				}
				this.totalMoney = num
			},
			//获取流水列表 通过订单编码
			getList(){


       this.tableData6 = [
          {
            'paywayName' :'现金',
            'netAmount':77,
            'paymentState':2,
            'createTime':'2020-12-12 14:00:00'
          }


        ]
        this.numArr = 77

				var data = {
					"orderCode": this.saveMoneyList.orderCode,//订单编码
				}
				console.log(data)
				var that = this
					this.$http({
					  method: "post",
					  url:"/api/ordinaryOrder/getOrderOfflineCapitalList",
					  data:data,
					})
					.then(function(res) {
						res.status = 200
						res.data.statusCode = 200
						if (res.status == 200 && res.data.statusCode == 200){
							that.numArr = []
							var arrList = res.data.result
							that.isPay = false
							for (let i=0;i<arrList.length;i++){
								if (arrList[i].paywayName == '2' && arrList[i].paymentState == '1'){
									that.isPay = true//待付款,拉卡拉
									break
								}
							}
							that.tableData6 = res.data.result
							that.numArr = res.data.result
						}
					})
					.catch(function(err) {
					  console.log(err);
					});
			},
			getState(paymentState){
				let obj = {"1":"待付款","2":"支付成功","3":"支付失败","4":"退款成功","5":"退款失败"};
				return obj[paymentState];
			},
			getRefundState(paywayName){
				let obj = {"1":"现金","2":"拉卡拉","3":"POS"};
				return obj[paywayName];
			},
			//点击退款按钮
			refund(){//退款分类
        this.cancelTheOrder('url','data')
        return
				// this.istukuanBtb = true//点击退款按钮,
				// this.isAll = true
				// if (this.istukuanBtb == true){
				// 	var arr = this.tuikuanClientSn
				// 	this.tuikuanClientSn = this.nullArr
				// 	for (let i=0;i<arr.length;i++){
				// 		if (arr[i].paywayName == "1" && arr[i].paymentState == '2'){
				// 			var url = "/api/ordinaryOrder/updateOfflineCapitalFlow"
				// 			var data = {
				// 				"clientSn":arr[i].clientSn,
				// 				"orderCode":arr[i].orderCode,
				// 				"paymentState":4
				// 			}
				// 			this.cancelTheOrder(url,data)
				// 		}
				// 		if (arr[i].paywayName == "2" && arr[i].paymentState == '2'){
				// 			var url = "/api/pay/sqbRevoke"
				// 			var data = {
				// 				'clientSn':arr[i].clientSn,//"CSN2019031311053010129",//this.tuikuanClientSn,
				// 				'shopCode':this.configList.shopCode,
				// 				'shopShouqianbaConfigCode':this.configList.shopShouqianbaConfigCode
				// 			}
				// 			this.cancelTheOrder(url,data)
				// 		}
				// 	}
				// }
			},
			//点击取消调用的退款
			cancelTheOrderCancel(url,data){
        this.errorVisible.show = true
        return
				// var that = this
				// this.$http({
				//   method: "post",
				//   url:url,
				//   data:data,
				// })
				// .then(function(res) {
				// 	if (res.status == 200 && res.data.statusCode == 200){
				// 		console.log(res.data)
				// 		that.allMoneys = Number(that.allMoneys) - Number(that.lakala)
				// 	   	that.errorVisible.show = true
				// 	}
				// })
				// .catch(function(err) {
				//   console.log(err);
				// });
			},
			//点击退款调用的退款
			cancelTheOrder(url,data){
      this .$message({
        		  showClose: true,
        		  message: '恭喜你，退款成功',
        		  type: 'success'
        		});
				//  const loading = this.$loading({
				//   lock: true,
				//   text: 'loading.....',
				//   spinner: 'el-icon-loading',
				//   background: 'rgba(0, 0, 0, 0.7)'
				// });
				// var that = this
				// this.$http({
				//   method: "post",
				//   url:url,
				//   data:data,
				// })
				// .then(function(res) {
				// 	setTimeout(() => {
				// 	  loading.close();
				// 	}, 100);
				// 	if (res.status == 200 && res.data.statusCode == 200){
				// 		that.allMoneys = Number(that.allMoneys) - Number(that.lakala)
				// 	   	that.getList()
				// 		that.$message({
				// 		  showClose: true,
				// 		  message: '恭喜你，退款成功',
				// 		  type: 'success'
				// 		});
				// 	}
				// })
				// .catch(function(err) {
				// 	setTimeout(() => {
				// 	  loading.close();
				// 	}, 100);
				//   that.$message({
				//     showClose: true,
				//     message: err,
				//     type: 'success'
				//   });
				// });
			},
			//监听到条形码后调取支付支付
			pay(v,c){
				 const loading = this.$loading({
				  lock: true,
				  text: 'loading.....',
				  spinner: 'el-icon-loading',
				  background: 'rgba(0, 0, 0, 0.7)'
				});
				console.log(this.lakala)

				let orderList = []
				for (let i=0;i<this.tableData6.length;i++){
					if (this.tableData6[i].paymentState === 1 && this.tableData6[i].paywayName == '2'){
						orderList.push(this.tableData6[i])
					}
				}
				var data = {
					'dynamicId':v.replace(/(^\s*)|(\s*$)/g, ""),//扫描的条形码
					'clientSn':orderList[0].clientSn,//clientSn,
					'operator':this.userInfo.phone,// "13533334444",
					'subject':orderList[0].subject,
					'totalAmount':orderList[0].netAmount,//'0.01',//this.lakala//实付金额
					'shopCode':this.configList.shopCode,//'admin',
					'shopShouqianbaConfigCode':this.configList.shopShouqianbaConfigCode,////'SSC0000000000000000'//配置code
				}
				var that = this;
				this.$http({
				  method:"post",
				  url:"/api/pay/sqbPay",
				  data:data,
				})
				.then(function(res) {
					setTimeout(() => {
					  loading.close();
					}, 100);
					that.getList()
					if (res.status == 200 && res.data.statusCode == 200){
							that.$message({
							  showClose: true,
							  message: '恭喜你，收款成功',
							  type: 'success'
							});
					}else {
						console.log("--------------------------->pay 支付成功返回---------------->  失败"+res.data.message)
						that.$alert(res.data.message, '提示', {
						  confirmButtonText: '确定',
						   center: true,
						});
					}
				})
				.catch(function(err) {
					setTimeout(() => {
					  loading.close();
					}, 100);
					that.getList()
					console.log("--------------------------->pay 支付error---------------->  error")
				  console.log(err);
				});
			},
			//获取条形码
			getProductDetail2(){
				var that = this
				var code = "";
				var lastTime,nextTime;
				var lastCode,nextCode;
				document.onkeypress = function(e) {
				    nextCode = e.which;
				    nextTime = new Date().getTime();
				    if(lastCode != null && lastTime != null && nextTime - lastTime <= 30) {
				        code += String.fromCharCode(lastCode);
				    } else if(lastCode != null && lastTime != null && nextTime - lastTime > 100){
				        code = "";
				    }
				    lastCode = nextCode;
				    lastTime = nextTime;
				}
				// console.log(code);
				window.onkeypress = function(e){
				    if(e.which == 13){
				        //2.获取到条形码 code
				         console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&扫码结果:"+code);

						 that.barCode = code
						//调用支付接口
						if (code != ''){
							if (that.moneyVisible.show == true){
								 console.log("走扫码支付");
								  that.isShowInp = false//isShowInp为false 时 不允许走getMoney
								 setTimeout(function(){that.isShowInp = true},100);
								// that.isShowInp = true

								// that.$refs.lkl.blur()
								that.pay(that.barCode,that.clientSn)

							 }
							 if (that.moneyVisible.show == false){
								  console.log("走扫码搜索");
								  that.$parent.changeCurse();
								//  that.tableData6 = []
								  console.log(code);
								  that.barCodeSaoMa = code
								  //that.$parent.barCodeSearchFunCode(code)
								  that.$parent.barCodeSearchFun2(code)//扫码枪的条码搜索
								  code = ''
							 }
						//	code = "";
						}else {
							 console.log("走回车键");
							// that.$parent.searchVisibleTrue(2);
						}
						 //that.searchVisibleTrue()
				         code = "";
				    }
				}
			},
			selectInit(row,index){
				if (row.paymentState == "2"){
				//if (row.paymentState == "支付成功"){
					 return true  //可勾选
				}else {
					 return false
				}
			},
			huiche(c){
				console.log(this.searchValue)
							var that = this
			   				var data = {
			   					'barCode':that.barCodesearch,
			   				}
			   				console.log(data)
							this.$http({
							  method: "post",
							  url:"/api/product/listProduct",
							  data:data,
							})
							.then(function(res) {
								if (res.status == 200 && res.data.statusCode == 200){
									that.searchVisible.show = false
									console.log(res.data)
									var list = res.data.result.list
								for (let i=0;i<list.length;i++){
									list[i].num = 1
									that.tableData3.push(list[i])
							    }
									console.log(that.tableData3)
									that.tableData3 = that.computedResult(that.tableData3)
									that.searchVisible.show = false
								}
							})
							.catch(function(err) {
							  console.log(err);
							});
			},
			//点击收款时先	保存资金流水 成功后再获取流水列表
			getMoney(x){
        console.log(44)

        // setTimeout(() => {
        //   loading.close();
        // }, 10);
        this.tableData6 = [
           {
             'paywayName' :'现金',
             'netAmount':77,
             'paymentState':2,
             'createTime':'2020-12-12 14:00:00'
           }


         ]
        //  this.numArr = 77
        return
// 				if (this.isShowInp  == false){//如果是非正常走入此方法,return
// 					return
// 				}
// 				 const loading = this.$loading({
// 				  lock: true,
// 				  text: 'loading.....',
// 				  spinner: 'el-icon-loading',
// 				  background: 'rgba(0, 0, 0, 0.7)'
// 				});
// 				this.selectNuml = Number(this.numbData) + Number(this.lakala)
// 				this.selectNumX = Number(this.numbData) +  Number(this.xianjin)
// 				if (x == 1 ){//现金收款
// 					let reg = /^\d+(\.\d{1,2})?$/
// 					if(!(reg.test(this.xianjin))){ //验证是否是纯数字
// 						this.$message({
// 							message: '输入有误，请重填!',
// 						});
// 						return ;
// 					}

// 					if (this.selectNumX <= this.moneyTota && this.xianjin > 0){
// 						if (this.isPay == true){
// 							setTimeout(() => {
// 							  loading.close();
// 							}, 10);
// 							console.log("=====================有待支付账单存在 无法建立新流水:  "+new Date());
// 							this.$alert('您还有一笔订单待支付,请您先支付!', '提示', {
// 							  confirmButtonText: '确定',
// 							   center: true,
// 							});
// 							return
// 						}
// 						var data = {
// 							"payway":'20',//第三方支付方式
// 							"paywayName":"1",//现金支付方式
// 							"netAmount":this.xianjin,//实付金额
// 							"paymentState": 2,//状态
// 							"orderCode":this.saveMoneyList.orderCode,////订单编号
// 							"createUser": this.userInfo.code,//"U00000000000000001001",
// 							'subject':'中益德诚支付',
// 							'operator':this.userInfo.phone,//'13533334444',
// 							'terminalSn':this.configList.terminalSn,//'100013540006690043'
// 						}
// 						var that = this
// 						console.log(data)
// 						this.$http({
// 						  method: "post",
// 						  url:"/api/ordinaryOrder/saveOfflineCapitalFlow",
// 						  data:data,
// 						})
// 						.then(function(res) {
// 							setTimeout(() => {
// 							  loading.close();
// 							}, 10);
// 							if (res.status == 200 && res.data.statusCode == 200){
// // 								setTimeout(() => {
// // 								  loading.close();
// // 								}, 10);
// 								that.getList()//获取流水列表
// 								that.$refs.lkl.focus()
// 								that.xianjin = ''
// 								that.$message({
// 								  showClose: true,
// 								  message: '恭喜您，收款成功',
// 								  type: 'success'
// 								});
// 							}else{
// 								that.$alert(res.data.message, '提示', {
// 								  confirmButtonText: '确定',
// 								   center: true,
// 								});
// 							}
// 						})
// 						.catch(function(err) {
// 							setTimeout(() => {
// 							  loading.close();
// 							}, 10);
// 						  console.log(err);
// 						  that.$message({
// 						    showClose: true,
// 						    message: '，收款失败',
// 						    type: 'success'
// 						  });
// 						});
// 					}else {
// 						setTimeout(() => {
// 						  loading.close();
// 						}, 10);
// 						this.$message({
// 						  message: '输入金额有误，请重新输入',
// 						  type: 'warning',
// 						  showClose: true,
// 						  center: true
// 						})
// 					}

// 				}
//  				if (x == 2 ){//拉卡拉收款
//  					if (this.selectNuml <= this.moneyTota && this.lakala > 0){
// 						let reg = /^\d+(\.\d{1,2})?$/
// 						if(!(reg.test(this.lakala))){ //验证是否是纯数字
// 							this.$message({
// 								message: '输入有误，请重填!',
// 							});
// 							return ;
// 						}

// 						if (this.isPay == true){
// 							setTimeout(() => {
// 							  loading.close();
// 							}, 10);
// 							console.log("=====================有待支付账单存在 无法建立新流水:  "+new Date());
// 							this.$alert('您还有一笔订单待支付,请您先支付!', '提示', {
// 							  confirmButtonText: '确定',
// 							   center: true,
// 							});
// 							return
// 						}
// 						var data = {
// 							//"payway":'20',//第三方支付方式
// 							"paymentState":1,//拉卡拉支付
// 							"paywayName":"2",//拉卡拉支付方式
// 							"netAmount":this.lakala,//实付金额
// 							"orderCode":this.saveMoneyList.orderCode,// 动态获取,后台穿的
// 							"createUser":this.userList.code,// "U00000000000000001001",
// 							'subject':'中益德诚支付',
// 							'operator':this.userInfo.phone,//'13533334444',
// 							'terminalSn':this.configList.terminalSn,//'100013540006690043'
// 						}
// 						var that = this
// 						this.$http({
// 						  method: "post",
// 						  url:"/api/ordinaryOrder/saveOfflineCapitalFlow",
// 						  data:data,
// 						})
// 						.then(function(res) {
// 							setTimeout(() => {
// 							  loading.close();
// 							}, 10);
// 							if (res.status == 200 && res.data.statusCode == 200){
// 								that.clientSn =res.data.result.clientSn
// 								that.getList()
// 								that.$refs.lkl.focus()
// 								that.lakala = ''
// 							}else {
// 								that.$alert(res.data.message, '提示', {
// 								  confirmButtonText: '确定',
// 								   center: true,
// 								});
// 							}
// 						})
// 						.catch(function(err) {
// 							setTimeout(() => {
// 							  loading.close();
// 							}, 10);
// 						  console.log(err);
// 						});
//  					}
// 					else {
// 						setTimeout(() => {
// 						  loading.close();
// 						}, 10);
// 						this.$message({
// 				          message: '输入金额有误，请重新输入',
// 				          type: 'warning',
// 				          showClose: true,
// 				          center: true
// 				        })
// 					}

//  				}
//  				if (x == 3 ){

//  				}
			}
		}
	}
</script>

<style scoped>
@import '../../assets/css/moneyPopup.css'

</style>
