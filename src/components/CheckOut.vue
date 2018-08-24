<template>
  <div id="CheckOut">
    <router-link :to="{ name: 'ProductList' }" class="btn-back">返回商品列表</router-link>
    <div class="cart">
      <div class="cart-product" v-for="(product, index) in $store.state.shop.cartItems" :key="index">
        <img class="cart-product-img" src="@/assets/logo.png">
        <div class="cart-product-name">{{ product.name }}</div>
        <div class="cart-product-price">{{ product.price }}</div>
        <div class="cart-product-remove" @click="removeProduct(index)">移除</div>
      </div>
      <h2>總金額 {{ cartItemTotalAmount }}</h2>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CheckOut',
  data() {
    return {}
  },
  computed: {
    ...mapGetters('shop', ['cartItemTotalAmount'])
    // totalAmount() {
    //   return this.$store.state.shop.cartItems.reduce((total, product) => total + product.price, 0)
    // }
  },
  methods: {
    removeProduct(index) {
      this.$store.commit('shop/REMOVE_CART_ITEM', index)
      // this.$store.dispatch('shop/removeCartItem', index)
    }
  }
}
</script>

<style lang="scss" scoped>
#CheckOut {
  padding: 50px;
  .cart {
    margin-top: 30px;
    &-product {
      display: flex;
      align-items: center;
      padding: 20px;
      margin: 10px 0;
      border: 1px solid #333;
      &-img {
        height: 50px;
      }
      &-name {
        margin: 0 20px;
        font-size: 20px;
      }
      &-price {
        font-size: 20px;
        &::before {
          content: '$ ';
        }
        &::after {
          content: ' 元';
        }
      }
      &-remove {
        margin-left: 20px;
        font-size: 14px;
        padding: 5px 20px;
        border-radius: 20px;
        background-color: #f56c6c;
        color: #fff;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background-color: lighten(#f56c6c, 5%);
        }
      }
    }
  }
  .btn {
    &-back {
      margin-bottom: 20px;
      padding: 10px 20px;
      border-radius: 20px;
      background-color: #41b883;
      color: #fff;
      text-decoration: none;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: lighten(#41b883, 5%);
      }
    }
  }
}
</style>
