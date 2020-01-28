import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
window.axios = require('axios')

new Vue({
  
  mounted: function(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => this.posts = response.data);
  },
  
  data:{
    posts: null
  },

  router,
  render: h => h(App)
}).$mount('#app')
