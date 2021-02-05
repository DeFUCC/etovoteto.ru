console.log('hello from rollup!')

import { itemColor } from './use/colors.js'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#generator')
