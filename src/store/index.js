import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather:[],
    Temperature:[],
    Humidity:[],
    Pressure:[],
    LightIntensity:[],
    Rainfall:[],
    channel:{},
    date:[],
    current:{}
  },
  getters: {
    getWeatherData:(state)=>state.weather,
    getTemperature:(state)=>state.Temperature,
    getHumidity:(state)=>state.Humidity,
    getPressure:(state)=>state.Pressure,
    getLightIntensity:(state)=>state.LightIntensity,
    getRainfall:(state)=>state.Rainfall,
    getChannel:(state)=>state.channel,
    getdate:(state)=>state.date,
    getcurrent:(state)=>state.current
  },
  mutations: {
    
    fetchweather(state,payload){
     
      state.channel = payload.channel
      state.current = payload.feeds[payload.feeds.length-1]
      // //console.log(JSON.stringify(state.current))
      // for(let member in state.current){
        
      //     if(!state.current[member+1]!=null){
      //       i++
      //        state.current = payload.feeds[payload.feeds.length-i]
      //     }
          
      // }
      payload.feeds.forEach(element => {
           state.date.push(element.created_at.substring(0,11))
           state.Temperature.push(element.field1)
           state.Humidity.push(element.field2)
           state.Pressure.push(element.field3)
           state.LightIntensity.push(element.field4)
           state.Rainfall.push(element.field5)          
           state.weather.push(element)
      });
    }
  },
  actions: {
    async getWeather({commit}){
      const response = await fetch('https://api.thingspeak.com/channels/2336821/feeds.json')
        const weather = await response.json()
      commit('fetchweather',weather);
     },
  },
   
})
