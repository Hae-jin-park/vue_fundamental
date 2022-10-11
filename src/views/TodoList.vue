<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-2 sm:m-3 px-4 py-4 border-2 border-emerald-600"
      >
        <!--Todo 신규 입력 부분 -->
        <h1 class="text-3xl font-bold text-center">TODO List</h1>
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

        <div>
          <!--todoList 출력부 : ul, li 방식으로 출력-->
          <ul
            class="bg-white rounded-lg border border-gray-200 w-full p-1 m-1 md:m-0 text-gray-900"
          >
            <li
              class="px-1 md:px-0 py-2 border-x border-y border-gray-200 w-full flex flex-row"
              v-for="(todo, index) in todoList"
              :key="index"
            >
              <div class="w-1/12">
                <!--NEW 표기부분-->
                <p class="hidden">{{ todo.updateMode }}</p>
                <img
                  class="h-6 mx-auto"
                  src="../assets/new_icon.png"
                  v-show="
                    todo.createdAt.getTime() + 1000 * 10 > new Date().getTime()
                  "
                />
              </div>
              <div class="w-full">
                <!--todo Comment 부분 -->
                <p v-show="todo.updateMode === false">{{ todo.comment }}</p>
                <p v-show="todo.updateMode === true">
                  <input
                    type="text"
                    class="form-control block w-11/12 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    ref="input_ref2"
                    v-model="todo.comment"
                    @keyup.esc="discardChange(index)"
                    @keyup.enter="updateTodo(index)"
                  />
                </p>
              </div>
              <div class="w-3/12 sm:w-1/12">
                <!--수정버튼-->
                <p v-show="todo.updateMode === false">
                  <button
                    class="form-control block text-base font-normal w-full sm:w-full p-1 mx-auto text-white bg-orange-400 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-orange-400 focus:border-blue-600 focus:outline-none"
                    @click="updateSwitch(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/edit.png" />
                  </button>
                </p>
                <p v-show="todo.updateMode === true">
                  <button
                    class="form-control block text-base font-normal w-full sm:w-full p-1 mx-auto text-white bg-green-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-green-600 focus:border-blue-600 focus:outline-none"
                    @click="updateTodo(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/check.png" />
                  </button>
                </p>
              </div>
              <div class="w-3/12 sm:w-1/12">
                <!--삭제버튼-->
                <p v-show="todo.updateMode === false">
                  <button
                    class="form-control block text-base font-normal w-full sm:w-full p-1 mx-auto text-white bg-red-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-red-600 focus:border-blue-600 focus:outline-none"
                    @click="deleteTodo(index)"
                  >
                    <img class="h-4 mx-auto" src="../assets/bin.png" />
                  </button>
                </p>
                <p v-show="todo.updateMode === true">
                  <button
                    class="form-control block text-base font-normal sm:w-full w-full p-1 mx-auto text-white bg-red-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-white focus:bg-red-600 focus:border-blue-600 focus:outline-none"
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
              <!--비어있을 경우 아래 메시지를 표시.-->
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
    };
  },

  methods: {
    apply() {
      if (!this.comment) {
        //입력란이 비어있는 상태에서 이 함수를 실행할 경우 push작업을 하지 않는다.
        alert("내용을 입력하세요.");
        this.$refs.input_ref.focus();
        return;
      }
      this.todoList.push({
        updateMode: false, //수정모드인 경우 true, 아니면 false.
        comment: this.comment,
        createdAt: new Date(),
        ex_comment: "", //수정모드에서 취소버튼 누르면 기존값을 저장하는 임시변수.
      });
      this.todoList.sort(function (a, b) {
        // 최근 등록된 일자 기준으로 a-b는 오름차순, b-a는 내림차순.
        return b.createdAt - a.createdAt;
      });
      this.comment = ""; //새 글이 등록되면 기존 입력란을 비워준다.
    },
    deleteTodo(index) {
      if (
        confirm("Are you sure you want to delete No, " + index + " comment?")
      ) {
        this.todoList.splice(index, 1); //삭제작업.
      }
    },
    updateSwitch(index) {
      this.todoList[index].updateMode = true; //updateMode가 true면 v-show를 통해 수정을 위한 textbox가 보여진다.
      this.todoList[index].ex_comment = this.todoList[index].comment; //ex_comment 임시변수에 기존 내용 저장.
    },
    updateTodo(index) {
      if (
        confirm("Are you sure you want to update No, " + index + " comment?")
      ) {
        this.todoList[index].updateMode = false; //update작업이 끝났으니 mode는 false.
      }
    },
    discardChange(index) {
      if (
        confirm(
          "No, " + index + " comment's change will be discarded. Proceed?"
        )
      ) {
        this.todoList[index].comment = this.todoList[index].ex_comment; //변경사항을 저장하지 않기에, ex_comment 임시변수의 값으로 되돌린다.
        this.todoList[index].updateMode = false;
      }
    },
  },
  created() {
    setInterval(() => {
      this.todoList = this.todoList.map((todo) => todo);
    }, 1500);
  },
};
</script>

<style>
.todoList {
  border: 1px;
}
</style>
