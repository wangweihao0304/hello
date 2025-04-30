<script setup lang="ts">
import { ref } from 'vue'

let content = ref('');
let publish = () => {
  console.log(content.value)
  content.value = ''
}

</script>

<template>
 <div class="input-wrapper">
    <input type="text" placeholder="请输入内容" v-model="content" class="input-content" @keyup.enter="publish">
    <button @click="publish" class="button-input">发布</button>
 </div>
</template>


<style scoped>
.input-wrapper {
    height: 50px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: none;
    border-radius: 5px;
}
.input-content {
    flex: 1;
    height:50px;
    border-radius: 5px;
    border: 1px solid ;
    margin-right: 20px;
}
/*输入框.input-content输入内容时外框变成黄色 */
.input-content:focus{
    border: 1px solid orange;
    outline: none;
}
.button-input{
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-color: orange;
    color: #fff;
    border: none;
}
.button-input:hover{
    background-color: rgb(255, 165, 0);
    cursor: pointer;
    color: coral;
    transition: 0.5s;
}
</style>
