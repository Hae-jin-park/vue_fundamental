<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <ListRendering />

    <FormBinding />
  </div>
</template>

<script>
//import LifeCycle from "./components/LifeCycle.vue";

///import DataBinding01 from "./components/DataBinding01.vue";
import ListRendering from "./components/ListRendering.vue";

//import DataBinding01 from "./components/DataBinding01.vue";
import FormBinding from "./components/FormBinding.vue";
export default {
  name: "App",
  components: {
    //DataBinding01,
    ListRendering,
    FormBinding,
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
