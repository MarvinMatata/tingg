<template>
  <div id="app">
    <app_header></app_header>
    <app_info></app_info>
    <app_cards></app_cards>
    <app_footer></app_footer>
  </div>
</template>

<script>
import './assets/css/main.css'
import app_header from '@/components/app-header.vue'
import app_footer from '@/components/app-footer.vue'
import app_cards from '@/components/app-cards.vue'
import app_info from '@/components/app-info.vue'

export default {
  name:'app',
  components:{
    app_header, app_footer, app_cards, app_info
  }
}
</script>

<style>

</style>
