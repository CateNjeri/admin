<template>
    <section>

        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.ticket_number" placeholder="Search"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="getAllValidatedSales">Search</el-button>
                </el-form-item>
            </el-form>
        </el-col>

        <el-table :data="validatedSales" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
                  style="width: 100%;">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column type="index" width="60">
            </el-table-column>
            <el-table-column prop="ticket_number" label="ticket number" width="200" sortable>
            </el-table-column>
            <el-table-column prop="event_ticket_id" label="event ticket id" width="200" sortable>
            </el-table-column>
            <el-table-column prop="validations" label="validated" width="180" :formatter="formatValidated" sortable>
            </el-table-column>

        </el-table>
    </section>
</template>

<script>
    import util from '../../common/js/util'
    //import NProgress from 'nprogress'
    import { getAllValidatedSales } from '../../api/api';

    export default {
        name: 'validatedSales',
        data() {
            return {
                filters: {
                    ticket_number : ''
                },
                validatedSales: [],
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
          formatValidated: function (row, column) {
              return row.validations == 1 ? 'Validated' : row.validations == 0 ? 'Pending' : 'ddd';
          },
            handleCurrentChange(val) {
                this.page = val;
                this.getAllValidatedSales();
            },
            //
            getAllValidatedSales() {
                let para = {
                    page: this.page,
                    name: this.filters.order_number
                };
                this.listLoading = true;
                //NProgress.start();
                getAllValidatedSales(para).then((res) => {
                    this.validatedSales = res.data.data;
                    this.listLoading = false;
                    //NProgress.done();
                });
            },

            selsChange: function (sels) {
                this.sels = sels;
            },
         },
        mounted() {
            this.getAllValidatedSales();
        }
    }
</script>

<style scoped>

</style>
