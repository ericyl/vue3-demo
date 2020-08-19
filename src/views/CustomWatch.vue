<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, reactive, warn } from "vue";

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: false,
      default: () => {
        return "Hello";
      }
    }
  },
  setup(props) {
    // watchEffect(() => {});//只能简单的监听一个数据
    watch(
      () => props.msg,
      (currentVal, oldVal) => {
        console.log(currentVal, oldVal);
      }
    );

    const count = ref(0);
    watch(
      count,
      (newVal, oldVal) => {
        console.log("count is from " + oldVal + " to " + newVal);
      },
      { immediate: true } //实时
    );

    const state = reactive({
      number: 0
    });
    watch(
      () => state.number,
      (current, old) => {
        console.log(`${old} -> ${current}`);
      }
    );

    const pageNum = ref(1);
    const pageSize = ref(10);
    watch(
      [pageNum, pageSize],
      ([currentPageNum, currentPageSize], [oldPageNum, oldPageSize]) => {
        console.log("pageNum is from " + oldPageNum + " to " + currentPageNum);
        console.log(
          "pageSize is from " + oldPageSize + " to " + currentPageSize
        );
      }
    ); //可以监听多数据，并配置

    return {};
  }
});
</script>

<style scoped></style>
