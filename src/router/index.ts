import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InfoView from '../views/PhotoView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id?',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/info',
      name: 'info',
      component: InfoView,
    }
  ],
})

export default router
