<script setup>
import HelloWorld from './components/HelloWorld.vue'
import PWABadge from './components/PWABadge.vue'
import QrcodeVue from 'qrcode.vue'
import { computed, ref } from 'vue'

const qrcodevalue = ref(null)
const rbbacklayer = ref(false)
const rbqrcode = ref(false)
const countDown = ref(null);
const startTime = ref(false)
const installFinish = ref(false)

qrcodevalue.value = location.href

if( (window.isAndroid && window.isChrome)  ){
  rbbacklayer.value = true
}
if(window.icPC){
  rbqrcode.value = true
}

document.addEventListener('visibilitychange', (ev) => {
  if(window.icPC && window.isChrome) {
    rbbacklayer.value = true
  }
}, false)

function changerbbacklayerShow(){
  rbbacklayer.value = !rbbacklayer.value
}

function addHomePage(){
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            start()
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        window.deferredPrompt = null;
    });
}


function onFinish(){
  startTime.value = false
  installFinish.value = true
}

function start(){
  countDown.value.start();
  startTime.value = true
}

let obj = {
  name: "Ebngwah",
  dec: "Innovative Solutions Pte.Ltd"
}

const showInstall = window.isAndroid && window.isChrome || window.icPC && window.isChrome 

</script>



<template>
 
  <div class="home container" >
    <div class="header">
      <div class="header__icon">
        <img alt="" class="header__icon--img" data-value="app_icon" loading="lazy" src="./assets/logo.svg">
        <div v-show="startTime" class="header__icon--loading" id="iconLoading"><svg viewBox="25 25 50 50"><circle cx="50" cy="50" fill="none" r="20"></circle></svg></div>
      </div>
      <div class="header__info">
        <div class="header__info-title">
          <h1 data-value="app_name">{{ obj.name }}</h1>
        </div>
        <p class="header__info-description" data-value="company_name">{{ obj.dec }}</p>
        <!-- <p> 5% </p> -->
      </div>
    </div>

    <div class="info">
      <div class="info__view__wrap">
        <div class="info__view">
          <div class="info__view-value">
            <span data-value="app_score">5.0</span> 
            <img alt="" class="ic_x" loading="lazy" src="./assets/ic_x-5cfcc16318512e841386.png">
          </div>
          <div class="info__view-label" data-value="app_comments">124 reviews</div>
        </div>

        <div class="info__view">
          <div class="info__view-value" data-value="app_download">45K +</div>
          <div class="info__view-label" data-t="downloads.label">Downloads</div>
        </div>
        
        <div class="info__view">
          <img alt="" class="info__view-choice" src="./assets/ic_editors_choice-90a4c40deaa30c9e44e2.png">
          <div class="info__view-label" data-t="editors_choice">Editors' Choice</div>
        </div>
      </div>
    </div>

    <div class="qrcode" id="rb-qrcode" v-show="rbqrcode">
      <div class="rb-qrcode">
        <div class="rb-qrcode__hand">
          <img class="rb-qrcode__hand-bg" loading="lazy" src="./assets/code_img1-4efa7a01cb81b72b45fa.png" alt="">
          <img class="rb-qrcode__hand-light" loading="lazy" src="./assets/code_light-1a77a777fc22de25628b.png" alt="">
        </div>
        <div class="rb-qrcode__prop">
          <div class="rb-qrcode__prop-code">
            <!-- <canvas class="rb-qrcode__code" id="qrcode" height="500" width="500"></canvas> -->
            <qrcode-vue class="rb-qrcode__code" id="qrcode" :value="qrcodevalue" :size="120" level="H" />
            <img class="rb-qrcode__prop-bg" loading="lazy" src="./assets/code_bg-d8e382ff91517eb77526.png" alt="">
          </div>
          <div class="rb-qrcode__prop-title">Scan QR code to install</div>
        </div>
        <img class="rb-qrcode__arrowhead" loading="lazy" src="./assets/ic_arrowhead-f1049004c2e11e3715da.png" alt="">
        <div class="rb-qrcode__phone">
          <img class="rb-qrcode__phone-icon" loading="lazy" src="./assets/logo.svg" alt="">
          <div class="rb-qrcode__phone-name">{{ obj.name }}</div>
          <div class="rb-qrcode__phone-btn">Rapid Install</div>
        </div>
      </div>
    </div>

    <div class="install-btn shiny-btn" id="install-btn" @click="addHomePage">
      <template v-if="showInstall">
        <div class="install-btn__ing" v-if="!installFinish">
        <div class="install-btn__ing__rapid">
          <img alt="" class="ic_x" loading="lazy" src="./assets/ic_sd-0f0ff5464df5f1e88241.png"> 
          <span class="rapid_install" data-t="rapid_install">Rapid Install</span>
        </div>
        <div class="install-btn__ing__countdown">
          <span data-t="download_in">Download within</span> <span class="countdown-num">
            <van-count-down @finish="onFinish" :auto-start="false" ref="countDown"  format="ss" :time="10000" /></span> &nbsp;s
        </div>
        </div>
        <div class="install-btn__play install-btn__view" v-else data-t="play" @click="showToast('请用谷歌浏览器打开此地址');">Play</div>
        
      </template>
       <div v-else class="install-btn__install install-btn__view" data-t="install">Install</div>
     
    </div>

    <div class="img-scroll">
      <div class="img-scroll__list" data-value="pic_list">
        <div class="img-scroll__view">
          <img loading="lazy" alt="" src="/app-1.png">
        </div>
        <div class="img-scroll__view">
          <img loading="lazy" alt="" src="/app-2.png">
        </div>
        <div class="img-scroll__view">
          <img loading="lazy" alt="" src="/app-3.png">
        </div>
      </div>
    </div>

    <div class="description">
      <div class="description__title" data-t="about_this_app">About this app</div>
      <img alt="" class="description__right-arrow" loading="lazy" src="./assets/ic_arrow_right-ecd0952f3569bde7f2bd.png">
      <div class="description__content" data-value="app_desc">{{ obj.name }} is the pioneer of permanent packaging for Android PWA.</div>
    </div>

    <div class="description">
      <div class="description__title" data-t="updated_on" style="margin-bottom: 5px; font-size: 14px">Updated on</div>
      <div class="description__content" id="update-time"></div>
      <div class="description__label" id="description-label">
            <div class="description__label-item">ROIBest</div>
      </div>
    </div>
  
    <div class="description">
      <div class="description__title" data-t="data_safety.label">Data safety</div>
      <img alt="" class="description__right-arrow" loading="lazy" src="./assets/ic_arrow_right-ecd0952f3569bde7f2bd.png">
      <div class="description__content" data-t="data_safety.content">Safety starts with understanding how developers collect and share your data. Data privacy and security practices may vary based on your use, region, and age. The developer provided this information and may update it over time.</div>
      <div class="description__data-safety">
        <div class="description__data-safety__item">
          <div class="item-icon"><img alt="" loading="lazy" src="./assets/ic_data_share-0a04b46579b65b109794.png"></div>
          <div class="item-content">
            <p data-t="data_safety.share.p1">No data shared with third parties</p>
            <p><ins data-t="learn_more">Learn more</ins> <span data-t="data_safety.share.p2"> about how developers declare sharing</span></p>
          </div>
        </div>
        <div class="description__data-safety__item">
          <div class="item-icon">
            <img alt="" loading="lazy" src="./assets/ic_cloud_upload-12904a12c1aa88f2d082.png">
          </div>
          <div class="item-content">
            <p data-t="data_safety.upload">This app may collect these data types Location, App activity and 2 others</p>
          </div>
        </div>
        <div class="description__data-safety__item">
          <div class="item-icon">
            <img alt="" loading="lazy" src="./assets/ic_lock-216fc77ae7e0db5800f3.png">
          </div>
            <div class="item-content">
              <p data-t="data_safety.encrypted">Data is encrypted in transit</p>
            </div>
        </div>
        <div class="description__data-safety__item">
          <div class="item-icon">
            <img alt="" loading="lazy" src="./assets/ic_delete-bfa3513105268d92d830.png">
          </div>
          <div class="item-content">
            <p data-t="data_safety.delete">You can request that data be deleted</p>
          </div>
        </div>
      </div>
    </div>

    <div class="comments" id="rb-comment">
        <div class="comments__title">Ratings and reviews</div>
        <div class="comments__tips">Ratings and reviews are verified and from people who use the same type of device that you use</div>
        
        
        <div class="comments__scoring">
          <div class="comments__scoring-num">
            <div class="comments__scoring-points">5.0</div>
            <div class="comments__scoring-star"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 14px; height: 14px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 14px; height: 14px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 14px; height: 14px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 14px; height: 14px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 14px; height: 14px; margin-right: 2px;"></div>
            <div class="comments__scoring-people">124</div>
          </div>
          <div class="comments__scoring-content">
        <div class="comments__scoring-item">5
          <div class="progress"><div class="progress-bar" style="width: 90%;"></div></div>
        </div>
      
        <div class="comments__scoring-item">4
          <div class="progress"><div class="progress-bar" style="width: 0%;"></div></div>
        </div>
      
        <div class="comments__scoring-item">3
          <div class="progress"><div class="progress-bar" style="width: 0%;"></div></div>
        </div>
      
        <div class="comments__scoring-item">2
          <div class="progress"><div class="progress-bar" style="width: 0%;"></div></div>
        </div>
      
        <div class="comments__scoring-item">1
          <div class="progress"><div class="progress-bar" style="width: 0%;"></div></div>
        </div>
      </div>
        </div>
        <div id="rb-comment-list">
      <div class="comments__list-item">
        <div class="comments__list-header">
            <img loading="lazy" class="comments__list-avatar" src="./assets/default_avatar_4.png" alt="">
            <div class="comments__list-name">KUMA</div>
            <img loading="lazy" class="comments__list-icon" src="./assets/ic_more-3b710bfb3928d8397490.png" alt="">
        </div>
        <div class="comments__list-stars"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 11px; height: 11px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 11px; height: 11px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 11px; height: 11px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 11px; height: 11px; margin-right: 2px;"><img class="star" src="./assets/ic_full_star-49a0f4841cc9a5253f5d.png" style="width: 11px; height: 11px; margin-right: 2px;"><span>August 6, 2024</span></div>
        <div class="comments__list-detail">{{ obj.name }} is the pioneer of permanent packaging for Android PWA.</div>
      </div>
      </div>
          <div class="comments__br"></div>
    </div>

    <div class="rb-menus" id="rb-menus">
      <div class="menus__placeholder"></div>
      <div class="menus__body" id="menus">
        <div class="menus__item active">
          <img alt="" loading="lazy" src="./assets/ic_menu_games_active-1894beeffa77796e2814.png">
          <div class="title">Games</div>
        </div>
        <div class="menus__item ">
          <img alt="" loading="lazy" src="./assets/ic_menu_apps-3ec1bfeae14272c06fb9.png">
          <div class="title">Apps</div>
        </div>
        <div class="menus__item ">
          <img alt="" loading="lazy" src="./assets/ic_menu_avt-4b91e2be95dabb807af2.png">
          <div class="title">Movies &amp; TV</div>
        </div>
        <div class="menus__item ">
          <img alt="" loading="lazy" src="./assets/ic_menu_books-22f9322513bad9142c9a.png">
          <div class="title">Books</div>
        </div>
        <div class="menus__item ">
            <img alt="" loading="lazy" src="./assets/ic_menu_children-b4c043a1aba3a6ac32cf.png">
            <div class="title">Kids</div>
        </div>
      </div>
    </div>

  </div>
  <!-- <PWABadge /> -->

  <div class="rb-back-layer layer__container template1 layer--visible" id="rb-back-layer" v-show="rbbacklayer">
    <div class="layer__mask" @click="changerbbacklayerShow"></div>
    <div class="layer__body">
      <img class="back__logo" loading="lazy" src="./assets/img_reward-18bc0c7471777e668be9.png" alt="">
      <div class="back__title">We are collecting <span>objective</span> reviews for this apps</div>
      <div class="back__content">
      <img class="back__icon" loading="lazy" src="./assets/logo.svg" alt="">
      <div class="back__info">
        <div class="back__info__title">
          <span>{{ obj.name }}</span>
        </div>
        <p class="back__info__description">{{ obj.dec}}</p>
        <p class="back__info__play">
          <img class="ic_dun" loading="lazy" src="./assets/ic_dun-175b2705681df4e189f2.png" alt="">
          Verified by Play Protect
        </p>
      </div>
    </div>
    <div class="back__detail">
      <div class="back__detail__introduction">If you can <span>download the app</span> and leave an <span>objective</span> review and rating，You will have the chance to receive a <span>$20</span> Google Play gift card.</div>
    </div>
    <div class="back__btn" @click.stop="addHomePage">Install</div></div>
  </div>

</template>

<style scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>
