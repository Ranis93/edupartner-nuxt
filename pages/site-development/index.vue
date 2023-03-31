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
  name: 'SiteDevelopmentPage',
  components: { AppMain, AppWhy, AppWhich, AppServDirections, AppChoose },
  head () {
    return {
      title: 'Разработка сайтов по доступной цене в Уфе от компании EduPartner',
      meta: [
        {
          name: 'description',
          content: 'Разработка сайтов по доступной цене в Уфе. Создадим лендинг(ladning page), корпоративный сайт, сайт для интернет-магазина, с индивидуальным дизайном или готовому решению. Команда высококлассных специалистов. Поможем вашему бизнесу расти и развиваться! ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Разработка сайтов'],
      paths: ['/site-development']
    })
  }
}
</script>
