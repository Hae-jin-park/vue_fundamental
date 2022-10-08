<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <!--<ListRendering />-->

    <!--<FormBinding />-->
    <IfRenderingView />
  </div>
</template>

<script>
//import ListRendering from "./components/ListRendering.vue";

//import DataBinding01 from "./components/DataBinding01.vue";
//dimport FormBinding from "./components/FormBinding.vue";
import IfRenderingView from "./components/IfRenderingView.vue";
export default {
  name: "App",
  components: {
    //DataBinding01,
    //ListRendering,
    //FormBinding,
    IfRenderingView,
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
