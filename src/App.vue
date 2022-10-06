<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <DataBinding01 />
  </div>
</template>

<script>
//import LifeCycle from "./components/LifeCycle.vue";
import DataBinding01 from "./components/DataBinding01.vue";

export default {
  name: "App",
  components: {
    DataBinding01,
  },
};
</script>

<style>
#app {
  font-family: Outfit, Noto Sans KR;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
