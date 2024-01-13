<template>
    <div class="area">
        <h2>{{address}}</h2>
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
                    label="作者"
                    prop="user.screen_name">
            </el-table-column>
            <el-table-column
                    label="内容"
                    prop="text_raw">
            </el-table-column>
            <el-table-column
                    :formatter="formatDate"
                    label="创建日期"
                    prop="created_at">
            </el-table-column>
        </el-table>
        <el-pagination
                :current-page="currentPage"
                :page-sizes="[5,10, 20, 30]"
                :total="total"
                @current-change="handleCurrentChange"
                @size-change="handleSizeChange"
                layout="total, sizes, prev, pager, next, jumper">
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
                this.getRequest('weibo/query', '')
                    .then(resp => {
                        if (resp) {
                            this.loading = false;
                            this.tableData = resp.data.list;
                        } else {
                            this.loading = false;
                            this.tableData = [];
                            this.warn = '接口请求异常！！';
                        }
                    })
            },
            queryDetail() {
                this.getRequest('weibo/detail', '')
                    .then(resp => {
                        if (resp) {
                            console.log(resp.data);
                            this.address = resp.data.ip_location;
                        } else {
                            console.log('接口请求异常！！');
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
                        this.total = resp.total;
                    } else {
                        this.loading = false;
                        this.tableData = [];
                        this.warn = '接口请求异常！！';
                    }
                })
            },
            init() {
                this.listAllSql();
                this.queryDetail();
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
            },
            formatDate(row, column) {
                console.log(column);
                console.log("row");
                console.log(row);
                const date = new Date(row.created_at);
                const month = (date.getMonth() + 1).toString().padStart(2, '0');
                const day = date.getDate().toString().padStart(2, '0');
                return `${month}-${day}`;
            }
        },
        data() {
            return {
                tableData: [],
                loading: false,
                warn: '添加工资账套',
                currentPage: 1,
                pageSize: 10,
                total: 0,
                address: '未知'
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