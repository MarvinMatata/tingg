<template>
  <div id="app">
    <app_header></app_header>
    <app_info></app_info>
    <app_imageCards></app_imageCards>
    <app_footer></app_footer>
  </div>
</template>

<script>
import './assets/css/main.css'
import app_header from '@/components/app-header.vue'
import app_footer from '@/components/app-footer.vue'
import app_imageCards from '@/components/app-imageCards.vue'
import app_info from '@/components/app-info.vue'


export default {
  name:'app',
  components:{
    app_header, app_footer, app_imageCards, app_info,
  }
}
</script>

<style>

</style>
