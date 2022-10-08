<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">ChangeEventView(Devtool로 확인~)</h1>
        <select
          class="form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          :value="selectedValue"
          @change="changeSelect"
        >
          <option value="apple">사과</option>
          <option value="orange">오렌지</option>
          <option value="mango">망고</option>
          <option value="grape">포도</option>
        </select>
      </div>
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">ChangeText (한글 즉시변화여부 확인)</h1>
        <input type="text" :value="text" @input="changeText($event)" />
        <br />
        <input type="text" v-model="text" />
        <br />
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedValue: "",
    };
  },
  methods: {
    changeSelect(e) {
      console.log(e.target.value);
      this.selectedValue = e.target.value;
    },
    changeText(e) {
      this.text = e.target.value;
    },
  },
};
</script>

<style></style>
