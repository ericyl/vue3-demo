<template>
  <div>{{ value }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import bus from "@/utils/bus";

export default defineComponent({
  setup() {
    const value = ref(0);
    bus.on("plus", () => {
      value.value++;
    });
    return { value };
  }
});
</script>

<style scoped></style>
