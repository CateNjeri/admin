 <template>
  <div class="animated fadeIn">
      <!-- Start here -->
      <div class="row">
          <div class="col-sm-6  col-md-6 col-lg-3">
            <div class="card card-inverse" style="background-color:  #cccc00">
              <div class="card-block pb-0">
                <dropdown class="float-right" type="transparent p-0">
                <i class="fa fa-university" style="color:#000"></i>
                  <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </dropdown>
                <header>
                    <h4><p style="color:#000"> Total Collections</p></h4>
                </header>
                <br>
                <h3 class="mb-0" style="color:#000">Kshs.{{ sumSale | formatMoney(' ') }} </h3>
              </div>
              <card-line1-chart-example class="chart-wrapper px-3" style="height:70px;" height="70"/>
            </div>
          </div><!--/.col-->

          <div class="col-sm-6  col-md-6 col-lg-3">
            <div class="card card-inverse" style="background-color:#ffc61a;">
              <div class="card-block pb-0">
                <dropdown class="float-right" type="transparent p-0">
                  <i class="fa fa-database" style="color:#000"></i>
                  <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </dropdown>
                <header>
                <h4><p class="nav-link" style="color:#000">  Active Sales</p></h4>
              </header>
              <br>
                <h3 class="mb-0" style="color:#000">{{ activeSales }}</h3>
              </div>
              <card-line2-chart-example class="chart-wrapper px-3" style="height:55px;" height="55"/>
            </div>
          </div>
          <div class="col-sm-6  col-md-6 col-lg-3">
            <div class="card card-inverse" style="background-color:deepskyblue" >
              <div class="card-block pb-0">
                <div class="btn-group float-right">
                  <dropdown class="float-right" type="transparent p-0">
                  <i class="fa fa-hourglass-start" style="color:#000"></i>
                  <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </dropdown>
              </div>
              <header><h4><p style="color:#000"> Pending Sales</p></h4></header>
              <br>
              <h3 class="mb-0" style="color:#000">{{ pendingSales  }}</h3>
            </div>
            <card-line3-chart-example class="chart-wrapper" style="height:70px;" height="70"/>
          </div>
          </div>
        <div class="col-sm-6  col-md-6 col-lg-3">
            <div class="card card-inverse" style="background-color: #bd4147" >
              <div class="card-block pb-0">
                <div class="btn-group float-right">
                  <dropdown class="float-right" type="transparent p-0">
                  <i class="fa fa-tags" style="color: #000"></i>
                    <div slot="dropdown-menu" class="dropdown-menu dropdown-menu-right">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </dropdown>
                </div>
                <header><h4><p style="color:#000"> Validated Sales  </p></h4></header>
                <br>
                <h3 class="mb-0" style="color:#000">{{ validated }}</h3>
              </div>
              <card-line3-chart-example class="chart-wrapper" style="height:70px;" height="70"/>
            </div>
          </div>
    </div><!--/.row-->
<!-- End here -->
<br>
<br>
<br>
<div class="row" style="padding-left:1%;">
    <div class="card" style="width: 75%;">
      <div class="card-header">
        Sales
        <div class="card-actions">
          <a href="#" v-if="false"><i class="fa fa-refresh fa-spin"></i></a>
        </div>
      </div>
      <div class="card-block">
        <div class="row">
          <div class="col-sm-5">
            <div class="small text-muted" v-if="false">November 2016</div>
          </div><!--/.col-->
          <div class="col-sm-7 hidden-sm-down" v-if="false">
            <button type="button" class="btn btn-primary float-right"><i class="icon-cloud-download"></i></button>
            <div class="btn-toolbar float-right" role="toolbar" aria-label="Toolbar with button groups">
              <div class="btn-group mr-3" data-toggle="buttons" aria-label="First group">
                <label class="btn btn-outline-secondary">
                  <input type="radio" name="options" id="option1"> Day
                </label>
                <label class="btn btn-outline-secondary active">
                  <input type="radio" name="options" id="option2" checked> Month
                </label>
                <label class="btn btn-outline-secondary">
                  <input type="radio" name="options" id="option3"> Year
                </label>
              </div>
            </div>
          </div><!--/.col-->
        </div><!--/.row-->
        <line-chart  :options="{responsive: false, maintainAspectRatio: false}" :height="450" :margin-top="40"></line-chart>

      </div>
      <div class="card-footer" v-if="false">
        <ul>
          <li>
            <div class="text-muted">Visits</div>
            <strong>29.703 Users (40%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-success" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">Unique</div>
            <strong>24.093 Users (20%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-info" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li>
            <div class="text-muted">Pageviews</div>
            <strong>78.706 Views (60%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">New Users</div>
            <strong>22.123 Users (80%)</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar bg-danger" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
          <li class="hidden-sm-down">
            <div class="text-muted">Bounce Rate</div>
            <strong>40.15%</strong>
            <div class="progress progress-xs mt-2">
              <div class="progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </li>
        </ul>
      </div>
    </div><!--/.card-->
</div>

  </div>

</template>


<script>
    import util from '../../common/js/util'
    import { getSumSales, getTotalActiveSales, getTotalPendingSales, getTotalValidatedSales } from '../../api/api';
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
  export default {
    name: 'sumSale',

    component: {
     "icon": require("vue-icons/icon")
   },

    data () {
      return {
        sumSale: [],
        activeSales: [],
        pendingSales: [],
        validated: [],

      }
    },
    methods: {
      getSumSales () {
        getSumSales().then((res) => {
          this.sumSale = res.data.data;
        }).catch((e) => {
          // TODO
          console.log(e.message)
        })
      },

      getTotalActiveSales () {
        getTotalActiveSales({}).then((res) => {
          this.activeSales = res.data.data;
        }).catch((e) => {
          // TODO
          console.log(e.message)
        })
      },
      getTotalPendingSales () {
        getTotalPendingSales({}).then((res) => {
          this.pendingSales = res.data.data;
        }).catch((e) => {
          //
          console.log(e.message)
        })
      },
      getTotalValidatedSales () {
        getTotalValidatedSales({}).then((res) => {
          this.validated = res.data.data;
        }).catch((e) => {
          //
          console.log(e.message)
        })
      },
    },
    mounted () {
      this.getSumSales()
      this.getTotalActiveSales()
      this.getTotalPendingSales()
      this.getTotalValidatedSales()
    }
  }
</script>
