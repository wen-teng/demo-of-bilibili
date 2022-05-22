import { createApp } from 'vue'
import App from './App.vue'

import appRouter from './router/index'

// Normalize.css 是一个可以定制的CSS文件，它让不同的浏览器在渲染网页元素的时候形式更统一。
import './assets/css/normalize.css'

// 由于HTML标签自带一些CSS属性，导致在调试样式的时候会出现各种奇怪的问题
import './assets/css/reset.css'

createApp(App)
  .use(appRouter)
  .mount('#app')
