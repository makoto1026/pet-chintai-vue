// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import PrioritiesPage from '../Pages/PrioritiesPage.vue'
import LandingPage from '../Pages/LandingPage.vue'
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage.vue'
import CorporatePage from '../Pages/CorporatePage.vue'
import ReviewRentalPage from '../Pages/ReviewRentalPage.vue'
import ReviewSalesPage from '../Pages/ReviewSalesPage.vue'

const routes = [
  { path: '/', component: LandingPage, name: 'landing' },
  { path: '/priorities', component: PrioritiesPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/corporate', component: CorporatePage },
  { path: '/review/rental', component: ReviewRentalPage },
  { path: '/review/sales', component: ReviewSalesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router