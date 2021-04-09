<template>
  <div class="desktop relative">
    <navbar />
    <start-menu v-if="show" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "./system/Navbar.vue";
import StartMenu from "./system/StartMenu.vue";

export default defineComponent({
  components: { Navbar, StartMenu },
  name: "Desktop",
  data() {
    return {
      show: true,
    };
  },
});
</script>

<style scoped>
.desktop {
  background: url("/desktop.jpg");
  height: 100vh;
  width: 100vw;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>