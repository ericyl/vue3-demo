<template>
  <div>
    <router-link :to="{ name: 'Normal' }">Normal</router-link>
    <router-link to="/home/composition">Composition</router-link>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {}
});
</script>
