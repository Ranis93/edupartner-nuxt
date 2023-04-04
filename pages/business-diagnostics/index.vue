<template>
  <div>
    <AppMain />
    <AppThisIs />
    <AppWhat />
    <AppChoose />
  </div>
</template>

<script>
import AppMain from '~/components/Control/BusinessDiag/AppMain.vue'
import AppThisIs from '~/components/Control/BusinessDiag/AppThisIs.vue'
import AppWhat from '~/components/Control/BusinessDiag/AppWhat.vue'
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessDiagPage',
  components: { AppMain, AppThisIs, AppWhat, AppChoose },
  head () {
    return {
      title: '',
      meta: [
        {
          name: 'description',
          content: ''
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
