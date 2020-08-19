<template>
  <div id="app">
    <div>
      <router-link to="/home">首页</router-link>
      <router-link to="/refs">Refs Template</router-link>
      <router-link to="/router/1">Router</router-link>
      <router-link to="/vuex">Vuex</router-link>
      <router-link to="/lifecycle">Lifecycle hooks</router-link>
      <router-link to="/watch">Watch</router-link>
      <router-link to="/input">Input</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
a {
  padding: 12px;
}
</style>
