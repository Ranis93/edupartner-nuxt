<template>
  <div>
    <AppMain />
    <AppLetter />
    <AppInfo />
    <AppResult />
    <AppWhy />
    <AppHow />
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
import AppChoose from '~/components/MainPage/AppChoose.vue'
export default {
  name: 'BusinessStrategyPage',
  components: { AppMain, AppLetter, AppInfo, AppResult, AppWhy, AppHow, AppChoose }
}
</script>
