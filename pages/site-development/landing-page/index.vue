<template>
  <div>
    <AppMain />
    <AppWhatIs />
    <AppStages />
    <AppTrust />
    <AppTeam />
    <AppReccomend />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/LandingPagePage/AppMain.vue'
import AppWhatIs from '~/components/Control/LandingPagePage/AppWhatIs.vue'
import AppTrust from '~/components/Control/LandingPagePage/AppTrust.vue'
import AppStages from '~/components/Control/LandingPagePage/AppStages.vue'
import AppTeam from '~/components/Control/LandingPagePage/AppTeam.vue'
import AppReccomend from '~/components/Control/LandingPagePage/AppReccomend.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'LandingPagePage',
  components: { AppMain, AppWhatIs, AppTrust, AppStages, AppTeam, AppReccomend, AppChoose },
  head () {
    return {
      title: 'Разработка лендинга (landing page) по доступной цене в Уфе от компании EduPartner',
      meta: [
        {
          name: 'description',
          content: 'Разработка сайта визитки (Лендинга) по доступной цене в Уфе. Создадим ladning page по вашему индивидуальному дизайну или готовому решению. Команда высококлассных специалистов. Поможем вашему бизнесу расти и развиваться! ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Разработка сайта', 'Landing page'],
      paths: ['/site-development', '/site-development/landing-page']
    })
  }
}
</script>
