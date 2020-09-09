<template>
  <button @click="click">Plus</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import bus from "@/utils/bus";

export default defineComponent({
  setup() {
    const click = () => {
      bus.emit("plus");
    };
    return { click };
  }
});
</script>

<style scoped></style>
