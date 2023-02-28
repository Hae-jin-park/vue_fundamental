<template>
  <div id="app">
    <!--<ListRendering />-->

    <!--<FormBinding />-->
    <!-- <IfRenderingView /> -->
    <!-- <TodoList /> -->
    <idCard />
  </div>
</template>

<script>
//import ListRendering from "./components/ListRendering.vue";

//import DataBinding01 from "./components/DataBinding01.vue";
//dimport FormBinding from "./components/FormBinding.vue";
// import IfRenderingView from "./components/IfRenderingView.vue";
// import TodoList from "./views/TodoList.vue";
import idCard from "./views/idCard.vue";
export default {
  name: "App",
  components: {
    //DataBinding01,
    //ListRendering,
    //FormBinding,
    // IfRenderingView,
    // TodoList,
    idCard,
  },
};
</script>

<style></style>
