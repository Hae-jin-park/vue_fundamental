<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div id="map"></div>
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <h1 class="text-3xl font-bold">TODO List</h1>
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
            class="bg-white rounded-lg border border-gray-200 w-full p-1 text-gray-900 border-for-debug"
          >
            <li
              class="px-6 py-2 border-x border-y border-gray-200 w-full flex flex-row border-for-debug"
              v-for="(todo, index) in todoList"
              :key="index"
            >
              <div class="w-1/12 border-for-debug">
                <p class="hidden">{{ todo.renderTypeShow }}</p>
                <img
                  class="h-6"
                  src="../assets/new_icon.png"
                  v-show="
                    todo.createdAt.getTime() + 1000 * 10 > new Date().getTime()
                  "
                />
              </div>
              <div class="w-11/12 border-for-debug">
                <p class="border-for-debug" v-show="todo.renderTypeShow === 1">
                  {{ todo.comment }}
                </p>
                <input
                  v-show="todo.renderTypeShow === 0"
                  type="text"
                  class="form-control block w-11/12 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  v-model="todo.comment"
                />
              </div>
              <div class="w-1/12 border-for-debug">
                <img
                  v-show="todo.renderTypeShow === 1"
                  @click="updateSwitch(index)"
                  class="h-4 border-for-debug v-center"
                  src="../assets/edit.png"
                />
                <img
                  v-show="todo.renderTypeShow === 0"
                  @click="updateTodo(index)"
                  class="h-4 border-for-debug v-center"
                  src="../assets/check.png"
                />
              </div>
              <div class="w-1/12 border-for-debug">
                <img
                  v-show="todo.renderTypeShow === 1"
                  @click="deleteTodo(index)"
                  class="h-4 border-for-debug"
                  src="../assets/bin.png"
                />
              </div>
            </li>
            <li
              class="px-6 py-2 border-x border-y border-gray-200 w-full border-for-debug"
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
export default {
  name: "TodoList",
  data() {
    return {
      todoList: [],
      comment: "",
      locPosition: null,
    };
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      console.log("kakao api : ", window.kakao);
      this.initMap();
    } else {
      const script = document.createElement("script");
      script.onload = () => {
        console.log("kakao api : ", window.kakao);
        window.kakao.maps.load(this.initMap());
      };
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=" +
        process.env.VUE_APP_KAKAO_API_KEY +
        "&libraries=services";
      document.head.appendChild(script);
    }
  },
  methods: {
    initMap() {
      var lat = 0;
      var lng = 0;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          lat = position.coords.latitude;
          lng = position.coords.longitude;
          var latlng = new window.kakao.maps.LatLng(lat, lng);
          var geocoder = new window.kakao.maps.services.Geocoder();
          var callback = function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              console.log(result);
            }
          };
          geocoder.coord2Address(latlng.getLng(), latlng.getLat(), callback);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
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
      });
      this.comment = "";
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
.border-for-debug {
  border: 1px solid red;
}
.v-center {
  display: flex;
  align-items: center;
}
</style>
