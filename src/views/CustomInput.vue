<template>
  <MultiInput v-model:selected="form.selected" v-model:value.capitalize="form.value" class="test" />
  <p>{{ form }}</p>
  <SingleInput v-model="value" />
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import MultiInput from "@/components/MultiInput.vue";
import SingleInput from "@/components/SingleInput.vue";

export default defineComponent({
  setup() {
    const form = reactive({
      selected: "",
      value: ""
    });

    const value = ref("");

    return { form, value };
  },
  components: {
    MultiInput,
    SingleInput
  }
});
</script>

<style scoped></style>
