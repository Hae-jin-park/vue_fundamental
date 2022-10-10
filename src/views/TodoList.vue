<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">TODO List</h1>
        <div>{{ address }}</div>
        <div class="flex flex-row">
          <input
            type="text"
            class="form-control block w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-3 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            v-model="comment"
            ref="input_ref"
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
              class="px-6 py-2 border-x border-y border-gray-200 w-full flex flex-row"
              v-for="(todo, index) in todoList"
              :key="index"
            >
              <div class="w-1/12">
                <p class="hidden">{{ todo.renderTypeShow }}</p>
                <img
                  class="h-6"
                  src="../assets/new_icon.png"
                  v-show="
                    todo.createdAt.getTime() + 1000 * 10 > new Date().getTime()
                  "
                />
              </div>
              <div class="w-11/12">
                <p v-show="todo.renderTypeShow === 1">{{ todo.comment }}</p>
                <p v-show="todo.renderTypeShow === 0">
                  <input
                    type="text"
                    class="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    v-model="todo.comment"
                  />
                </p>
              </div>
              <div class="w-1/12">
                <p v-show="todo.renderTypeShow === 1">
                  <img
                    @click="updateSwitch(index)"
                    class="h-4"
                    src="../assets/edit.png"
                  />
                </p>
                <p v-show="todo.renderTypeShow === 0">
                  <img
                    @click="updateTodo(index)"
                    class="h-4"
                    src="../assets/check.png"
                  />
                </p>
              </div>
              <div class="w-1/12">
                <p v-show="todo.renderTypeShow === 1">
                  <img
                    @click="deleteTodo(index)"
                    class="h-4"
                    src="../assets/bin.png"
                  />
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
  data() {
    return {
      todoList: [],
      comment: "",
      address: "",
    };
  },
  mounted: function () {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.getStreetAddressFrom(
          position.coords.latitude,
          position.coords.longitude
        );
      },
      (error) => {
        console.log(error.message);
      }
    );
  },
  methods: {
    apply() {
      if (!this.comment) {
        alert("내용을 입력하세요.");
        this.$refs.input_ref.focus();
        return;
      }
      this.todoList.push({
        renderTypeShow: 1,
        comment: this.comment,
        createdAt: new Date(),
        address: this.address,
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
      this.todoList[index].renderTypeShow = 0;
    },
    updateTodo(index) {
      if (
        confirm("are you sure you want to update No, " + index + " comment?")
      ) {
        //this.comment = comment;
        console.log(this.comment);
        //this.todoList[index].comment = this.comment;
        this.todoList[index].renderTypeShow = 1;
      }
    },
    async getStreetAddressFrom(lat, long) {
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
          this.address = data.results[0].formatted_address;
        }
      } catch (error) {
        console.log(error.message);
      }
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
