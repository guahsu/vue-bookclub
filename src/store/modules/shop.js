import shopAPI from '@/api/shop'
const types = {
  ADD_CART_ITEM: 'ADD_CART_ITEM',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  SET_PRODUCT_LIST_DATA: 'SET_PRODUCT_LIST_DATA',
  SET_COUNTRY: 'SET_COUNTRY'
}

const state = {
  country: 'tw',
  cartItems: [],
  productListData: []
}

const getters = {
  country: state => state.country,
  productListData: state => state.productListData,
  cartItemCount: state => state.cartItems.length,
  cartItemTotalAmount: state => state.cartItems.reduce((total, product) => total + product.price, 0)
}

const actions = {
  setCountry({ commit }, country) {
    commit(types.SET_COUNTRY, country)
  },
  getProductListData({ commit }, data) {
    shopAPI.getProductData().then(res => {
      commit(types.SET_PRODUCT_LIST_DATA, res)
    })
  },
  addCartItem({ commit }, data) {
    // if 庫存檢查 then
    commit(types.ADD_CART_ITEM, data)
    // else alert('庫存不足)
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
  },
  [types.SET_PRODUCT_LIST_DATA](state, data) {
    state.productListData = data
  },
  [types.SET_COUNTRY](state, country) {
    state.country = country
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
