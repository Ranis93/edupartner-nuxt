<template>
  <div>
    <AppSpace />
    <AppDirections />
    <AppAbout />
    <AppProgress />
    <AppControl />
    <AppReviews />
    <AppChoose />
    <AppProjects />
  </div>
</template>

<script>
import AppSpace from '~/components/MainPage/AppSpace.vue'
import AppDirections from '~/components/MainPage/AppDirections.vue'
import AppAbout from '~/components/MainPage/AppAbout.vue'
import AppProgress from '~/components/MainPage/AppProgress.vue'
import AppControl from '~/components/MainPage/AppControl.vue'
import AppReviews from '~/components/MainPage/AppReviews.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
import AppProjects from '~/components/MainPage/AppProjects.vue'
export default {
  name: 'IndexPage',
  components: { AppSpace, AppDirections, AppAbout, AppProgress, AppControl, AppReviews, AppChoose, AppProjects },
  head () {
    return {
      title: 'EduPartner✅ Система Сертификации для негосударственных судебных экспертов',
      meta: [
        {
          hid: 'Главная',
          name: 'description',
          content: 'Автоматизированная Система Сертификации для негосударственных судебных экспертов разработана в 2020 в период пандемии для уменьшения стоимости и сокращения сроков сертификации от 10 мин до 2 часов с учётом оплаты, загрузки документов и формирования сертификата для скачивания в личном кабинете'
        }
      ]
    }
  },
  beforeMount () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
