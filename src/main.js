import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 在主入口监听PWA注册事件
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
})
createApp(App).mount('#app')
