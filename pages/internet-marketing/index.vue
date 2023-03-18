<template>
  <div>
    <AppMain />
    <AppServDirections />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/IntMarketingPage/AppMain.vue'
import AppServDirections from '~/components/Control/IntMarketingPage/AppServDirections.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessStrategyPage',
  components: { AppMain, AppServDirections, AppChoose },
  head () {
    return {
      title: '',
      meta: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Услуги интернет-маркетинга'],
      paths: ['/internet-marketing']
    })
  }
}
</script>
