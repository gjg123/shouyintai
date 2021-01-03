<template>
  <div>
      <div>
        <el-button @click="addVip">添加会员</el-button>
      </div>
     <el-table
        :data="tableData"
        style="width: 100%">
       <el-table-column
         label="日期"
         width="180">
         <template slot-scope="scope">
           <i class="el-icon-time"></i>
           <span style="margin-left: 10px">{{ scope.row.date }}</span>
         </template>
       </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          label="电话"
          width="180">
          <template slot-scope="scope">
           <!-- <i class="el-icon-time"></i> -->
            <span style="margin-left: 10px">{{ scope.row.phone }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="充值"
          width="180">
          <template slot-scope="scope">
           <!-- <i class="el-icon-time"></i> -->
            <span style="margin-left: 10px">{{ scope.row.money }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="积分"
          width="180">
          <template slot-scope="scope">
           <!-- <i class="el-icon-time"></i> -->
            <span style="margin-left: 10px">{{ scope.row.integral }}</span>
          </template>
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>


      <el-dialog :title="titleText" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="充值" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="电话" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog
        title="提示"

        :visible.sync="dialogVisible2"
        width="30%"
        >
        <span style="display: inline-block;text-align: center;width: 100%;">您确认要删除吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible2 = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        dialogVisible2:false,
        titleText:'编辑会员',
        form:{
          'name':'莉莉',
          'money':200,
          '电话':'12323232322'
        },
        formLabelWidth: '120px',
        dialogFormVisible:false,
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            'integral':100,
            'phone':'13478767687',
            'money':200,
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
              'integral':100,
             'money':200,
            'phone':'13478767687',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
             'money':200,
               'integral':100,
            name: '王小虎',
            'phone':'13478767687',
             'money':200,
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
             'money':200,
               'integral':100,
            'phone':'13478767687',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
     methods: {
        handleEdit(index, row) {
          console.log(index, row);
          this.dialogFormVisible = true
          this.titleText = '编辑会员'
        },
        handleDelete(index, row) {
          console.log(index, row);
          this.dialogVisible2 = true
        },
        addVip(){
          this.dialogFormVisible = true
          this.titleText = '添加会员'
        }
      }
  }
</script>

<style>
</style>
