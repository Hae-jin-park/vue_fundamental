<template>
  <div>
    <div ref="rDiv">{{ message }}</div>
    <p>
      <input
        type="text"
        class="form-control block w-96 m-auto px-3 py-1.5 my-9 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        id="exampleFormControlInput1"
        @input="changeMessage"
      />
    </p>
    <button
      type="button"
      @click="changeInputText"
      class="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      Primary
    </button>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      message: "Hello World!!",
      inputText: "",
    };
  },

  methods: {
    changeMessage(e) {
      this.inputText = e.target.value;
    },

    changeInputText() {
      this.message = this.inputText;
    },
  },

  beforeCreate() {
    console.log("beforeCreate", this.message);
  },

  created() {
    console.log("created", this.message);
  },

  beforeMount() {
    console.log("beforeMount", this.message);
  },

  mounted() {
    console.log("mounted", this.message, this.$refs.rDiv.innerText);
  },

  beforeUpdate() {
    console.log("beforeUpdate", this.$refs.rDiv.innerText);
  },

  updated() {
    console.log("updated", this.$refs.rDiv.innerText);
  },

  beforeUnmount() {
    console.log("beforeUnmount", this.$refs.rDiv.innerText);
  },

  unmounted() {
    console.log("unmounted", this.$refs.rDiv, this.inputText);
  },
};
</script>
