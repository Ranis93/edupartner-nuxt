<template>
  <div>
    <AppSpace />
    <AppDirections />
    <AppAbout />
    <AppProgress />
    <AppControl />
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
// import AppReviews from '~/components/MainPage/AppReviews.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
import AppProjects from '~/components/MainPage/AppProjects.vue'
export default {
  name: 'IndexPage',
  components: { AppSpace, AppDirections, AppAbout, AppProgress, AppControl, AppChoose, AppProjects },
  head () {
    return {
      title: 'Edupartner ✅ скорая помощь для Вашего бизнеса',
      meta: [
        {
          hid: 'Главная',
          name: 'description',
          content: 'Edupartner предлагает услуги по бизнес-диагностике, управленческому и кадровому консалтингу, бизнес-аудиты, бизнес-консультации, внутренний и внешний интернет-маркетинг. Полный цикл работ под ключ. Прозрачная отчетность и анализ до/после.'
        },
        {
          hid: 'Главная',
          name: 'keywords',
          content: 'Edupartner'
        }
      ]
    }
  },
  beforeMount () {
    this.$store.commit('bredcrumbs/hideBredcrumb')
  }
}
</script>
