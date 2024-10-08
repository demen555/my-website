import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //判断是否是 android终端
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);     //判断是否是 iOS终端
var icPC = !u.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
window.isAndroid = isAndroid
window.isIOS = isIOS
window.isChrome = isChrome
window.icPC = icPC

function isRunningInPWA () {
    return (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone);
}

if (isRunningInPWA() || window.isIOS ) {
    window.location.href = 'https://easyearningmoney.com';
}else{
    showLoadingToast({
        duration: 5000,
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
