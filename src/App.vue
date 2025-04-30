<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 添加全局背景色 */
body {
  background-color: #F1F2F5; /* 灰色背景 */
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>