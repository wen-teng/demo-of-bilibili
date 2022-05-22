import VueRouter from 'vue-router'

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../components/HelloWorld.vue'),
    },
  ],
})
