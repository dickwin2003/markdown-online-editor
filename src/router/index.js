/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import beforeEachHooks from './beforeEachHooks'
import RoutesMapConfig from './routes'
import commonRoutesMap from './commonRoutes'

// Create router instance with Vue 3 API
const router = createRouter({
  history: createWebHistory('/'),
  linkActiveClass: 'active',
  scrollBehavior: () => ({ top: 0 }),
  routes: RoutesMapConfig.concat(commonRoutesMap)
})

// Apply router hooks
Object.values(beforeEachHooks).forEach((hook) => {
  router.beforeEach(hook)
})

export default router
