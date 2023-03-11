<template>
  <div class="appMain">
    <TheHeader />
    <div class="container">
      <TheBredcrumbs />
    </div>
    <Nuxt />
    <TheFooter />
    <ThePolicy />
    <TheOverlay />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheBredcrumbs from '~/components/TheBredcrumbs.vue'
import TheFooter from '~/components/TheFooter.vue'
import ThePolicy from '~/components/ThePolicy.vue'
import TheOverlay from '~/components/TheOverlay.vue'

export default {
  components: {
    TheHeader, TheBredcrumbs, TheFooter, ThePolicy, TheOverlay
  }
}
</script>
<style>
.appMain>.container{
  position: relative;
}
@media (max-width: 480px) {
  .appMain>.container{
    position: static;
  }
}
</style>
