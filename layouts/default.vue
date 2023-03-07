<template>
  <div class="appMain">
    <TheHeader />
    <TheBredcrumbs />
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
</style>
