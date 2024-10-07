import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


function isRunningInPWA () {
    return (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone);
}

if (isRunningInPWA()) {
    window.location.href = 'https://www.baidu.com';
}else{
    showLoadingToast({
        duration: 0,
        forbidClick: true,
    });
    // 在主入口监听PWA注册事件 
    window.addEventListener('beforeinstallprompt', (e) => {
        closeToast();
        e.preventDefault();
        window.deferredPrompt = e;
    })
}


createApp(App).mount('#app')
