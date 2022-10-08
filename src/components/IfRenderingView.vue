<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">
          IfRenderingView Example 1 : v-if문 (태그가 사라진다)
        </h1>
        <p id="p1" v-if="renderType === 1">현재 renderType은 1입니다.</p>
        <p id="p2" v-else-if="renderType === 2">현재 renderType은 2입니다.</p>
        <p id="p3" v-else>현재 renderType : {{ renderType }}</p>
        <p>
          <input
            type="number"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model.number="renderType"
          />
        </p>
      </div>
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">
          IfRenderingView Example 2 : v-show문 (DOM에서는 살아있다.)
        </h1>
        <p v-show="renderTypeShow === 1">
          현재 renderType은 1입니다.
          <input
            type="number"
            class="form-control block w-20 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </p>
        <p v-show="renderTypeShow === 2">
          현재 renderType은 2입니다.
          <input
            type="number"
            class="form-control block w-20 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          />
        </p>
        <p>
          <input
            type="number"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model.number="renderTypeShow"
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
      renderType: 1,
      renderTypeShow: 1,
    };
  },
};
</script>

<style></style>
