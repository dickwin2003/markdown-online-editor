/** @format */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createMetaManager } from 'vue-meta'
import './registerServiceWorker'

// Import global components
import SvgIcon from '@components/Icon.vue'

// Import global variables
import { appTitle } from './config/constant'
import { $utils, $document, $lodash } from '@helper'

// Set up global variables
window.$appTitle = appTitle

const updateCanonical = (url) => {
  let link = document.querySelector("link[rel='canonical']")
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

// Create and configure the app
const app = createApp(App)

// Register plugins
app.use(router)
app.use(ElementPlus)
app.use(createMetaManager())

// Register global components
app.component('SvgIcon', SvgIcon)

// Register global properties
app.config.globalProperties.$_ = $lodash
app.config.globalProperties.$utils = $utils
app.config.globalProperties.$document = $document
app.config.globalProperties.$message = ElementPlus.ElMessage

// Setup router hooks
router.beforeEach((to, _, next) => {
  const canonicalUrl = `${to.path}`
  updateCanonical(canonicalUrl)
  next()
})

// Mount the app
app.mount('#app')
