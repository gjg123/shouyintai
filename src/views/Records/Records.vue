<template>
	<div class="records">

		<div class="leftContent">
			<el-table
				ref="multipleTable"
				:data="tableData6"
				border
				@row-click="openDetails"
				tooltip-effect="dark"
				style="width: 100%;height:95%"	>
				<el-table-column
				  prop="orderCode"
				  label="订单号"
				  align="center"

				  show-overflow-tooltip>
				</el-table-column>

				<el-table-column
				  prop="orderTotalPrice"
				  label="总额"
				  align="center"
				  show-overflow-tooltip>
				</el-table-column>
			  <el-table-column
				prop="orderState"
				label="订单状态"
				align="center"
				show-overflow-tooltip>
			  </el-table-column>
			  <el-table-column
				  prop="createTime"
				  :formatter="dateFormat"
				  label="下单时间"
				  align="center"
				  show-overflow-tooltip>

				</el-table-column>
			</el-table>
			<div>
			  <el-pagination
			  :total="paginations.total"
				 @size-change="handleSizeChange"
				  :page-size="paginations.page_size"
				prev-text="上一页"
				:current-page.sync='paginations.page_index'
				next-text="下一页"

				@current-change="handleCurre"
				background
				layout="prev, next ,total">
			  </el-pagination>
			</div>
		</div>
		<div class="rightContent">
			<el-table
				  :data="tableData3"
				  border
				  tooltip-effect="dark"
				  style="width: 100%">
				  <el-table-column
					label="商品条码"
					align="center">
					<template slot-scope="scope">{{ scope.row.productBarcode }}</template>
				  </el-table-column>
				  <el-table-column
					prop="productName"
					label="商品名称"
					align="center">
				  </el-table-column>
				   <el-table-column
					prop="productPrice"
					label="售价"
					align="center"
					show-overflow-tooltip>
				  </el-table-column>
				<el-table-column
					prop="fullreduceDeduction"
					label="折扣"
					align="center"
					show-overflow-tooltip>
				</el-table-column>
				<el-table-column
					prop="productNumber"
					label="数量"
					align="center"
					show-overflow-tooltip>
				</el-table-column>

			</el-table>
			<button @click="printing">小票打印</button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				shopInfo:{},
				dianpuList:{},
				tableData3:[
         {
           'productBarcode'  :'336',
           'productName'  :'苹果',
           'createTime':'20200202',
           'productPrice' :'20',
           'fullreduceDeduction'  :'-',
           'productNumber':5
         },
         {
           'productBarcode'  :'336',
           'productName'  :'方便面',
           'createTime':'20200202',
           'productPrice' :'20',
           'fullreduceDeduction'  :'-',
           'productNumber':5
         },
         {
           'productBarcode'  :'336',
           'productName'  :'牛奶',
           'createTime':'20200202',
           'productPrice' :'20',
           'fullreduceDeduction'  :'-',
           'productNumber':5
         },

        ],
				userInfo:{},
				companyName:"",
				username:"",
				tableData6:[
          {
            'orderCode'  :'336',
            'orderTotalPrice'  :20,
            'createTime'  :'2020-02-12',
            'orderState':2
          },
          {
            'orderCode'  :'337',
            'orderTotalPrice'  :20,
             'createTime'  :'2020-02-12',
            'orderState':2
          },
          {
            'orderCode'  :'338',
            'orderTotalPrice'  :20,
             'createTime'  :'2020-02-12',
            'orderState':2
          }


        ],
				tabledataData:{},
				ddList:{},
				userList:{},
				allTableData :[],
				paginations: {
					page_index: 1, // 当前位于哪页
					total: 0, // 总数
					page_size: 5, // 1页显示多少条
					layout: "prev,next" // 翻页属性
				},

			}
		},
		mounted() {
			// var userInfo = localStorage.getItem('userInfo')//用户信息
			// this.userInfo = JSON.parse(userInfo)//用户名称,从用户信息中去
			// console.log(this.userInfo)
			// console.log(this.userInfo.shopCode)
			// var shopInfo = localStorage.getItem('shopInfo')//用户信息
			// this.shopInfo = JSON.parse(shopInfo)

			//this.getList()
		},
		created(){
			//this.getList()//获取订单信息

		},
		methods:{
			printing(){
				console.log("1")
				this.ddList = this.tabledataData;
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
				console.log("2")
				var startDateM = (new Date(this.ddList.createTime)).getTime(); //得到毫秒数
				console.log(startDateM)
				var data
				data={}
				console.log("3")


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
				console.log("4")
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
			getTwo(M){
				M=M>9?M:"0"+M;
				return M
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
         		 const timeFormat= year + "-" + this.getTwo(month) + "-" + this.getTwo(day) + "-" + this.getTwo(hh) + ":" + this.getTwo(mm)+ ":" + this.getTwo(ss)
				 return timeFormat;	                  
			},

			//订单列表
			getList(){
        this.tableData6 = [
          {
            'productBarcode'  :'11253',
            'productName'  :'苹果',
            'createTime':'20200202',
            'productPrice' :'20',
            'fullreduceDeduction'  :'-',
            'productNumber':5
          }

        ]
        return
				var data = {
					"pageNum":1,//	必选	Integer		页数
					"pageSize":10,//	必选	Integer		每页显示条数
					"online":0,//必选	Integer		是否线上，0为线下
					"shopCode":this.userInfo.shopCode,//		String		店铺编号
					"orderState":'0,6,8'//全部订单
				}
				console.log(this.userInfo)
				console.log(data)
				var that = this
				this.$http({
				  method: "post",
				  url:"/api/orderCapital/getOrderCapitalPage",
				  data:data,
				})
				.then(function(res) {
					if (res.status == 200 && res.data.statusCode == 200){
						console.log(res.data.result)
						let list = res.data.result.list
						for (let i=0;i<list.length;i++){
							if (list[i].orderState == 0){
								list[i].orderState = "订单未付款"
							}
							if (list[i].orderState == 6){
								list[i].orderState = "订单已付款"
							}
							if (list[i].orderState == 8){
								list[i].orderState = "订单已关闭"
							}
						}
						that.tableData6 = list
						that.allTableData = list

						that.setPaginations()
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
			setPaginations() {
				  // 总页数
				  this.paginations.total = this.allTableData.length;
				  this.paginations.page_index = 1;
				  this.paginations.page_size = 10;
				  // 设置默认分页数据
				  this.tableData6 = this.allTableData.filter((item, index) => {
					return index < this.paginations.page_size;
				  });
			},
			handleCurre(page){
				// 当前页
				  let sortnum = this.paginations.page_size * (page - 1);
				  let table = this.allTableData.filter((item, index) => {
					return index >= sortnum;
				  });
				  // 设置默认分页数据
				  this.tableData6 = table.filter((item, index) => {
					return index < this.paginations.page_size;
				  });
			},
			handleSizeChange(page_size){

				// 切换size
			  this.paginations.page_index = 1;
			  this.paginations.page_size = page_size;
			  this.tableData6 = this.allTableData.filter((item, index) => {
				return index < page_size;
			  });
			},
			//订单详情
			openDetails(row, column, event){
				console.log("456")

				this.tabledataData=row;
				var data = {
					"createUser":row.createUse,
					"orderCode":row.orderCode
				}
				const loading = this.$loading({
				  lock: true,
				  text: 'loading.....',
				  spinner: 'el-icon-loading',
				  background: 'rgba(0, 0, 0, 0.7)'
				});
				var that = this
				this.$http({
				  method: "post",
				  url:"/api/orderCapital/getOrderCapitalInfoById",
				  data:data,
				})
				.then(function(res) {
					setTimeout(() => {
					  loading.close();
					}, 10);
					if (res.status == 200 && res.data.statusCode == 200){
						console.log(res.data)
						that.dianpuList = res.data.result
						console.log(res.data.result.sellOrderInfoList)
						var list = res.data.result.sellOrderInfoList
						for (let i=0;i<list.length;i++){
							list[i].fullreduceDeduction=0
						}
						that.tableData3 = list
					}else {
						that.$alert(res.data.message, '提示', {
						  confirmButtonText: '确定',
						   center: true,
						});
					}
				})
				.catch(function(err) {
					setTimeout(() => {
					  loading.close();
					}, 10);
				  console.log(err);
				});
			},
			handleSelectionChange(val) {
				console.log(val)
			},
			onSearch() {
			    const loading = this.$loading({
			      lock: true,
			      text: 'Loading',
			      spinner: 'el-icon-loading',
			      background: 'rgba(0, 0, 0, 0.7)',
			      target: document.querySelector('.div1')
			    });
			    setTimeout(() => {
			      loading.close();
			    }, 2000);
			}
		}
	}
</script>

<style scoped>
		.records{
		width:100%;
		height:100%;
		display: flex;
		justify-content: center;
	}
	.leftContent{

		width:35%;
		height:100%;
		padding:0 10px 10px;
		box-sizing: border-box;
		border:1px solid #999;
	}
	.rightContent{
		width:65%;
		height:100%;

	}

/deep/ .leftContent .el-table  tr:first-child{
   background: #ccc;
  }
</style>
