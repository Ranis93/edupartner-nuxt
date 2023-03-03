<template>
  <div class="appMain">
    <TheHeader />
    <Nuxt />
    <TheFooter />
    <ThePolicy />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import ThePolicy from '~/components/ThePolicy.vue'

export default {
  components: {
    TheHeader, TheFooter, ThePolicy
  }
}
</script>
<style>
</style>
