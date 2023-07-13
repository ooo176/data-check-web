<template>
    <div class="area">
        <h2>数据校验服务</h2>
        <el-button @click="() => checkPersonArchive()" type="primary">开始校验</el-button>
        <!--        <div class="warn"><span>{{ warn }}</span></div>-->
        <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                v-loading="loading">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    label="描述"
                    prop="desc"
                    width="180">
            </el-table-column>
            <el-table-column
                    label="sql"
                    prop="sql">
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            layout="total, sizes, prev, pager, next, jumper"
            :current-page="currentPage"
            :page-sizes="[5,10, 20, 30]"
            :total="total">
        </el-pagination>
    </div>

</template>

<script>
    export default {
        name: "Demo",
        methods: {
            handleClick(row) {
                console.log(row);
            },
            listAllSql() {
                this.loading = true;
                this.postRequest('sql/query', '{"pageNo":' + this.currentPage + ',"pageSize":' + this.pageSize + '}').then(resp => {
                    if (resp) {
                        this.loading = false;
                        console.log(resp.data)
                        this.tableData = resp.data;
                        this.warn = resp.msg;
                        this.total =resp.total;
                    } else {
                        this.loading = false;
                        this.tableData = [];
                        this.warn = '接口请求异常！！';
                    }
                })
            },
            checkPersonArchive() {
                this.loading = true;
                this.postRequest('sql/check', '{"pageNo":' + this.currentPage + ',"pageSize":' + this.pageSize + '}').then(resp => {
                    if (resp) {
                        this.loading = false;
                        console.log(resp.data)
                        this.tableData = resp.data;
                        this.warn = resp.msg;
                        this.total =resp.total;
                    } else {
                        this.loading = false;
                        this.tableData = [];
                        this.warn = '接口请求异常！！';
                    }
                })
            },
            init(){
                this.listAllSql();
            },
            showAddDepView() {
                this.tableData = [{
                    no: '1111',
                    desc: '人员档案未增加索引11',
                    sql: 'select * from person11'
                }];
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.listAllSql();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.listAllSql();
            }
        },
        data() {
            return {
                tableData: [],
                loading: false,
                warn: '添加工资账套',
                currentPage: 1,
                pageSize: 10,
                total: 0
            }
        },
        created() {
            this.init();
        }
    }
</script>

<style scoped>
    .area {
        border-radius: 15px;
        margin: 40px auto;
        width: auto;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .warn {
        height: 50px;
        width: auto;
        margin: 10px auto;
    }
</style>