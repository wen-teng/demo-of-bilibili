import { defineStore } from 'pinia'
import { reactive } from 'vue'

export default defineStore('mian', () => {
  const loginUser = reactive({})

  return {
    loginUser,
  }
})

// 使用demo
// import { useCounterStore } from '@/stores/counter'
// export default {
//   setup() {
//     const counter = useCounterStore()
//     // 访问Store里的响应式变量
//     counter.count
//     // 访问Store里的函数
//     counter.increment()
//   },
// }
