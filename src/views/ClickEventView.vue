<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <p>{{ msg }}</p>
        <button
          class="form-control block w-50 px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-sky-700 focus:border-blue-600 focus:outline-none"
          v-on:click="msg = 'Bonjour~'"
        >
          In France
        </button>
        <button
          class="form-control block w-50 px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-sky-700 focus:border-blue-600 focus:outline-none"
          @click="click('hello~')"
        >
          In English
        </button>
      </div>
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600 text-center"
      >
        <p>{{ counter }}</p>
        <button
          class="form-control block w-50 px-3 py-1.5 text-base font-normal mx-auto text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          v-on:click="counter++"
        >
          Add
        </button>
        <button
          class="form-control block w-50 px-3 py-1.5 text-base font-normal mx-auto text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          v-on:click="counter--"
        >
          Minus
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello를 불어로 하면?",
      counter: 0,
    };
  },
  methods: {
    click(value) {
      this.msg = value;
    },
  },
};
</script>

<style></style>
