// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { ref } from 'vue'
import PrioritiesPage from '../Pages/PrioritiesPage.vue'
import LandingPage from '../Pages/LandingPage.vue'
import PrivacyPolicyPage from '../Pages/PrivacyPolicyPage.vue'
import CorporatePage from '../Pages/CorporatePage.vue'

// 離脱防止ポップアップ用のグローバル状態
export const leavePopupState = {
  enabled: ref(false),
  shown: ref(false),
  showPopup: null as (() => void) | null
}

const routes = [
  { path: '/', component: LandingPage, name: 'landing' },
  { path: '/priorities', component: PrioritiesPage },
  { path: '/privacy-policy', component: PrivacyPolicyPage },
  { path: '/corporate', component: CorporatePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // ハッシュがある場合はスクロール位置を維持
    if (to.hash) {
      return savedPosition || { top: 0 }
    }
    return savedPosition || { top: 0 }
  }
})

// ナビゲーションガード
router.beforeEach((to, from, next) => {
  console.log('beforeEach:', from.fullPath, '->', to.fullPath)

  // /#stay から / への遷移（ブラウザバック）を検知
  if (from.hash === '#stay' && !to.hash && from.path === '/' && to.path === '/') {
    if (leavePopupState.enabled.value && !leavePopupState.shown.value) {
      console.log('leave popup triggered!')
      leavePopupState.shown.value = true
      if (leavePopupState.showPopup) {
        leavePopupState.showPopup()
      }
      // 遷移をキャンセルして #stay に戻す
      next({ path: '/', hash: '#stay', replace: true })
      return
    }
  }

  next()
})

export default router