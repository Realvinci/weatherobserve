<template>
  <div id="home">
    <div class="flex flex-col items-center justify-center w-screen min-h-screen text-gray-700 p-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">

<!-- Component Start -->
<div class="w-full md:w-full  bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
  <div class="flex justify-between" >
    <div class="flex flex-col" :key="renderWeatherKey">
      <span class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-6xl font-bold">{{current[0].field1}}°C</span>
      <span class="font-semibold mt-1 text-gray-500"></span>
    </div>
    <div v-if="current.field5==='0'">
      <svg class="h-24 w-24 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path d="M0 0h24v24H0V0z" fill="none"/>
      <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/>
    </svg>
    </div>
    <div v-else>
      <i class="fa-solid fa-cloud-rain r"></i>
    </div>
  </div>
  <div class="flex justify-between mt-12 md:mt-6">
    <div class="flex flex-col items-center">
      <span class="text-base sm:text-sm font-semibold text-lg">{{current[0].field1}}°C</span>
      
      <i class="fa-solid fa-temperature-quarter"></i>
      <span class="font-semibold mt-1 text-sm">Temperature</span>
     
    </div>
    <div class="flex flex-col items-center">
      <span class="font-semibold text-lg">{{current[0].field2}}%</span>
      <i class="fa-solid fa-droplet"></i>
      <span class="font-semibold mt-1 text-sm">Humidity</span>
    
    </div>
    <div class="flex flex-col items-center">
      <span class="font-semibold text-lg">{{current[0].field3}}mb</span>
      <i class="fa-solid fa-turn-down"></i>
      <span class="font-semibold mt-1 text-sm">Pressure</span>
      
    </div>
    <div class="flex flex-col items-center">
      <span class="font-semibold text-lg">{{current[0].field4}}Ω</span>
      <i class="fa-solid fa-cloud-sun"></i>
      <span class="font-semibold mt-1 text-sm">Light intensity</span>
      
    </div>
    <div class="flex flex-col items-center">
      <span class="font-semibold text-lg">{{ current[0].field5 }}</span>
      <i class="fa-solid fa-cloud-rain"></i>
      <span class="font-semibold mt-1 text-sm">Rainfall</span>
    </div>
  </div>
</div>

<div class="flex flex-col space-y-6 w-full md:w-full lg:w-full sm:w-auto bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
      <Temperature/>
</div>
<div class="flex flex-col space-y-6 w-full md:w-full lg:w-full sm:w-auto bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
  <Humidity/>
</div>
<div class="flex flex-col space-y-6 w-full md:w-full lg:w-full sm:w-auto bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
  <Pressure/>
</div>
<div class="flex flex-col space-y-6 w-full md:w-full lg:w-full sm:w-auto bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
  <Light/>
</div>
<div class="flex flex-col space-y-6 w-full md:w-full lg:w-full sm:w-auto bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
  <Rainfall/>
</div>

<div class="flex flex-col space-y-6 w-full  bg-white p-10 mt-10 rounded-xl ring-8 ring-white ring-opacity-40">
  <div class="flex justify-between items-center">
<!-- component -->
<div class="container p-2 mx-auto sm:p-4 dark:text-gray-100">
	<h2 class="mb-4 text-2xl font-semibold leading text-gray-900">Previous Data</h2>
	<div class="overflow-x-auto overflow-y-auto" style="height: 50vh;">
		<table class="min-w-full text-xs">
			<colgroup>
				<col>
				<col>
				<col>
				<col>
				<!-- <col> -->
				<col class="w-24">
			</colgroup>
			<thead class="dark:bg-gray-700 ">
				<tr class="text-left">
					<th class="p-3">Date</th>
					<th class="p-3">Temperature</th>
					<th class="p-3">Pressure</th>
					<th class="p-3">Humidity</th>
					<th class="p-3 ">Light</th>
					<th class="p-3">Rainfall</th>
				</tr>
			</thead>

			 <tbody> 
				<tr class="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900" v-for="(weather,index) in feeds">
					<td class="p-3">
						<p>{{ weather.created_at }}</p> 
            <!-- <p>{{ index }}</p> -->
					</td>
					<td class="p-3">
						<p>{{weather.field1}}°C</p>
					</td>
					<td class="p-3">
						<p>{{weather.field3}}mb</p>
					</td>
					<td class="p-3">
						<p>{{weather.field2}}%</p>
					</td>
					<td class="p-3 text-right">
						<p>{{weather.field4}}Ω</p>
					</td>
					<td class="p-3 text-right">
						<p>{{ weather.field5 }}</p>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
  </div>
</div>


</div>

  </div>
 
</template>

  
<script>
// import {app as app} from '../../firebase'
// import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { arrayUnion, getFirestore ,updateDoc} from "firebase/firestore";
// import { doc, setDoc,addDoc,collection } from "firebase/firestore"; 
// import axios from 'axios';
// const storage = getStorage(app);
// const db = getFirestore(app);

import Temperature from '../components/Temperature.vue';
import Humidity from '../components/Humidity.vue';
import Pressure from '../components/Pressure.vue';
import Light from '../components/Light.vue';
import Rainfall from '../components/Rainfall.vue';

import { mapActions, mapGetters } from 'vuex'
import { nextTick } from 'vue'
  export default {
    components: {
   Temperature,Humidity,Pressure,Light,Rainfall
  },
   name:'weather',
   data(){
      return{
        renderWeatherKey: 0,
        polling:null,
        weather:{
            channel:{},
            feeds:[]
        },
        weatherdata:[],
        current:[],
        feeds:[],
        lastEntryid:null,
        pressure:[],
        temperature:[],
        Humidity:[],
        Light:[],
        Rainfail:[],
        interval:null
      }
   },
   methods:{
    
async test(){
        const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
        const movies = await response.json()
        
        for(let feed of movies.feeds){
             this.feeds.push(feed)
        }
        for(let feed of movies.feeds){
            this.temperature.push(feed.field1)
            this.Humidity.push(feed.field2)
            this.pressure.push(feed.field3)
            this.Light.push(feed.field4)
            this.Rainfail.push(feed.field5)
        }
       // console.log(this.Humidity)
       
   },

   async lastEntry(){
    const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
    const movies = await response.json()
    this.lastEntryid = movies.channel.last_entry_id
     //console.log('This is the last entry',this.lastEntryid)
     movies.feeds.forEach(element => {
          if(element.entry_id === this.lastEntryid){
               this.current.push(element)
             console.log(element)
          }
     });
   },
  
   async pollData () {   
   // this.lastEntry()
    // const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
    // const movies = await response.json()
    // let currentid = movies.channel.last_entry_id
    
   

      this.polling = setInterval(this.lastEntry ,3000)
	},
  //a function that returns a new object last object and pushes it and updates the last number
    async currentdata(){
      const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
      const movies = await response.json()
      let lastid = movies.channel.last_entry_id
      movies.feeds.forEach(element=>{
          if(element.entry_id === lastid){
            //console.log(element)
            this.current.push(element)
             return element
          }
      })
    }		 
	
},
computed:{
...mapGetters['getcurrent'],
Temperature(){
  return this.$store.getters.getTemperature
},

date(){
  return this.$store.getters.getdate
}

},
mounted(){
  //this.lastEntry()
 // setInterval(()=>this.lastEntry(),3000)
 this.polling = setInterval(async ()=>{
  
  const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
      const movies = await response.json()
      let lastid = movies.channel.last_entry_id
      movies.feeds.forEach(element=>{
           if(element.entry_id ===lastid){
             // this.current[0] = { created_at: "2023-12-08T03:14:43Z", entry_id: 908, field1: "0", field2: "66.00", field3: "906.57", field4: "788", field5: "1" }
            this.current[0] = element
            this.renderWeatherKey++
          }
      })
      console.log('mutated the current',this.current[0])
 },3000)
},
created(){

//this.pollData()
this.test()
this.lastEntry()
},
  unmounted() {
    clearInterval(this.polling);
  }

  }
  </script>
  

<style scoped>
.r{
  font-size: 60px;
}
</style>
