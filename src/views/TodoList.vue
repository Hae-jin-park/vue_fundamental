<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div :class="[blockClass]">
        <h1 class="text-3xl font-bold text-center">TODO List</h1>
        <div class="flex flex-row">
          <input
            type="text"
            readonly="readonly"
            class="form-control block w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="location"
            ref="input_ref"
            @keyup.enter="apply"
            placeholder="접속 위치"
          />
          <button
            class="form-control block w-1/4 px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-white focus:bg-sky-700 focus:border-blue-600 focus:outline-none"
            @click="locatorButtonPressed"
          >
            Your Location
          </button>
        </div>
        <div class="flex flex-row">
          <input
            type="text"
            class="form-control block w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="comment"
            ref="input_ref"
            @keyup.enter="apply"
            placeholder="todoList를 입력하시오~"
          />
          <button
            class="form-control block w-1/4 px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-white focus:bg-sky-700 focus:border-blue-600 focus:outline-none"
            @click="apply"
          >
            등록
          </button>
        </div>

        <div id="todoList-container">
          <ul
            class="bg-white rounded-lg border border-gray-200 w-full p-1 text-gray-900"
          >
            <li
              class="px-6 py-2 border-x border-y b-radius-30 my-4 border-blue-800 w-full flex flex-row"
              v-for="(todo, index) in todoList"
              :key="index"
            >
              <div class="w-1/12">
                <span class="hidden">
                  {{ todo.isUpdateMode }}{{ todo.createdAt }}
                </span>
                <img
                  class="h-6 v-align-middle-img"
                  src="../assets/new_icon.png"
                  v-show="
                    todo.createdAt.getTime() + 1000 * 10 > new Date().getTime()
                  "
                />
              </div>
              <div class="w-11/12">
                <span
                  class="m-auto v-align-middle-text"
                  v-show="todo.isUpdateMode === false"
                >
                  {{ todo.comment }} | {{ todo.location }}
                </span>
                <div class="v-align-middle-non-text">
                  <p v-show="todo.isUpdateMode === true">
                    <input
                      type="text"
                      class="form-control block w-auto text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:outline-none"
                      v-model="todo.comment"
                    />
                  </p>
                </div>
              </div>
              <div class="w-1/12">
                <p v-show="todo.isUpdateMode === false">
                  <button
                    class="form-control block w-auto px-3 py-1.5 text-base font-normal text-white bg-orange-500 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-orange-500 focus:outline-none"
                    @click="updateSwitch(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/edit.png" />
                  </button>
                </p>
                <p v-show="todo.isUpdateMode === true">
                  <button
                    class="form-control block w-auto px-3 py-1.5 text-base font-normal text-white bg-sky-700 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-sky-700 focus:outline-none"
                    @click="updateTodo(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/check.png" />
                  </button>
                </p>
              </div>
              <div class="w-1/12">
                <p v-show="todo.isUpdateMode === false">
                  <button
                    class="form-control block w-auto px-3 py-1.5 text-base font-normal text-white bg-red-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-red-600 focus:outline-none"
                    @click="deleteTodo(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/bin.png" />
                  </button>
                </p>
              </div>
            </li>
            <li
              class="px-6 py-2 border-x border-y border-gray-200 w-full"
              v-if="todoList.length === 0"
            >
              comment를 입력하세요.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  /* mounted() {
    if (window.kakao && window.kakao.maps) {
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => kakao.maps.load(this.initMap);
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=" +
        process.env.VUE_APP_KAKAO_API_KEY;
      document.head.appendChild(script);
    }
  }, */
  data() {
    return {
      todoList: [],
      comment: "",
      location: "",
      blockClass:
        "bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600",
    };
  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getStreetAddress(
            position.coords.latitude,
            position.coords.longitude
          );
          /* this.location = this.kakao.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          ); */

          console.log(this.location);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    async getStreetAddress(lat, long) {
      try {
        var { data } = await axios.get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=" +
            process.env.VUE_APP_API_KEY +
            "&language=ko"
        );
        if (data.error_message) {
          console.log(data.error_message);
        } else {
          console.log(data.results[0].formatted_address);
          this.location = data.results[0].formatted_address;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    apply() {
      if (!this.comment) {
        alert("내용을 입력하세요.");
        this.$refs.input_ref.focus();
        return;
      }
      this.todoList.push({
        isUpdateMode: false,
        comment: this.comment,
        createdAt: new Date(),
        location: this.location,
      });
      this.comment = "";
      console.log(this.todoList);
    },
    deleteTodo(index) {
      if (
        confirm("are you sure you want to delete No, " + index + " comment?")
      ) {
        this.todoList.splice(index, 1);
      }
    },
    updateSwitch(index) {
      this.todoList[index].isUpdateMode = 0;
    },
    updateTodo(index) {
      if (
        confirm("are you sure you want to update No, " + index + " comment?")
      ) {
        this.todoList[index].isUpdateMode = 1;
      }
    },
    cleanLS() {
      window.localStorage.clear();
      console.log("storage cleared...");
    },
  },
  created() {
    setInterval(() => {
      this.todoList = this.todoList.map((todo) => todo);
    }, 2000);
  },
};
</script>

<style>
.todoList {
  border: 1px;
}
</style>
