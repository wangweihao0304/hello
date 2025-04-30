<template>
    <div class="login-page">
      <h1 class="login-title">注册页面</h1>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="用户名*" required />
        <input type="text" v-model="email" placeholder="邮箱*" required/>
        <input type="password" v-model="password" placeholder="密码*" required />
        <button type="submit">注册</button>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const email=ref('');
  const password = ref('');
  
  const handleLogin = async () => {
      
      router.push('/login'); 
  };
    
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
  }
  
  button:hover {
    background-color: #ff8c00;
  }
  </style>