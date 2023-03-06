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
  components: { AppMain, AppCards, AppChoose }
}
</script>
