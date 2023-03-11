<template>
  <div>
    <AppMain />
    <AppCards />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Courses/BusinessManagmPage/AppMain.vue'
import AppCards from '~/components/Courses/BusinessManagmPage/AppCards.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessManagementPage',
  components: { AppMain, AppCards, AppChoose },
  head () {
    return {
      title: 'Курсы по бизнесу (MBA) и управлению | EduPartner',
      meta: [
        {
          name: 'description',
          content: 'Курсы по бизнесу (MBA) и управлению онлайн с сертификатом. Широкий выбор дистанционных программ обучения бизнесу вместе с Edupartner.'
        },
        {
          name: 'keywords',
          content: 'Курсы по бизнесу и упралению'
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Курсы по бизнесу и упралению'],
      paths: ['/courses/business-and-management/']
    })
  }
}
</script>
