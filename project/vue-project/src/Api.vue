<script setup>
    import {onMounted, ref} from "vue"

    //声明响应式数据
    const count = ref(10);

    //声明函数
    function increment(){
        count.value++;
    }

    //声明钩子函数
    onMounted(()=>{
        console.log("vue 已加载完毕");
    });

</script>

<template>
    <button @click="increment">count:{{ count }}</button>
</template>