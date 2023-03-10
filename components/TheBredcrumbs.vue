<template>
  <section
    v-if="$store.state.bredcrumbs.bredcrumbAmount != 0"
    class="bredcrumbs"
  >
    <div class="container">
      <table class="bredcrumbs__list">
        <tr>
          <td>
            <nuxt-link exact to="/" class="bredcrumb">
              Главная
            </nuxt-link>
          </td>
          <td>
            <div class="bredcrumb__pointer">
              /
            </div>
          </td>
          <td>
            <nuxt-link
              exact
              :to="getCurrentPathForBredcrumb_1"
              class="bredcrumb"
              :class="{ current: $store.state.bredcrumbs.bredcrumbAmount == 1 }"
            >
              {{ getCurrentBredcrumb_1 }}
            </nuxt-link>
          </td>
          <td>
            <div
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 2"
              class="bredcrumb__pointer"
            >
              /
            </div>
          </td>
          <td>
            <nuxt-link
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 2"
              exact
              :to="getCurrentPathForBredcrumb_2"
              class="bredcrumb"
              :class="{ current: $store.state.bredcrumbs.bredcrumbAmount == 2 }"
            >
              {{ getCurrentBredcrumb_2 }}
            </nuxt-link>
          </td>
          <td>
            <div
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 3"
              class="bredcrumb__pointer"
            >
              /
            </div>
          </td>
          <td>
            <nuxt-link
              v-if="$store.state.bredcrumbs.bredcrumbAmount >= 3"
              exact
              :to="getCurrentPathForBredcrumb_3"
              class="bredcrumb"
              :class="{ current: $store.state.bredcrumbs.bredcrumbAmount == 3 }"
            >
              {{ getCurrentBredcrumb_3 }}
            </nuxt-link>
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: mapGetters('bredcrumbs', [
    'getCurrentBredcrumb_1',
    'getCurrentBredcrumb_2',
    'getCurrentBredcrumb_3',
    'getBgColor',
    'getCurrentPathForBredcrumb_1',
    'getCurrentPathForBredcrumb_2',
    'getCurrentPathForBredcrumb_3'
  ])
}
</script>

<style scoped>
.bredcrumbs {
  overflow-x: scroll;
  z-index: 1;
  position: absolute;
  top: 135px;
}
.bredcrumbs>.container{
  padding-left: 0;
}
.bredcrumbs::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.bredcrumbs__list {
  width: fit-content;
  border: none;
  border-collapse: separate;
  border-spacing: 7px;
}
.bredcrumbs__list td {
  width: fit-content;
  vertical-align: top;
}
.bredcrumb, .bredcrumb__pointer {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #D4D4D4;
  text-decoration: none;
  white-space: nowrap;
}
.bredcrumb.current {
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #D4D4D4;
}
@media (max-width: 480px) {
  .bredcrumbs{
    width: 90vw;
  }
  .bredcrumbs__list {
    align-items: flex-start;
  }
}
</style>
