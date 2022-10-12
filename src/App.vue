<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <WatchComp />
  </div>
</template>

<script>
import WatchComp from "./components/WatchComp.vue";
export default {
  name: "App",
  components: {
    WatchComp,
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
