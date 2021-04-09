<template>
  <div class="absolute bottom-0">
    <nav class="bg-gray-800 h-10 w-screen">
      <div class="grid grid-cols-3 gap-4 h-full">
        <div class="text-white text-left ml-0">
          <button
            class="bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-1 focus:ring-red-600 focus:ring-opacity-50 px-1 rounded h-full"
            @click="openStartMenu"
          >
            Menu
          </button>
        </div>
        <div class="text-white">1</div>
        <div class="text-white my-auto flex justify-end mr-5">
          {{ clock }}
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../../store/store";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      clock: new Date(),
      visibility: {
        startMenu: false,
      },
    };
  },
  methods: {
    openStartMenu() {
      console.log("start menu:", this.visibility.startMenu);
      this.visibility.startMenu = !this.visibility.startMenu;
      store.commit("changeVisibility", {
        name: "startMenu",
        status: !store.state.visibility.startMenu,
      });
    },
  },
});
</script>


<style scoped>
</style>