import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Pwa from './Pwa.vue'

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //判断是否是 android终端
var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);     //判断是否是 iOS终端
var icPC = !u.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
window.isAndroid = isAndroid
window.isIOS = isIOS
window.isChrome = isChrome
window.icPC = icPC

let isPwa = false
isPwa = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone


if ( window.isIOS ) {
    isPwa = false
}

if( isPwa ){
    createApp(Pwa).mount('#app')
}else{
    createApp(App).mount('#app')
}

