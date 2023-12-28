import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ListView from '../views/ListView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'main',
         component: MainView
      },
      {
         path: '/about',
         name: 'about',
         component: AboutView
      },
      {
         path: '/list',
         name: 'list',
         component: ListView
      }
   ]
})

export default router
