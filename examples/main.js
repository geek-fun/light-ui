import { createApp } from 'vue'
import App from './App.vue'

import lightUI from './../packages'

const app = createApp(App)
app
  .use(lightUI)
  .mount('#app')
