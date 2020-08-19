import { ref } from "vue";

export default function test() {
  const test = ref("abc");

  const changeIt = () => {
    test.value = "xyz";
  };
  return { test, changeIt };
}
