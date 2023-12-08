<template>
  <div>
   <!-- <cline/> -->
  <HomeView/> 
   <!-- <Temperature/>
   <Humidity/>
   <Pressure/>
   <Light/>
   <Rainfall/> -->
  </div>

</template>

<script>
import HomeView from './views/HomeView.vue'
import cline from './components/cline.vue';
// import Temperature from './components/Temperature.vue';
// import Humidity from './components/Humidity.vue';
// import Pressure from './components/Pressure.vue';
// import Light from './components/Light.vue';
// import Rainfall from './components/Rainfall.vue';
export default {
  name: 'App',
  components: {
   HomeView,
   //cline
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
