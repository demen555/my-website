<template>
    <iframe :src="obj.pwaUrl" id="box" frameborder="0"  width="100%" height="100%"></iframe>
</template>


<script setup>
let obj = global.config
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