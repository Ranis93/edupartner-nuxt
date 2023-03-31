<template>
  <div>
    <AppMain />
    <AppWhatIs />
    <AppTariffs />
    <AppTrust />
    <AppTeam />
    <AppReccomend />
    <AppAdvice />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/SeoPromotionPage/AppMain.vue'
import AppWhatIs from '~/components/Control/SeoPromotionPage/AppWhatIs.vue'
import AppTrust from '~/components/Control/SeoPromotionPage/AppTrust.vue'
import AppTariffs from '~/components/Control/SeoPromotionPage/AppTariffs.vue'
import AppTeam from '~/components/Control/SeoPromotionPage/AppTeam.vue'
import AppReccomend from '~/components/Control/SeoPromotionPage/AppReccomend.vue'
import AppAdvice from '~/components/Control/SeoPromotionPage/AppAdvice.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'SeoPromotionPage',
  components: { AppMain, AppWhatIs, AppTrust, AppTariffs, AppTeam, AppReccomend, AppAdvice, AppChoose },
  head () {
    return {
      title: 'SEO-продвижение сайта по доступной цене в Уфе - Раскрутка сайта от компании EduPartner',
      meta: [
        {
          name: 'description',
          content: 'SEO-оптимизация сайта по доступной цене в Уфе. Услуги комплексного СЕО продвижения под ключ от профессионалов. Раскрутка сайта в поисковых системах яндекс и google. Поможем вашему бизнесу расти и развиваться! ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
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
