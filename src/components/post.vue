<template>
    <div class="comment-body" v-for="item in postStore.posts":key="item.postid">
        <div class="comment-item">
            <h2>{{ item.title }}</h2>
            <div class="comment-author">
                {{ item.username}}
                <img :src="item.imageurl">
            </div>
            <div class="comment-content">{{ item.content }}</div>
            <div class="comment-info">
                <span class="publishtimecss">{{ item.updated_at }}</span>
                <RouterLink to="/likes" class="likes">喜欢:{{ item.likes }}</RouterLink>
                <RouterLink to="/comments" class="comments">评论:{{ item.comments }}</RouterLink>
            </div>
            <button type="submit" :value="item.postid" @click="detail" class="details">详情</button>
        </div>
    </div>
</template>
<script lang="ts" setup name="Post">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router';
    import {usePostStore}  from '@/stores/post' 
    const postStore = usePostStore();
    const router = useRouter();
    const detail=()=>{
        router.push('/details');
    }
</script>
<style scoped>
    .comment-item{
        margin: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #eee;
        display: flex;
        justify-content:space-between;
        flex-direction: column; 
        color: #1d1c1c;
        background-color: rgb(228, 228, 228);
    }

    .details {
  width: 80px;
  height: 20px;
  margin-right: 40px;
  color: #fff;
  background-color: #747069;
  border-radius: 10px;
  box-shadow: 0 0 10px #656463;
  border: none;
  transition: background-color 0.3s ,transform 0.3s;
}
.details:hover {
  cursor: pointer;
  
  background-color: #657eb4;
  transform: scale(1.1);
}
    .comment-info{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;

    }
    img{
        width: 40px;
        height: 40px;
        margin-left: 20px;
        border-radius: 50%;
    }
    .comment-author{
        color: #171717;
        display: flex;
        align-items: center;
    }
    .publishtimecss{
        color: #2c2b2b;
        font-size: 12px;
        margin: 10px;
    }
    .likes{
        color: rgb(52, 48, 48);
        font-size: 18px;
        font-weight: bold;

    }
    .comments{
        color: #333131;
        font-size: 18px;
        font-weight: bold;
        margin-right: 10px;
    }
    .comment-content{
        margin-top: 20px;
    }
</style>