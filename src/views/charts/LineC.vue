<script>
import { Line } from 'vue-chartjs'
import { showdata } from  '../../api/api';
function convertHex (hex, opacity) {
  hex = hex.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  const result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')'
  return result
}

export default Line.extend({
  props: ['height'],
  data () {
    return {
      data: [],
      labels: [],
      datasets: []
    }
  },
  methods: {
    getRandomColor () {
      var letters = '0123456789ABCDEF'
      var color = '#'
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    },
    showdata (data) {
    // TODO:
      this.labels = data.labels
      var datasets = data.datasets
      this.datasets = []
      for (let dataset of datasets) {
        var color = this.getRandomColor()
        var dataData = {
          label: dataset.title,
          backgroundColor: convertHex(color, 10),
          borderColor: color,
          pointHoverBackgroundColor: '#fff',
          borderWidth: 2,
          data: dataset.data
        }
        this.datasets.push(dataData)
      }
      this.render()
    },
    render () {
      this.renderChart({
        labels: this.labels,
        datasets: this.datasets
      }, {
        maintainAspectRatio: false,
        legend: {
          display: true
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 100,
              stepSize: Math.ceil(1500 / 5),
              max: 1500
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      })
    },
    getChartData () {
      showdata().then((res) => {
        this.data = res.data
      })
    }

  },
  watch: {
    'data': function () {
      this.showdata(this.data)
    }
  },
  mounted () {
    this.getChartData()
  }
})
</script>
