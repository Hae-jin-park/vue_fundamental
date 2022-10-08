<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <!--<ListRendering />-->

    <!--<FormBinding />-->
    <!-- <ChangeEventView /> -->
    <!-- <KeyEventView /> -->
    <TodoList />
  </div>
</template>

<script>
//import ListRendering from "./components/ListRendering.vue";

//import DataBinding01 from "./components/DataBinding01.vue";
//dimport FormBinding from "./components/FormBinding.vue";
//import IfRenderingView from "./components/IfRenderingView.vue";
// import ClickEventView from "./views/ClickEventView.vue";
// import ChangeEventView from "./views/ChangeEventView.vue";
// import KeyEventView from "./views/KeyEventView.vue";
import TodoList from "./views/TodoList.vue";
export default {
  name: "App",
  components: {
    TodoList,
    // KeyEventView,
    // ChangeEventView,
    //DataBinding01,
    //ListRendering,
    //FormBinding,
    // ClickEventView,
    //IfRenderingView,
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
