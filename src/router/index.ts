// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import PrioritiesPage from '../Pages/PrioritiesPage.vue'

const routes = [
  { path: '/', redirect: '/priorities' },
  { path: '/priorities', component: PrioritiesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router