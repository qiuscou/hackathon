import { createRouter, createWebHistory } from 'vue-router'
import App from '/src/App.vue'
import HomePage from './pages/HomePage.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'HomePage', component: HomePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
