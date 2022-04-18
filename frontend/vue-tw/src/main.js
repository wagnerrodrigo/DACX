import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/css/tailwind.css'
import '../src/assets/css/fonts.css'
import 'animate.css'

const app = createApp(App)
app.use('#app')
app.mount('#app')

