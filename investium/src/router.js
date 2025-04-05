import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'HomePage', component: HomePage },
  { path: '/sign_in', name: 'SignIn', component: SignIn },
  { path: '/sign_up', name: 'SignUp', component: SignUp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
