<template>
  <MittObservable />
  <MittObserver />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MittObserver from "@/components/MittObserver.vue";
import MittObservable from "@/components/MittObservable.vue";

export default defineComponent({
  components: {
    MittObserver,
    MittObservable
  }
});
</script>

<style scoped></style>
