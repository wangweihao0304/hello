
// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App)
// app.use(router)
// createApp(App).mount('#app')
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 确保正确导入了路由实例i
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.use(router); // 注册路由器
app.mount('#app');
