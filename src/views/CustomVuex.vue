<template>
  <div>{{ id }}</div>
  <button @click="change1">Change1</button>
  <button @click="change2">Change2</button>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const id = computed(() => {
      return store.state.module.id;
    });

    const change1 = () => {
      store.dispatch("module/setId", "test1");
    };

    const change2 = () => {
      store.commit("module/SET_ID", "test2");
    };
    return { id, change1, change2 };
  }
});
</script>

<style scoped></style>
