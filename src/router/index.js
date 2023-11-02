import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/blog/BlogView.vue'),
      // children: [
      //   {
      //     path: ':slug',
      //     name: 'post',
      //     component: () => import('../views/blog/PostView.vue')
      //  }
      // ]
    }
  ]
})

export default router;
