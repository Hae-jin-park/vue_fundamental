<template>
  <div id="app">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-6 sm:m-3 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold text-center">computed 예제1</h1>
        {{ fullName }}
        <div class="flex flex-row">
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="fullName"
          />
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="lastName"
          />
          <input
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="firstName"
          />
        </div>
      </div>

      <div
        class="bg-white rounded-md m-6 sm:m-3 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold text-center">computed 예제2</h1>
        <div>
          <!--todoList 출력부 : ul, li 방식으로 출력-->검색 :
          <input
            type="text"
            class="form-control block w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="searchKeyword"
          />
          <ul
            class="bg-white rounded-lg border border-gray-200 w-full p-1 m-1 md:m-0 text-gray-900"
          >
            <li
              class="px-1 md:px-0 py-2 my-2 border-x border-y border-radius border-blue-600 w-full flex flex-row"
              v-for="item in filteredList"
              :key="item.value"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>
      </div>

      <div
        class="bg-white rounded-md m-6 sm:m-3 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold text-center">computed 예제2</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastName: "홍",
      firstName: "길동",
      searchKeyword: "",
      fruits: [
        { value: "apple", label: "사과" },
        { value: "orange", label: "오렌지" },
        { value: "banana", label: "바나나" },
        { value: "mango", label: "망고" },
      ],
    };
  },
  computed: {
    fullName: {
      set(value) {
        const fullNameSplit = value.split(" ");
        this.lastName = fullNameSplit[0];
        this.firstName = fullNameSplit[1];
      },
      get() {
        return `${this.lastName} ${this.firstName}`;
      },
    },

    //함수인데 변수처럼 쓰인다. li 태그 참고
    filteredList() {
      //원본데이터 변경없이 필터링 작업만 수행한다.
      return this.fruits.filter((fruit) =>
        fruit.label.includes(this.searchKeyword)
      );
    },

    //watch는 변경값 바로 감지
    watch: {},
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
