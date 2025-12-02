// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import PrioritiesPage from '../Pages/PrioritiesPage.vue'
import LandingPage from '../Pages/LandingPage.vue'
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/priorities', component: PrioritiesPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router