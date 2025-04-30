<template>
    <div class="comment-body" v-for="item in postStore.posts":key="item.postid">
        <div class="comment-item">
            <h2>{{ item.title }}</h2>
            <div class="comment-author">
                {{ item.userid}}
                <img :src="item.imageurl">
            </div>
            <div class="comment-content">{{ item.content }}</div>
            <div class="comment-info">
                <span class="publishtimecss">{{ item.updated_at }}</span>
                <RouterLink to="/likes" class="likes">喜欢:{{ item.likes }}</RouterLink>
                <RouterLink to="/comments" class="comments">评论:{{ item.comments }}</RouterLink>
            </div>
            <button type="submit" :value="item.postid" @click="detail">详情</button>
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
        color: #fff;
        background-color: orange;
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
        display: flex;
        align-items: center;
    }
    .publishtimecss{
        color: #999;
        font-size: 12px;
        margin: 10px;
    }
    .likes{
        color: red;
        font-size: 18px;

    }
    .comments{
        color: #999;
        font-size: 18px;
        margin-right: 10px;
    }
    .comment-content{
        margin-top: 20px;
    }
</style>