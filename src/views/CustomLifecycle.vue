<template>
  <div></div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeUnmount,
  onBeforeMount,
  onUnmounted,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered
} from "vue";

export default defineComponent({
  setup() {
    onRenderTracked(() => {
      console.log("【new】render tracked");
    });
    onRenderTriggered(() => {
      console.log("【new】");
    });
    onBeforeMount(() => {
      console.log("beforeMount");
    });
    onMounted(() => {
      console.log("mounted");
    });
    onBeforeUpdate(() => {
      console.log("beforeUpdate");
    });
    onUpdated(() => {
      console.log("updated");
    });
    // onActivated(() => {
    //   console.log("activated");
    // });
    // onDeactivated(() => {
    //   console.log("deactivated");
    // });
    onBeforeUnmount(() => {
      console.log("beforeDestory");
    });
    onUnmounted(() => {
      console.log("destory");
    });
    return {};
  }
});
</script>

<style scoped></style>
