<template>
  <div id="app">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <img alt="Vue logo" src="./assets/logo.png" />
        <input type="text" class="border-blue-500" v-model="msg" />
        <br />
        <select
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          v-model="category1"
        >
          <option
            v-for="item in categoryList1"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
        <br />
        <select
          class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        >
          <option
            v-for="item in categoryList2"
            :key="item.value"
            :value="item.value"
          >
            {{ item.label }}
          </option>
        </select>
        <br />

        <input type="text" class="border-blue-500" v-model="msg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      categoryList1: [
        { value: "IT", label: "IT직군" },
        { value: "건설", label: "건설" },
      ],
      category1: "IT",
      categoryList2: [],

      ITList: [
        { value: "sw", label: "S/W개발" },
        { value: "publisher", label: "웹퍼블리셔" },
      ],
      ItListSelect: "",
      constructorList: [
        { value: "blueprint", label: "도면작성" },
        { value: "quality", label: "품질관리" },
      ],
      constructorSelect: "",
    };
  },
  watch: {
    msg: function (value, oldValue) {
      console.log(value, oldValue);
    },
    category1: {
      immediate: true,
      handler: function (value) {
        if (value === "IT") {
          this.categoryList2 = this.ITList;
        } else if (value === "건설") {
          this.categoryList2 = this.constructorList;
        } else {
          this.categoryList2 = [];
        }
      },
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
