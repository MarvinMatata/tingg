<template>
  <div id="app">
    <app_header></app_header>
    <app_info></app_info>
    <ImageCard></ImageCard>
    <app_cards></app_cards>
    <app_footer></app_footer>
  </div>
</template>

<script>
import './assets/css/main.css'
import app_header from '@/components/app-header.vue'
import app_footer from '@/components/app-footer.vue'
import ImageCard from '@/components/ImageCard.vue'
import app_info from '@/components/app-info.vue'
import app_cards from '@/components/app-cards.vue'


export default {
  name:'app',
  api_key: 'f56c34a04ed146a68150e8856ce7190e',//api key
  components:{
    app_header, app_footer, ImageCard, app_info, app_cards
  }
}
</script>

<style>

</style>
