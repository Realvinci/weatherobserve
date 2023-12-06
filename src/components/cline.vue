<template>
    <div>
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
    <p>{{ current }}</p>
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
  import { mapActions, mapGetters } from 'vuex'
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
        change:false,
        tempdata:[],
        polling: null,
        lastentry:null,
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
              label: 'Temperature',
              backgroundColor: '#f87979',
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
        async lastNumber(){
    const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
    const movies = await response.json()
     this.lastNumber = movies.feeds.length
      return this.lastNumber
    //   //this.lastEntryid = movies.channel.last_entry_id
    //   this.lastEntryid = 76
    //   console.log(movies)
    //   console.log(this.lastEntryid)
    //   for(let feed of movies.feeds){
    //       if(this.lastEntryid === feed.entry_id){
    //           Object.assign(this.current,feed)  
    //         //console.log(this.current)
    //       }
    //   }
   },
    
async test(){
        
        
        this.chartData.datasets[0].data = this.Temperature
        this.chartData.labels = this.date
        
   }, 
   ...mapActions(['getWeather']),
   async pollData () {
        const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
        const movies = await response.json()
         if(movies.feeds.length>this.lastNumber){
          this.polling = setInterval(() => {
			this.getWeather()
		}, 3000)
         }
		
	}
},
computed:{
 current(){
   return this.$store.getters.getcurrent
 },
 Temperature(){
    return this.$store.getters.getTemperature
 },
 date(){
    return this.$store.getters.getdate
 }
  
},
beforeDestroy () {
	clearInterval(this.polling)
},

created(){
this.lastNumber()
this.test()

//this.getWeather()
this.pollData()
},

  }
  </script>
  
///check id number and find out for update  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
<!--   
  
  
  <template>
  <ul>
    <li v-for="(item, i) in getWeatherData" :key="i">
      {{ item }}
    </li>
    <p>{{ getChannel }}</p>
    <h1>Temperature</h1>
    <li v-for="(item,i) in getTemperature" :key="i">
        {{ item }}
    </li>
  </ul>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    computed: {
    ...mapGetters({
      dataList: 'data',
      loading: 'loading',
    
    })
  },
  methods: {
    ...mapActions(['getWeather']),
  },
  computed:{
...mapGetters(['getWeatherData','getChannel','getTemperature'])
},
mounted () {
   this.getWeather()
}

//or


}
</script>

<style>

</style> -->