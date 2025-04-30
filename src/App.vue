<template>
  <div id="app">
    <router-view />
    <footer>
    <p>&copy; 2025 子涵微博简易版公司. 版权所有.</p>
    <div>
        <a href="/about">关于我们</a> |
        <a href="/contact">联系我们</a> |
        <a href="/privacy">隐私政策</a>
    </div>
</footer>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 添加全局背景色 */
body {
  background-color: #F1F2F5; /* 灰色背景 */
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#app {
  flex: 1;
}

/* 优化footer的显示效果 */

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .content {
            flex: 1;
        }

        footer {
            background-color: #ffffff;
            color: rgb(59, 57, 57);
            padding: 20px;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            border-top: solid #333;
        }
    
</style>
