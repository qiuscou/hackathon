import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import DiscoveriesPage from './pages/DiscoveriesPage.vue'
import StartupsPage from './pages/StartupsPage.vue'
import AboutPage from './pages/AboutPage.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'HomePage', component: HomePage },
  { path: '/sign_in', name: 'SignIn', component: SignIn },
  { path: '/sign_up', name: 'SignUp', component: SignUp },
  { path: '/discoveries', name: 'DiscoveriesPage', component: DiscoveriesPage },
  { path: '/startups', name: 'StartupsPage', component: StartupsPage },
  { path: '/about', name: 'AboutPage', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
