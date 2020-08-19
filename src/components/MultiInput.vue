<template>
  <div>
    <select @change="$emit('update:selected', $event.target.value)">
      <option value>-</option>
      <option
        v-for="item of selectData"
        :key="item"
        :value="item"
        :selected="item == selected"
      >{{ item }}</option>
    </select>
    <input type="text" :value="value" v-bind="{ ...$attrs, onInput: input }" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ""
    },
    valueModifiers: {
      default: () => ({
        capitalize: false
      })
    },
    selected: {
      type: String,
      default: ""
    }
  },
  setup(props, { emit }) {
    const selectData = ref(["home", "about"]);
    const input = (event: Event) => {
      let value = (event.target as HTMLInputElement).value;
      if (props.valueModifiers.capitalize) {
        value = value.toUpperCase();
      }
      emit("update:value", value);
    };
    return {
      selectData,
      input
    };
  }
});
</script>

<style lang="scss" scoped></style>
