<script setup>
import HelloWorld from './components/HelloWorld.vue'
import PWABadge from './components/PWABadge.vue'

function addHomePage(){
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            // // showAddToDesktop.value = false
            // localStorage.setItem('addDesktop',true)
        } else {
            console.log('User dismissed the A2HS prompt');
        }
        window.deferredPrompt = null;
    });
}

</script>



<template>
  <div class="home">
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/favicon.svg" class="logo" alt="pwaapp logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->

    <div class="header">
      <div class="header__icon">
        <img alt="" class="header__icon--img" data-value="app_icon" loading="lazy" src="./assets/vue.svg">
      </div>
      <div class="header__info">
        <div class="header__info-title">
          <h1 data-value="app_name">Demo from ROIBest</h1>
        </div>
        <p class="header__info-description" data-value="company_name">ROI BEST PTE. LTD.</p>
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

    <div class="install-btn shiny-btn" id="install-btn" @click="addHomePage">
      <div class="install-btn__ing">
        <div class="install-btn__ing__rapid">
          <img alt="" class="ic_x" loading="lazy" src="./assets/ic_sd-0f0ff5464df5f1e88241.png"> 
          <span class="rapid_install" data-t="rapid_install">Rapid Install</span>
        </div>
        <div class="install-btn__ing__countdown">
          <span data-t="download_in">Download within</span> <span class="countdown-num">10</span> s
        </div>
      </div>
    </div>

    <div class="img-scroll">
      <div class="img-scroll__list" data-value="pic_list">
        <div class="img-scroll__view">
          <img loading="lazy" alt="" src="./assets/app-1.png">
        </div>
        <div class="img-scroll__view">
          <img loading="lazy" alt="" src="./assets/app-2.png">
        </div>
        <div class="img-scroll__view">
          <img loading="lazy" alt="" src="./assets/app-3.png">
        </div>
      </div>
    </div>

    <div class="description">
      <div class="description__title" data-t="about_this_app">About this app</div>
      <img alt="" class="description__right-arrow" loading="lazy" src="./assets/ic_arrow_right-ecd0952f3569bde7f2bd.png">
      <div class="description__content" data-value="app_desc">ROIBest is the pioneer of permanent packaging for Android PWA.</div>
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
        <div class="comments__list-detail">ROIBest is the pioneer of permanent packaging for Android PWA.</div>
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
  <PWABadge />

  

</template>

<style scoped>
.home{
  width: 100%;
  height: 100%;
}
.header{
  display: flex;
  margin-bottom: 28px
}
.header__icon {
  margin-right: 22px;
  align-items: center;
  display: flex;
  height: 74px;
  justify-content: center;
  position: relative;
  width: 74px;
}
.header__icon .header__icon--img {
  border-radius: 20%;
  display: block;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  overflow: hidden;
  transition: all .35s;
  width: 100%;
}
.header__info {
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.header__info .header__info-title{
  line-height: 32px;
  overflow-wrap: anywhere;
  word-break: keep-all;
  font-size: 16px;
}
.header__info-description {
  color: #028760;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
  margin-bottom: 5px;
}
.info {
  margin-bottom: 38px;
  width: 100%;
}
.info__view__wrap {
  display: flex;
}
.info__view {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  position: relative;
}

.info__view:not(:first-child):before {
    background: #ebebeb;
    bottom: 0;
    content: "";
    height: 24px;
    margin: auto 0;
    position: absolute;
    top: 0;
    width: 1px;
    left: 0;
}

.info__view-value {
  align-items: center;
  color: #111;
  display: flex;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  margin-bottom: 6px;
}
.info__view-label {
    color: #606569;
    font-size: 12px;
    font-weight: 400;
    line-height: 17px;
}
.info__view .ic_x {
    margin-left: 2px;
}
.info__view .ic_x {
    display: block;
    width: 11px;
}
.info__view-choice {
    height: 18px;
    margin-bottom: 6px;
    width: 18px;
}
.install-btn {
    margin-bottom: 20px;
    overflow: hidden;
    position: relative;
    width: 100%;
}
.install-btn__ing{
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
  padding: 8px;
  background: #028760;
  justify-content: center;
  border-radius: 8px;
  color: #faff00;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;
}


.install-btn__ing__rapid {
    align-items: center;
    color: var(--install-text-color);
    display: flex;
    font-size: 15px;
    font-weight: 500;
    justify-content: center;
    line-height: 21px;
}
.install-btn__ing__rapid img {
    margin-right: 4px;
}
.install-btn__ing__rapid img {
    display: block;
    width: 12px;
    height: 18px;
}
.rapid_install{
    align-items: center;
    color:#ffe336;
    display: flex;
    font-size: 15px;
    font-weight: 500;
    justify-content: center;
    line-height: 21px;
     margin-left: 4px;
}

.img-scroll {
    margin-bottom: 24px;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
}
.img-scroll__list {
    display: flex;
    flex-wrap: nowrap;
    height: 224px;
    width: -moz-max-content;
    width: max-content;
}
.img-scroll__view {
    margin-right: 11px;
}
.img-scroll__view {
    width: 126px;
    border-radius: 8px;
    height: 224px;
    overflow: hidden;
}
.img-scroll__view img {
    display: block;
    height: 100%;
    width: auto;
}
.description {
    position: relative;
}
.description__title {
    color: #202124;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 24px;
}
.description__right-arrow {
    height: 15px;
    position: absolute;
    top: 4px;
    width: 15px;
    right: 0;
}
.description__content {
    color: #666;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 19px;
    margin-bottom: 16px;
    overflow-wrap: break-word;
    white-space: break-spaces;
}
.description__label {
    display: flex;
    flex-flow: wrap;
    margin-bottom: 15px;
}
.description__label-item {
    align-items: center;
    background: #fff;
    border: 1px solid #dadce0;
    border-radius: 15px;
    color: #5f6368;
    display: flex;
    font-size: 14px;
    font-weight: 400;
    height: 30px;
    justify-content: center;
    padding: 0 12px;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 11px 16px 0;
}
.description__data-safety {
    border: 1px solid #dadce0;
    border-radius: 7px;
    padding: 24px 26px 8px;
    width: 100%;
}
.description__data-safety__item {
    display: flex;
    margin-bottom: 16px;
}
.description__data-safety__item .item-icon {
    align-items: center;
    display: flex;
    height: 20px;
    justify-content: center;
    width: 20px;
    margin-right: 16px;
}
.description__data-safety__item .item-icon img {
    display: block;
    width: 20px;
    height: 20px;
}
.description__data-safety__item .item-content {
    flex: 1;
    overflow: hidden;
    word-break: break-all;
}
.description__data-safety__item .item-content p {
    color: #444;
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
}
.comments {
    margin-top: 34px;
}
.comments__title {
    color: #222;
    font-size: 19px;
    font-weight: 500;
}
.comments__tips {
    color: #444;
    font-size: 13px;
    margin: 20px 0 10px;
}
.comments__br {
    background-color: #dadce0;
    height: .5px;
    margin: 40px 0 10px;
    width: 100%;
}
.comments__scoring {
    align-items: center;
    display: flex;
    justify-content: space-between;
}
.comments__scoring-content {
    flex: 1;
    max-width: 180px;
    margin-left: 10px;
}
.comments__scoring-item {
    align-items: center;
    color: #444;
    display: flex;
    font-size: 11px;
    margin-bottom: 6.5px;
}
.progress {
    background-color: #e3e3e3;
    border-radius: 5px;
    flex: 1;
    height: 9px;
    max-width: 166px;
    overflow: hidden;
    width: 100%;
    margin-left: 14.5px;
}
.progress-bar {
    background: #028760;
    border-radius: 5px;
    height: 100%;
}
.comments__scoring-points {
    font-size: 58px;
    font-weight: 400;
}
.comments__scoring-star {
    display: flex;
}
.comments__list-item {
    margin: 30px 0;
}
.comments__list-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;
}
.comments__list-avatar {
    border-radius: 50%;
    height: 32px;
    -o-object-fit: fill;
    object-fit: fill;
    width: 32px;
    margin-right: 16px;
}
.comments__list-name {
    color: #222;
    font-size: 14.5px;
    flex: 1;
}
.comments__list-icon {
    height: 16px;
    width: 4px;
}
.comments__list-stars span {
    color: #444;
    font-size: 12px;
}
.rb-menus .menus__body {
    background-color: #fff;
    border-top: 1px solid #dadce0;
    bottom: 0;
    display: flex;
    left: 0;
    margin: 0 auto;
    max-width: 750px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 10;
}
.rb-menus .menus__item {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 54px;
    justify-content: center;
}
.rb-menus .menus__item>img {
    display: block;
    height: 24px;
    width: 24px;
}
.rb-menus .menus__item>.title {
    color: #5f6368;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.1;
    margin-top: 2px;
}
.rb-menus .menus__item.active>.title {
     color: #028760;
}

</style>
