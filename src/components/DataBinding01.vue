<template>
  <div>
    <div id="main_container">
      <div class="grid grid-cols-2">
        <div
          class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
        >
          <h2 class="tracking-widest text-xs mb-1">CATEGORY</h2>
          <h1 class="title-font text-lg text-orange-700 mb-3">
            {{ firstMsg }}
          </h1>
          <p class="leading-relaxed text-sm mb-3">{{ firstDetail }}</p>
        </div>
        <div
          class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
        >
          <h2 class="tracking-widest text-xs mb-1">CATEGORY</h2>
          <h1 class="title-font text-lg text-orange-700 mb-3">
            {{ firstMsg }}
          </h1>
          <p class="leading-relaxed text-sm mb-3">{{ secondDetail }}</p>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div
          class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
        >
          <h2 class="tracking-widest text-xs mb-1">CATEGORY</h2>
          <h1 class="title-font text-lg text-orange-700 mb-3">
            {{ secondMsg }}
          </h1>
          <div class="flex justify-center">
            <div class="mb-3 sm:w-16 md:w-64 xl:w-80">
              <select
                class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label="Default select example"
                v-model="select"
              >
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <p class="leading-relaxed text-5xl mb-3 p-4 text-center">
                {{ select }}
              </p>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
        >
          <h2 class="tracking-widest text-xs mb-1">CATEGORY</h2>
          <h1 class="title-font text-lg text-orange-700 mb-3">
            {{ secondMsg_02 }}
          </h1>
          <div class="flex justify-center">
            <div class="mb-3 xl:w-96">
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label inline-block mb-2 text-gray-700"
                    >Example label</label
                  >
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="msg"
                  />
                </div>
              </div>
              <p
                class="leading-relaxed lg:text-2xl xl:text-2xl sm:text-xs mb-3 p-4 text-center"
              >
                출력 : {{ msg }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1">
        <div
          class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
        >
          <h2 class="tracking-widest text-xs mb-1">CATEGORY</h2>
          <h1 class="title-font text-lg text-orange-700 mb-3">
            {{ twinBinding }}
          </h1>
          <div>
            <p>
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 // eslint-disable-next-line vue/valid-v-on focus:outline-none"
                v-on:input="inputImmediatelyMsg"
              />
            </p>
            <p class="leading-relaed text-2xl mb-3 p-4 text-center">
              출력 : {{ immediatelyMsg }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstMsg: "Welcome to Vue.js",
      secondMsg: "DataBinding Test01",
      secondMsg_02: "DataBinding Test02",
      twinBinding: "즉시 입력받아 표시",
      firstDetail:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar blandit nulla condimentum ultrices. Duis sagittis, nulla a gravida consectetur, massa ligula pellentesque diam, in malesuada libero elit sed purus. Praesent ante arcu, cursus sed sodales eget, tincidunt a arcu. Morbi quis mi vel ante interdum vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed et arcu ligula. Vivamus feugiat ligula in leo tempus, quis auctor sem faucibus. Duis purus sem, bibendum id tortor eu, iaculis commodo quam. Fusce porttitor sollicitudin ipsum a suscipit. Maecenas et libero molestie, pharetra mi a, eleifend lacus.",
      secondDetail:
        "Cras sed risus pulvinar, aliquet nisl a, gravida eros. Mauris aliquet magna et eros varius, ac dapibus augue consectetur. Curabitur hendrerit turpis purus, sit amet fringilla ligula congue et. Vestibulum lacinia, neque id consectetur luctus, arcu libero convallis ligula, id aliquam quam odio id nisi. Pellentesque egestas urna massa, sit amet tempus odio tempus vitae. Cras metus velit, iaculis sit amet auctor a, iaculis nec lectus. Ut tristique arcu lobortis turpis tempor lacinia. In hac habitasse platea dictumst. Praesent ornare massa vel odio gravida, bibendum rhoncus nisi convallis.",
      select: "",
      msg: "",
      immediatelyMsg: "",
    };
  },
  methods: {
    inputImmediatelyMsg(event) {
      this.immediatelyMsg = event.target.value;
    },
  },
};
</script>

<style></style>
