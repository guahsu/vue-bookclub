import * as types from './mutations_type.js'

export const initShopItems = ({ commit }, items) => {
  commit(types.initItems, items)
}

export const checkoutShopItesm = ({ commit }) => {
  commit(types.checkoutItems)
}
