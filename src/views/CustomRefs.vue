<template>
  <div ref="msgRef">{{ msg }}</div>
  <div
    v-for="(item, index) of numbers"
    :key="index"
    :ref="$el => (elements[index] = $el)"
  >{{ item }}</div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, Ref, onMounted, reactive } from "vue";

export default defineComponent({
  setup() {
    const state = reactive({
      msg: "Hello",
      numbers: ["k1", "k2", "k3", "k4", "k5"]
    });
    const msgRef = ref<InstanceType<typeof HTMLDivElement>>();
    console.log("msgRef---" + msgRef.value);
    const elements = ref([]) as Ref<Array<HTMLElement>>;
    console.log("elements---" + elements.value[1]);

    onMounted(() => {
      console.log("mounted");
      console.log("msgRef---" + (msgRef.value as HTMLDivElement).innerHTML);
      console.log("elements---" + elements.value[1]);
    });
    return { msgRef, ...toRefs(state), elements };
  }
});
</script>

<style scoped></style>
