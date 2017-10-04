<template>
    <section>

        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.order_number" placeholder="Search"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="getAllSales">Search</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table :data="allSales" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
                  style="width: 100%;">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="order_number" label="order number" width="220" sortable>
            </el-table-column>
            <el-table-column prop="phone_number" label="phone number" width="220" sortable>
            </el-table-column>
            <el-table-column prop="amount" label="amount" width="220" sortable>
            </el-table-column>
            <el-table-column prop="transaction_id" label="transaction id" width="220" sortable>
            </el-table-column>
            <el-table-column prop="status" label="status" width="220" :formatter="formatStatus" sortable>
            </el-table-column>
        </el-table>
    </section>
</template>

<script>
    import util from '../../common/js/util'
    //import NProgress from 'nprogress'
    import { getAllSales } from '../../api/api';

    export default {
        name: 'allSales',
        data() {
            return {
                filters: {
                    order_number: ''
                },
                allSales: [],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],
            }
        },
        methods: {
          formatStatus: function (row, column) {
              return row.status == 1 ? 'Active' : row.status == 0 ? 'Pending' : 'ddd';
          },
            handleCurrentChange(val) {
                this.page = val;
                this.getAllSales();
            },
            //
            getAllSales() {
                let para = {
                    page: this.page,
                    name: this.filters.order_number
                };
                this.listLoading = true;
                //NProgress.start();
                getAllSales(para).then((res) => {
                    this.allSales = res.data.data;
                    this.listLoading = false;
                    //NProgress.done();
                });
            },

            selsChange: function (sels) {
                this.sels = sels;
            },
         },
        mounted() {
            this.getAllSales();
        }
    }
</script>

<style scoped>

</style>
