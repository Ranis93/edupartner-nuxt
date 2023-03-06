<template>
  <div class="appMain">
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <ThePolicy />
    <TheOverlay />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import ThePolicy from '~/components/ThePolicy.vue'
import TheOverlay from '~/components/TheOverlay.vue'

export default {
  components: {
    TheHeader, TheFooter, ThePolicy, TheOverlay
  }
}
</script>
<style>
</style>
