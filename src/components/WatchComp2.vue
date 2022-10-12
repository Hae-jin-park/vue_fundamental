<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <p>
          값을 입력하세요 : {{ arrayToStr }}
          <button
            class="form-control block w-1/4 px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-white focus:bg-sky-700 focus:border-blue-600 focus:outline-none"
            @click="pushArr(1)"
          >
            나를 눌러보시오 ^^
          </button>
          <button
            class="form-control block w-1/4 px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-white focus:bg-sky-700 focus:border-blue-600 focus:outline-none"
            @click="pushArr(2)"
          >
            이것도 눌러보시오 ^^
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  computed: {
    arrayToStr() {
      return this.arr.toString();
    },
  },
  methods: {
    pushArr(val) {
      this.arr.push(val);
    },
  },
  watch: {
    arr: {
      deep: true,
      handler: function (value, oldValue) {
        console.log(value, oldValue);
      },
    },
  },
};
</script>

<style></style>
