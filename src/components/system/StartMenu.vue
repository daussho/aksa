<template>
  <div
    class="w-1/4 h-1/2 absolute bottom-12 bg-gray-800 left-2"
    v-if="state.visibility.startMenu"
  >
    asd
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { store } from "../../store/store";

export default defineComponent({
  setup() {},
  created() {
    console.log(this.state);
  },
  data() {
    return {
      state: store.state,
    };
  },
});
</script>


<style scoped>
</style>