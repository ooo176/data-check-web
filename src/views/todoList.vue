<template>
    <div style="width: 50%;">
        <el-input v-model="input" placeholder="请输入内容" id="input"></el-input>
        <br/><br/>
        <el-button type="info" @click="addItem()">添加</el-button>
    <el-table
        :data="tableData"
        border
        style="width: 50%">
           <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          prop="name"
          label="代办项"
          width="200">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="deleteRow(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

    </div>
    

</template>

<script>
    export default {
        name: "toList",
        data() {
            return {
                input: '',
                tableData: [{
                    name: '王小虎11'
                }, {
                    name: '王小虎22'
                }]  
            }
        },
        methods: {
            handleClick(row) {
                console.log(row);
            },
            deleteRow(row) {
                let index = this.tableData.indexOf(row.name);
                this.tableData.splice(index, 1);
            },
            addItem() {
                //判断是否已存在
                let filterArr = this.tableData.filter((item) => {
                    return item.name === this.input;
                })
                console.log(filterArr);
                console.log(filterArr.length);
                if (this.input != '' && filterArr.length === 0) {
                     var addObj = { name: this.input };
                    this.tableData.push(addObj);
                }
                
            }
        }
        
    }
</script>

<style>
    
</style>