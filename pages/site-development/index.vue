<template>
  <div>
    <AppMain />
    <AppWhy />
    <AppWhich />
    <AppServDirections />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/SiteDevelopmentPage/AppMain.vue'
import AppWhy from '~/components/Control/SiteDevelopmentPage/AppWhy.vue'
import AppWhich from '~/components/Control/SiteDevelopmentPage/AppWhich.vue'
import AppServDirections from '~/components/Control/SiteDevelopmentPage/AppServDirections.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessStrategyPage',
  components: { AppMain, AppWhy, AppWhich, AppServDirections, AppChoose },
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
      values: ['Разработка сайта'],
      paths: ['/site-development']
    })
  }
}
</script>
