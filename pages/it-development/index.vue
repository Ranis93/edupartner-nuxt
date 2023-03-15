<template>
  <div>
    <AppMain />
    <AppServDirections />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/ItDevelopmentPage/AppMain.vue'
import AppServDirections from '~/components/Control/ItDevelopmentPage/AppServDirections.vue'
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
      values: ['IT-разработки'],
      paths: ['/it-development']
    })
  }
}
</script>
