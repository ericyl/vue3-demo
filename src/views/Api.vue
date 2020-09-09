<template>
  <div>{{ content }}</div>
  <button @click="fetchDog">获取数据</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { dog } from "@/axios";

export default defineComponent({
  setup() {
    const content = ref("");
    const fetchDog = async () => {
      try {
        const result = await dog();
        content.value = result.content;
      } catch (error) {
        alert(`错误信息: ${error}`);
      }
    };
    fetchDog();
    return { content, fetchDog };
  }
});
</script>

<style scoped></style>
