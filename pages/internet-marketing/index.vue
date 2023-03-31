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
  name: 'IntMarketingPage',
  components: { AppMain, AppServDirections, AppChoose },
  head () {
    return {
      title: 'Интернет-маркетинг по доступной цене в Уфе от компании EduPartner',
      meta: [
        {
          name: 'description',
          content: 'Интернет-маркетинг по доступной цене в Уфе. Услуги - SEO-оптимизация, контекстная реклама, таргетированая реклама, SMM, email-рассылка. Команда высококлассных специалистов. Поможем вашему бизнесу расти и развиваться! ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
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
