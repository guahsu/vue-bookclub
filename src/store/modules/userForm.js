const types = {
  initFormDetail: 'user/initFormDetail',
  updateFormDetail: 'user/updateFormDetail',
  updateFormColumns: 'user/updateFormColumns',
  setFormDetail: 'user/setFormDetail'
}

const state = {
  formDetail: null
  // formDetail: {
  //   name: null,
  //   phone: null,
  //   address: null,
  //   idNumber: null,
  //   brithday: null
  // }
}

const getters = {
  getFormDetail: state => state.formDetail
}

const actions = {
  updateUserForm({ commit }, formData) {
    commit(types.setFormDetail, formData)
  }
}

const mutations = {
  [types.initFormDetail](state, form) {
    state.formDetail = form
  },
  [types.setFormDetail](state, form) {
    form.updateAt = new Date()
    state.formDetail = form
  },
  [types.updateFormColumns](state, field) {
    state.formDetail[field.name] = field.value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
