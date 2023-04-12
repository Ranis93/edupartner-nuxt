<template>
  <div>
    <AppMain />
    <AppThisIs />
    <AppToWhom />
    <AppTeacher />
    <AppReseive />
    <AppWhy />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/BusinessConsulting/AppMain.vue'
import AppThisIs from '~/components/Control/BusinessConsulting/AppThisIs.vue'
import AppToWhom from '~/components/Control/BusinessConsulting/AppToWhom.vue'
import AppTeacher from '~/components/Control/BusinessConsulting/AppTeacher.vue'
import AppReseive from '~/components/Control/BusinessConsulting/AppReseive.vue'
import AppWhy from '~/components/Control/BusinessConsulting/AppWhy.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessDiagPage',
  components: { AppMain, AppThisIs, AppToWhom, AppTeacher, AppReseive, AppWhy, AppChoose },
  head () {
    return {
      title: 'Бизнес-консультация в Уфе для малого и среднего бизнеса | EduPartner',
      meta: [
        {
          name: 'description',
          content: 'Бизнес-консультирование и управленческое консультирование для малого и среднего бизнеса от лучших практиков бизнеса. Создадим успешную стратегию развития вашей компании! Открытие, развитие и продвижение бизнеса, построение отдела продаж, система мотивации сотрудников ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Бизнес-консультация'],
      paths: ['/business-consulting']
    })
  }
}
</script>
