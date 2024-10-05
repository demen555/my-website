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
  <div>
    <!-- <a href="https://vitejs.dev" target="_blank">
      <img src="/favicon.svg" class="logo" alt="pwaapp logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->
    <button @click="addHomePage"> add to home </button>
  </div>
  <!-- <HelloWorld msg="pwaapp" /> -->
  <PWABadge />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
