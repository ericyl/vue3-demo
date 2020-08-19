<template>
  <div>OUTTER COUNT: {{ outterCount }}</div>
  <button @click="outterTest">ADD OUTTER</button>
  <div>Test: {{ test }}</div>
  <button @click="changeIt">Test</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

//composition
import test from "@/compositions/Test";

function outterFunction() {
  const outterCount = ref(1);
  const outterTest = () => {
    outterCount.value++;
  };
  return { outterCount, outterTest };
}

export default defineComponent({
  setup() {
    const { outterCount, outterTest } = outterFunction();
    return {
      outterCount,
      outterTest,
      ...test()
    };
  }
});
</script>

<style scoped></style>
