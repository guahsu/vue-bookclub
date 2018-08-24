<template>
  <div id="AppHeader">
    <div class="shop-title">Vuex Shop</div>
    <div class="shop-cart">
      購物車內共有：
      <router-link :to="{ name: 'CheckOut' }">{{ $store.state.shop.cartItems.length }}</router-link>
      件商品
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
#AppHeader {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: #ebebeb;
  margin-bottom: 30px;
  .shop {
    &-title {
      font-size: 40px;
      font-weight: 900;
    }
    &-cart {
      font-size: 20px;
    }
  }
}
</style>
