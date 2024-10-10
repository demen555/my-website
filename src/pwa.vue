<template>
    <iframe :src="obj.pwaUrl" id="box" frameborder="0"  width="100%" height="100%"></iframe>
</template>


<script setup>
import { computed, ref, onMounted  } from 'vue'
const obj = ref({})
// 使用 onMounted 钩子加载配置
onMounted(async () => {
  try {
    const response = await fetch('/appconfig.json'); // 从 public 目录加载 JSON 文件
    const data  = await response.json();
    obj.value = data; // 直接将整个配置对象赋值
   
  } catch (error) {
    console.error('Error loading config:', error);
  }
});
</script>


<style>
*{
    margin: 0;
    padding: 0;
}

html,body{
    width: 100%;
    height: 100%;
}
#app{
    width: 100%;
    height: 100%;
}
.container{
    width: 100%;
    height: 100%;
}

</style>