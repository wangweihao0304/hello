<template>
  <div class="body">
  <nav v-if="!hideNav">
  <Head></Head>
  </nav>
  <Publish></Publish>
  <Post></Post>
  </div>
  </template>
  <script setup lang="ts">
  import Publish from '@/components/publish.vue';
  import Post from '@/components/post.vue';
  import Head from '@/components/head.vue';
  import {computed} from 'vue'
  import { useRoute } from 'vue-router';

  const route=useRoute();
  const hideNav=computed(()=>{
    return route.meta?.hideNav;
  })
  
  </script>
  <style scoped>
  .body{
  height: calc(100vh - 60px);
  
  }
  
  </style>