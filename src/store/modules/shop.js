const types = {
  ADD_CART_ITEM: 'ADD_CART_ITEM',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM'
}

const state = {
  cartItems: []
}

const getters = {
  cartItemCount: state => state.cartItems.length,
  cartItemTotalAmount: state => state.cartItems.reduce((total, product) => total + product.price, 0)
}

const actions = {
  addCartItem({ commit }, data) {
    commit(types.ADD_CART_ITEM, data)
  },
  removeCartItem({ commit }, index) {
    commit(types.REMOVE_CART_ITEM, index)
  }
}

const mutations = {
  [types.ADD_CART_ITEM](state, data) {
    state.cartItems.push(data)
  },
  [types.REMOVE_CART_ITEM](state, index) {
    state.cartItems.splice(index, 1)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
