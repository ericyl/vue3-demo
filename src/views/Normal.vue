<template>
  <div>COUNT: {{ count }}</div>
  <div>OTHER COUNT: {{ otherCount }}</div>
  <div>NUMBER: {{ num }}</div>
  <div>OTHER NUMBER: {{ otherNum }}</div>
  <button @click="plus">ADD</button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, toRefs } from "vue";
import MyState from "@/types/MyState";

export default defineComponent({
  setup(props, { emit }) {
    //ref
    const count = ref(0);
    //reactive
    const state: MyState = reactive({
      num: 1,
      otherNum: computed(() => {
        return state.num + 10;
      })
    });
    const state1 = reactive({
      num: 1,
      otherNum: computed(() => {
        return state.num + 10;
      })
    }) as MyState;
    const state2 = reactive<MyState>({
      num: 1,
      otherNum: 0
    });

    //method
    const plus = () => {
      count.value++;
      state.num++;
    };
    //computed
    const otherCount = computed(() => {
      return count.value + 10;
    });

    //emit
    emit("test");
    return { count, ...toRefs(state), state1, state2, plus, otherCount };
  }
});
</script>

<style scoped></style>
