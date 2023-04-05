<template>
  <div>
    <AppMain />
    <AppThisIs />
    <AppWhat />
    <AppReseive />
    <AppPrices />
    <AppWhy />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/BusinessDiag/AppMain.vue'
import AppThisIs from '~/components/Control/BusinessDiag/AppThisIs.vue'
import AppWhat from '~/components/Control/BusinessDiag/AppWhat.vue'
import AppReseive from '~/components/Control/BusinessDiag/AppReseive.vue'
import AppPrices from '~/components/Control/BusinessDiag/AppPrices.vue'
import AppWhy from '~/components/Control/BusinessDiag/AppWhy.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessDiagPage',
  components: { AppMain, AppThisIs, AppWhat, AppReseive, AppPrices, AppWhy, AppChoose },
  head () {
    return {
      title: 'Диагностика бизнеса в Уфе | EduPartner',
      meta: [
        {
          name: 'description',
          content: 'Проведение бизнес-диагностики вашего предприятия: кадровый аудит, финансовая диагностика, маркетинговая и it-диагностика, диагностика управленческого учета, включая продажи. Команда высококлассных специалистов. Поможем вашему бизнесу расти и развиваться! ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Диагностика бизнеса'],
      paths: ['/business-diagnostics']
    })
  }
}
</script>
