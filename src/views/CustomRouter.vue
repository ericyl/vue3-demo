<template>
  <p>{{ id }}</p>
  <button @click="go">Go 2</button>
</template>

<script lang="ts">
import { defineComponent, onUpdated } from "vue";
import { useRoute, useRouter } from "vue-router";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup() {
    const route = useRoute();
    onUpdated(() => {
      console.log(route.query);
    });
    const router = useRouter();
    const go = () => {
      router.push("/router/2?str=dasda");
    };
    return { go };
  }
});
</script>

<style scoped></style>
