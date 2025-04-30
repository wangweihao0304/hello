import {createRouter} from 'vue-router'
import {createWebHistory} from 'vue-router'
import Login from '@/views/login.vue';
import Home from '@/views/home.vue';
import register from '@/views/register.vue';
import Details from '@/views/details.vue';
import Likes from '@/views/likes.vue';
import Comments from '@/views/comments.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/login',
        name: 'Login',
        component: Login,
        meta:{
          hideNav:true
        }
      },
      {
        path:'/',
        component:Home
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path:'/register',
        name:'Register',
        component:register
      },
      {
        path:'/details',
        name:'Details',
        component:Details
      },
      {
        path:'/likes',
        name:'Likes',
        component:Likes
      },
      {
        path:'/comments',
        name:'Comments',
        component:Comments
      }
      
    ]
  });
export default router