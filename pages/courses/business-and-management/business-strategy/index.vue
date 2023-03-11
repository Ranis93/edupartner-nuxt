<template>
  <div>
    <AppMain />
    <AppLetter />
    <AppInfo />
    <AppResult />
    <AppWhy />
    <AppHow />
    <AppTeacher />
    <AppProgram />
    <AppPrice />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Courses/BusinessStrategyPage/AppMain.vue'
import AppLetter from '~/components/Courses/BusinessStrategyPage/AppLetter.vue'
import AppInfo from '~/components/Courses/BusinessStrategyPage/AppInfo.vue'
import AppResult from '~/components/Courses/BusinessStrategyPage/AppResult.vue'
import AppWhy from '~/components/Courses/BusinessStrategyPage/AppWhy.vue'
import AppHow from '~/components/Courses/BusinessStrategyPage/AppHow.vue'
import AppTeacher from '~/components/Courses/BusinessStrategyPage/AppTeacher.vue'
import AppProgram from '~/components/Courses/BusinessStrategyPage/AppProgram.vue'
import AppPrice from '~/components/Courses/BusinessStrategyPage/AppPrice.vue'
// import AppReviews from '~/components/Courses/BusinessStrategyPage/AppReviews.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessStrategyPage',
  components: { AppMain, AppLetter, AppInfo, AppResult, AppWhy, AppHow, AppTeacher, AppProgram, AppPrice, AppChoose },
  head () {
    return {
      title: 'Очный Бизнес-тренинг в Уфе по Вашему бизнесу | Edupartner',
      meta: [
        {
          name: 'description',
          content: 'Обучение бизнес стратегии для предпринимателей в Уфе. Двухдневный очный курс для владельцев малого и среднего бизнеса по выгодным ценам.'
        },
        {
          name: 'keywords',
          content: 'Бизнес стратегия'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 2 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Курсы по бизнесу и упралению', 'Бизнес-стратегия'],
      paths: ['/courses/business-and-management/', '/courses/business-and-management/business-strategy']
    })
  }
}
</script>
