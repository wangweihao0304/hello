<template>
  <div class="login-page">
    <h1 class="login-title">登录页面</h1>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="email" placeholder="邮箱" required />
      <input type="password" v-model="password" placeholder="密码" required />
      <span class="buttoncss">
        <button type="submit">登录</button>
        <button type="button" @click="register">注册</button>
      </span>
      
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = async () => {
    router.push('/home'); 
};
const register=async()=>{
  router.push('/register')
}

</script>

<style scoped>
.login-title{
  color: #ff8c00;
}
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  margin: 10px;
  padding: 10px;
  width: 200px;
}
input:focus{
    width:300px;
    border:3px solid orange;
    outline: none;
}
button {
  padding: 10px 20px;
  background-color: #ffa500;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 30px;
}

button:hover {
  background-color: #ff8c00;
}
</style>