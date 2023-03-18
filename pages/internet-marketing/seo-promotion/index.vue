<template>
  <div>
    <AppMain />
    <AppWhatIs />
    <AppTrust />
    <AppTeam />
    <AppServDirections />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/SeoPromotionPage/AppMain.vue'
import AppWhatIs from '~/components/Control/SeoPromotionPage/AppWhatIs.vue'
import AppTrust from '~/components/Control/SeoPromotionPage/AppTrust.vue'
import AppTeam from '~/components/Control/SeoPromotionPage/AppTeam.vue'
import AppServDirections from '~/components/Control/SeoPromotionPage/AppServDirections.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessStrategyPage',
  components: { AppMain, AppWhatIs, AppTrust, AppTeam, AppServDirections, AppChoose },
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
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Услуги интернет-маркетинга', 'SEO-продвижение'],
      paths: ['/internet-marketing', '/internet-marketing/seo-promotion']
    })
  }
}
</script>
