<template>
  <div :key="renderWeatherKey">
    <LineChartGenerator
    :chart-options="chartOptions"
    :chart-data="chartData"
    :chart-id="chartId"
    :dataset-id-key="datasetIdKey"
    :plugins="plugins"
    :css-classes="cssClasses"
    :styles="styles"
    :width="width"
    :height="height"
  />
  </div>

</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
)

export default {
  name: 'LineChart',
  components: {
    LineChartGenerator
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      polling:null,
      renderWeatherKey:0,
      lastNumber:null,
      chartData: {
        labels: [
          //push dates here
          // 'January',
          // 'February',
          // 'March',
          // 'April',
          // 'May',
          // 'June',
          // 'July'
        ],
        datasets: [
            //push values field values here
            {
              label: 'Light Intensity',
              backgroundColor: '#f08080',
              data: []
            }
          ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  methods:{
async test(){
      const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
      const movies = await response.json()
        //console.log(movies) 
       for(let feed of movies.feeds){
          //console.log(feed.created_at)
          let result = feed.created_at.substring(0, 11);
          this.chartData.labels.push(result)
         this.chartData.datasets[0].data.push(feed.field4)
        //console.log(feed.field1)  
      }
      //console.log(this.chartData.datasets[0].data)
 },
 async getLast(){
  const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
  const movies = await response.json()
  this.lastNumber = movies.channel.last_entry_id
   //console.log(this.lastNumber)
 },
},
mounted(){

 this.polling = setInterval(async ()=>{
  
  const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
      const movies = await response.json()
      let lastid = movies.channel.last_entry_id
      let item = this.chartData.datasets[0].data
      //console.log(item[99])
      if(movies.feeds[99].entry_id!=this.lastNumber){
        this.chartData.datasets[0].data.push(movies.feeds[99].field4)
        this.lastNumber = movies.feeds[99].entry_id
        this.renderWeatherKey++
      }
      
      
 },3000)
},
created(){
 this.getLast()
this.test()
//this.lastEntry()
}
}
</script>

















































<!-- <template>
    <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </template>
  
  <script>
  import { Line as LineChartGenerator } from 'vue-chartjs/legacy'
  
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  } from 'chart.js'
  
  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  )
  
  export default {
    name: 'LineChart',
    components: {
      LineChartGenerator
    },
    props: {
      chartId: {
        type: String,
        default: 'line-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 100
      },
      height: {
        type: Number,
        default: 400
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        chartData: {
          labels: [
            //push dates here
            // 'January',
            // 'February',
            // 'March',
            // 'April',
            // 'May',
            // 'June',
            // 'July'
          ],
          datasets: [
            //push values field values here
            {
              label: 'Light Intensity',
              backgroundColor: '#f08080',
              data: []
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    methods:{
async test(){
        const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
        const movies = await response.json()
         // console.log(movies) 
         for(let feed of movies.feeds){
            //console.log(feed.created_at)
            let result = feed.created_at.substring(0, 11);
            this.chartData.labels.push(result)
           this.chartData.datasets[0].data.push(feed.field4)
          //console.log(feed.field1)  
        }
        //console.log(this.chartData.datasets[0].data)
        
       
   }
},
created(){

this.test()
//this.lastEntry()
}
  }
  </script>
   -->