<template>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
        <el-table-column
                label="Date"
                prop="date">
        </el-table-column>
        <el-table-column
                label="Name"
                prop="name">
        </el-table-column>
        <el-table-column
                align="right">
            <template slot="header">
                <el-input
                        placeholder="输入关键字搜索"
                        size="mini"
                        v-model="search"/>
            </template>
            <template slot-scope="scope">
                <el-button
                        @click="handleEdit(scope.$index, scope.row)"
                        size="mini">Edit
                </el-button>
                <el-button
                        @click="handleDelete(scope.$index, scope.row)"
                        size="mini"
                        type="danger">Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        name: "table1",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        },
    }
</script>

