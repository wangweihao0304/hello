import { defineStore } from 'pinia'
export const usePostStore = defineStore('post', {
  state: () => {
    return {
      posts: [
        { postid: '1', username: '1', title: '计算机的未来', content: '随着ai技术的不断发展，技术的革新也越来越快。', imageurl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.AqajF_wezWUsSoTyC8UubAAAAA?w=167&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7', comments: 15, likes: 10, created_at: '2025-4-24 13:32', updated_at: '2025-4-24 13:32' },
        { postid: '2', username: '1', title: '今天晚上吃什么', content: '外卖还是出去吃', imageurl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.AqajF_wezWUsSoTyC8UubAAAAA?w=167&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7', comments: 20, likes: 5, created_at: '2025-4-24 13:33', updated_at: '2025-4-24 13:33' },
        { postid: '2', username: '1', title: '今天晚上吃什么', content: '外卖还是出去吃', imageurl: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.AqajF_wezWUsSoTyC8UubAAAAA?w=167&h=176&c=7&r=0&o=5&dpr=1.5&pid=1.7', comments: 20, likes: 5, created_at: '2025-4-24 13:33', updated_at: '2025-4-24 13:33' }
      ]
    }
  }
})