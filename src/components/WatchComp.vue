<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <p>
          값을 입력하세요 :
          <input
            type="text"
            v-model="msg"
            class="form-control block w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  watch: {
    msg: function (value, oldValue) {
      console.log("msg 값 변경 : ", oldValue, value);
    },
  },
};
</script>

<style></style>
