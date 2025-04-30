<!-- src/App.vue -->
<script setup lang="ts">
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="app-container">
    <div class="content">
    <router-view></router-view>
    </div>
    <Footer/>
</div>
    
</template>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  flex-grow: 1;
}
</style>