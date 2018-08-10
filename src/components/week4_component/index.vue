<template>
  <div id="vuexExample">
    <h1>Veux example</h1>
    <button @click="cahnggeFormTab">變更表單</button>
    <shopCalculation v-if="formIndex === 1"/>
    <userForm v-if="formIndex === 2" :form="formDetail" :updateMethod="updateForm"/>
  </div>
</template>

<script>
import shopCalculation from './shopCalculation'
import userForm from './userForm'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'vuexExample',
  components: {
    shopCalculation,
    userForm
  },
  computed: {
    ...mapGetters({
      formDetail: 'getFormDetail'
    })
  },
  data() {
    return {
      formIndex: 2,
      userFormDetail: {
        name: null,
        phone: null,
        address: null,
        idNumber: null,
        brithday: null
      }
    }
  },
  mounted() {
    this.$store.commit('user/initFormDetail', this.userFormDetail)
  },
  methods: {
    ...mapActions([
      'updateUserForm'
    ]),
    cahnggeFormTab() {
      this.formIndex = this.formIndex === 1 ? 2 : 1
    },
    updateForm(formData) {
      this.updateUserForm(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
