<template>
  <div>
    <AppContacts />
  </div>
</template>

<script>
import AppContacts from '~/components/Contacts/AppContacts.vue'
export default {
  name: 'ContactsPage',
  components: { AppContacts },
  head () {
    return {
      title: '',
      meta: [
        {
          name: 'description',
          content: ''
        },
        {
          name: 'keywords',
          content: ''
        }
      ]
    }
  },
  mounted () {
    this.$store.commit('bredcrumbs/changeAmountBredcrumbs', { value: 1 })
    this.$store.commit('bredcrumbs/changeBredcrumbs', {
      values: ['Контакты'],
      paths: ['/contacts']
    })
  }
}
</script>
