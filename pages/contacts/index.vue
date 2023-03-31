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
      title: 'Контакты компании EduPartner в Уфе',
      meta: [
        {
          name: 'description',
          content: 'Контакты компании Edupartner. Предлагаем услуги по бизнес-диагностике, управленческому и кадровому консалтингу, бизнес-аудиты, бизнес-консультации, внутренний и внешний интернет-маркетинг. Полный цикл работ под ключ. Прозрачная отчетность и анализ до/после ⭐Бесплатная консультация. Звоните!☎ +7 (800)-101-19-45'
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
