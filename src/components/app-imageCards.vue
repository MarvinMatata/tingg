<template>
  <li>
    <img :src="image.id" :alt="image.title">
    <div>
      <p v-if="image.title">{{image.title}}</p>
      <p v-else>No Title Found</p>
      <p>By {{image.ownername}}</p>
      <section>
        <p>{{image.datetaken}}</p>
        <p>Views: {{image.views}}</p>
      </section>
      
    </div>
  </li>
</template>

<script>
export default {
  name: 'app_imageCards',
  props: [ 'image' ]
}
</script>
<style scoped>

</style>>

