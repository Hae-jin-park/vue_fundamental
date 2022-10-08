<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">ListRendering Example1 : Array</h1>
        <ul
          class="bg-white rounded-lg border border-gray-200 w-full text-gray-900"
        >
          <li
            class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
            v-for="(item, index) in fruits"
            :key="item"
          >
            {{ index + 1 }} | {{ item.text }}
            <input
              type="text"
              v-model="item.text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </li>
        </ul>
      </div>

      <!--List Rendering for Obj-->
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">ListRendering Example2 : Object</h1>
        <ul
          class="bg-white rounded-lg border border-gray-200 w-full text-gray-900"
        >
          <li
            class="px-6 py-2 border-b border-gray-200 w-full rounded-t-lg"
            v-for="(value, key) in fruits2"
            :key="key"
          >
            {{ value }} | {{ key }} | {{ index }}
            <input
              type="text"
              v-model="fruits2[key]"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruits: [
        { key: 1, text: "사과" },
        { key: 2, text: "오렌지" },
        { key: 3, text: "복숭아" },
        { key: 4, text: "포도" },
      ],
      fruits2: {
        apple: "사과",
        orange: "오렌지",
        grape: "포도",
        mango: "망고",
      },
      list_data: {
        20221008: { id: 1, name: "홍길동" },
        20221009: { id: 2, name: "유지은" },
      },
    };
  },
  updated() {
    console.log("fruits", this.fruits);
  },
};
</script>

<style></style>
