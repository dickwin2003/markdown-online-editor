/** @format */

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createMetaManager, plugin as metaPlugin } from 'vue-meta'
import App from './App.vue'

/* ------------------------- Global Variable ------------------------------- */
import { appTitle } from './config/constant'
window.$appTitle = appTitle

/* ------------------------Vue Global Variable------------------------------ */
import { $utils, $document, $lodash } from '@helper'

// Create the app instance to configure plugins
const app = createApp(App)

// Configure app instance
app.config.productionTip = false
app.config.globalProperties.$_ = $lodash
app.config.globalProperties.$utils = $utils
app.config.globalProperties.$document = $document

// Use plugins
app.use(ElementPlus)
app.use(createMetaManager(), metaPlugin)

// Register global components
import SvgIcon from '@components/Icon'
app.component('SvgIcon', SvgIcon)

export default app
