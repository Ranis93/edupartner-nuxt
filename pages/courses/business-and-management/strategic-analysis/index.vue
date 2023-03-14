<template>
  <div>
    <AppMain />
    <AppForWho />
    <AppInfo />
    <AppResult />
    <AppWhy />
    <AppTeacher />
    <AppProgram />
    <AppPrice />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Courses/StrategicAnalysisPage/AppMain.vue'
import AppForWho from '~/components/Courses/StrategicAnalysisPage/AppForWho.vue'
import AppInfo from '~/components/Courses/StrategicAnalysisPage/AppInfo.vue'
import AppResult from '~/components/Courses/StrategicAnalysisPage/AppResult.vue'
import AppWhy from '~/components/Courses/StrategicAnalysisPage/AppWhy.vue'
import AppTeacher from '~/components/Courses/StrategicAnalysisPage/AppTeacher.vue'
import AppProgram from '~/components/Courses/StrategicAnalysisPage/AppProgram.vue'
import AppPrice from '~/components/Courses/StrategicAnalysisPage/AppPrice.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessStrategyPage',
  components: { AppMain, AppForWho, AppInfo, AppResult, AppWhy, AppTeacher, AppProgram, AppPrice, AppChoose },
  head () {
    return {
      title: 'Стратегический анализ - Учебные курсы | edupartner',
      meta: [
        {
          name: 'description',
          content: 'Обучающий курс по современному стратегическому анализу для более продуктивной работы вашей компании или бизнеса. Онлайн обучение строится на рассмотрении реальных кейсов из практики российских компаний.'
        },
        {
          name: 'keywords',
          content: 'Стратегический анализ'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Курсы по бизнесу и упралению', 'Стратегический анализ'],
      paths: ['/courses/business-and-management/', '/courses/business-and-management/strategic-analysis']
    })
  }
}
</script>
