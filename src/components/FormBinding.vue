<template>
  <div id="main_container">
    <div class="grid grid-cols-1 text-center">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-center text-3xl">라디오</h1>
        <p>
          <input type="radio" v-model="radio" :value="apple" />
          {{ apple }}
          <input type="radio" v-model="radio" :value="orange" />
          {{ orange }}
          <input type="radio" v-model="radio" :value="grape" />
          {{ grape }}
          <input type="radio" v-model="radio" :value="peach" />
          {{ peach }}
        </p>
        <p>select : {{ radio }}</p>
      </div>
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <img :src="imgSrc" :alt="imgAlt" />
      </div>
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <p :class="classType">안녕하십니까?</p>
        <button @click="classType = 'blue'">to blue</button>
        <button @click="classType = 'bold'">to Bold</button>
        <button @click="classType = 'italic'">to italic</button>
      </div>
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <p :class="{ bold: bold, italic: italic, blue: blue }">안녕하십니까?</p>
        <button
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="blue = !blue"
        >
          to blue
        </button>
        <button
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="bold = !bold"
        >
          to Bold
        </button>
        <button
          class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          @click="italic = !italic"
        >
          to italic
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: "",
      apple: "사과",
      orange: "오렌지",
      grape: "포도",
      peach: "복숭아",
      imgSrc: "@assets/logo.png",
      imgAlt: "vue.js Logo",
      classType: "",
      bold: false,
      italic: false,
      blue: false,
    };
  },
};
</script>

<style>
.blue {
  color: blue;
}
.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
</style>
