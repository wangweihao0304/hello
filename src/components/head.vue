<script setup lang="ts" name="Head">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let isNavbarVisible = ref(true);
console.log('router:', router);


const login = () => {
  console.log('Router:', router); 
  isNavbarVisible.value = false;
  try {
    router.push('/login');
    console.log('Attempting to navigate to /login');
  } catch (error) {
    console.error('Navigation failed:', error);
  }
};
</script>

<template>
  <div v-if="isNavbarVisible" class="guide-head">
    <p class="guide-head-title">微博简易版</p>
    <button @click="login" class="login">登录</button>
  </div>
</template>

<style scoped>
.guide-head {
  width: 100%; 
  height: 75px;
  background-color: #fff5e3;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  font-size: 20px;
  box-sizing: border-box; 
}
.guide-head-title {
  margin-left: 40px;
  font-size: 20px;
  font-weight: bold;
  color: rgb(39, 39, 33);
}
.login {
  width: 80px;
  height: 40px;
  margin-right: 40px;
  color: #fff;
  background-color: #ffa500;
  border-radius: 10px;
  box-shadow: 0 0 10px #bc7a00;
  border: none;
  transition: background-color 0.3s ,transform 0.3s;
}
.login:hover {
  cursor: pointer;
  
  background-color: #627bb0;
  transform: scale(1.1);
}
</style>