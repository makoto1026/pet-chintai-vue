// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import PrioritiesPage from '../Pages/PrioritiesPage.vue'
import LandingPage from '../Pages/LandingPage.vue'
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage.vue'
import CorporatePage from '../Pages/CorporatePage.vue'
import ReviewRentalPage from '../Pages/ReviewRentalPage.vue'
import ReviewSalesPage from '../Pages/ReviewSalesPage.vue'
import PresentsPage from '../Pages/PresentsPage.vue'
import PropertyPurchasePage from '../Pages/PropertyPurchasePage.vue'
import AdminLoginPage from '../Pages/admin/AdminLoginPage.vue'
import AdminPresentsPage from '../Pages/admin/AdminPresentsPage.vue'
import { useAdminAuth } from '@/composables/useAdminAuth'

const routes = [
  { path: '/', component: LandingPage, name: 'landing' },
  { path: '/priorities', component: PrioritiesPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/corporate', component: CorporatePage },
  { path: '/review/rental', component: ReviewRentalPage },
  { path: '/review/sales', component: ReviewSalesPage },
  { path: '/presents', component: PresentsPage },
  { path: '/property-purchase', component: PropertyPurchasePage },
  { path: '/admin/login', component: AdminLoginPage },
  {
    path: '/admin/presents',
    component: AdminPresentsPage,
    meta: { requiresAdmin: true }
  }
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

router.beforeEach(async (to) => {
  if (to.meta.requiresAdmin) {
    const { waitForAuthReady, isAdmin } = useAdminAuth()
    await waitForAuthReady()
    if (!isAdmin.value) {
      return '/admin/login'
    }
  }
})

export default router
