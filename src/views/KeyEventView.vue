<template>
  <div id="main_container">
    <div class="grid grid-cols-1">
      <div
        class="bg-white rounded-md m-10 px-4 py-4 border-2 border-emerald-600"
      >
        <p>
          <input
            type="text"
            class="form-control block w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            @keyup="handleEvent('keyup', $event)"
          />
        </p>

        <p>
          <input
            type="text"
            class="form-control block w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            @keydown="handleEvent('keydown', $event)"
          />
        </p>

        <p>
          <input
            type="text"
            class="form-control block w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            @keypress="handleEvent('keypress', $event)"
          />
        </p>

        <hr />
        <p>
          <input
            type="text"
            class="form-control block w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            @keyup.enter="handleEventForkeyUp('enter', $event)"
            @keyup.up="handleEventForkeyUp('up', $event)"
            @keyup.down="handleEventForkeyUp('down', $event)"
            @keyup.left="handleEventForkeyUp('left', $event)"
            @keyup.right="handleEventForkeyUp('right', $event)"
            @keyup.delete="handleEventForkeyUp('delete, backspace', $event)"
            @keyup.esc="handleEventForkeyUp('esc', $event)"
            @keyup.space="handleEventForkeyUp('space', $event)"
          />
          <input
            type="text"
            class="form-control block w-52 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            @keyup.ctrl.enter="handleEventForkeyUp('ctrl+enter', $event)"
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleEvent(eventName, e) {
      console.log(eventName, e.target.value);
    },
    handleEventForkeyUp(msg, e) {
      console.log(msg + ": " + e.target.value);
    },
  },
};
</script>

<style></style>
