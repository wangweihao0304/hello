<script setup lang="ts">
import { ref } from 'vue'

let content = ref('')

let publish = () => {
  console.log(content.value)
  content.value = ''
}
</script>

<template>
  <div class="input-wrapper">
    <input type="text" placeholder="请输入内容" v-model="content" class="input-content" @keyup.enter="publish" />
    <button @click="publish" class="button-input">发布</button>
  </div>
</template>

<style scoped>
.input-wrapper {
  height: 60px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.input-content {
  flex: 1;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-right: 20px;
  padding: 0 10px;
  font-size: 16px;
}

.input-content:focus {
  border: 1px solid #4a90e2;
  outline: none;
  box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
}

.button-input {
  width: 100px;
  height: 50px;
  border-radius: 8px;
  background-color: #4a90e2;
  color: #fff;
  border: none;
  font-size: 16px;
  font-weight: bold;
}

.button-input:hover {
  background-color: #357abd;
  cursor: pointer;
  color: #fff;
  transition: 0.3s;
}
</style>