<!-- <script>
  export default{
    data(){
      return {
        msg: "good morning" 
      }
    }
  }
</script> -->

<script setup>
  import {ref} from "vue"
  import ApiVue from "./Api.vue"
  const msg = ref("hello world");

  import ArticleVue from "./Article.vue"

</script>

<template>
  <!-- <h1>{{msg}}</h1>
  <ApiVue/> -->

  <ArticleVue/>
</template>

<style scoped>
  h1{
    color: green;
  }
</style>
