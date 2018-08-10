import * as types from './mutations_type.js'

export const state = {
  itemsInfo: [],
  selectedItems: [],
  paymentInfo: null
}

export const mutations = {
  [types.initItems](state, items) {
    this.state.itemsInfo = items
  },
  [types.addItems](state, item) {
    this.state.selectedItems.push(item)
  },
  [types.checkoutItems](state) {
    let payment = {
      Total: 0
    }
    this.state.selectedItems.forEach(item => {
      payment[item.name] = payment[item.name] || 0
      payment[item.name] += item.cost
      payment.Total += item.cost
    })
    this.state.paymentInfo = payment
  },
  [types.clearItems](state) {
    this.state.selectedItems = []
    this.state.paymentInfo = null
  }
}
