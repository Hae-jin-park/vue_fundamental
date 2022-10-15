<template>
  <div id="app">
    {{ fullName }}<br />
    <input type="text" v-model="lastName" /><br />
    <input type="text" v-model="firstName" /><br />
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastName: "홍",
      firstName: "길동",
    };
  },
  computed: {
    fullName() {
      return this.lastName + this.firstName;
    },
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
