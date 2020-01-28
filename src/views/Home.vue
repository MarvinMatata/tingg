<template>
  <div class="home">
    <app_header></app_header>
    <app_footer></app_footer>
    
  </div>
</template>

<script>
// @ is an alias to /src
import app_header from '@/components/app-header.vue'
import app_footer from '@/components/app_footer.vue'


export default {
  name: 'home',
  components: {
    app_header,app_footer
  }
  
}
</script>
