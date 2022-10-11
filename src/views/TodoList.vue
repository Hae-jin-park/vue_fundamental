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
            @keyup.enter="apply"
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
                  class="h-6 mx-auto"
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
                    class="form-control block w-11/12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    ref="input_ref_2"
                    v-model="todo.comment"
                  />
                </p>
              </div>
              <div class="w-1/12">
                <p v-show="todo.renderTypeShow === 1">
                  <button
                    class="form-control block text-base font-normal w-auto p-1 mx-auto text-white bg-orange-400 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-orange-400 focus:border-blue-600 focus:outline-none"
                    @click="updateSwitch(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/edit.png" />
                  </button>
                </p>
                <p v-show="todo.renderTypeShow === 0">
                  <button
                    class="form-control block text-base font-normal w-auto p-1 mx-auto text-white bg-green-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-green-600 focus:border-blue-600 focus:outline-none"
                    @click="updateTodo(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/check.png" />
                  </button>
                </p>
              </div>
              <div class="w-1/12">
                <p v-show="todo.renderTypeShow === 1">
                  <button
                    class="form-control block text-base font-normal w-auto p-1 mx-auto text-white bg-red-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-red-600 focus:border-blue-600 focus:outline-none"
                    @click="deleteTodo(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/bin.png" />
                  </button>
                </p>
                <p v-show="todo.renderTypeShow === 0">
                  <button
                    class="form-control block text-base font-normal w-auto p-1 mx-auto text-white bg-red-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-red-600 focus:border-blue-600 focus:outline-none"
                    @click="discardChange(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/close.png" />
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
export default {
  data() {
    return {
      todoList: [],
      comment: "",
      address: "",
      ex_comment: "",
    };
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
        ex_comment: "",
      });
      this.todoList.sort(function (a, b) {
        return a.createdAt - b.createdAt;
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
      this.todoList[index].ex_comment = this.todoList[index].comment;
      console.log(this.ex_comment);

      this.$refs.input_ref_2.focus();
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
    discardChange(index) {
      if (
        confirm(
          "No, " + index + " comment's change will be discarded. Proceed?"
        )
      ) {
        this.todoList[index].comment = this.todoList[index].ex_comment;
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
</style>
