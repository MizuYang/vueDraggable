import { createApp } from 'vue'
import router from './router'

import { createPinia } from 'pinia'

import 'bootstrap'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'

import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/dark.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('json', json)

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.use(hljsVuePlugin)
app.use(ElementPlus)

app.mount('#app')
