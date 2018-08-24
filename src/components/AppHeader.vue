<template>
  <div id="AppHeader">
    <div class="shop-title">Vuex Shop</div>
    <select v-model="cloneCountry">
      <option value="tw">TW</option>
      <option value="us">US</option>
    </select>
    <div class="shop-cart">
      購物車內共有：
      <router-link :to="{ name: 'CheckOut' }">{{ cartItemCount }}</router-link>
      件商品
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppHeader',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters('shop', ['cartItemCount', 'country']),
    // cloneCountry() {
    //   return JSON.parse(JSON.stringify(this.country))
    // }
    country: {
      get() {
        return this.$store.state.shop.country
      },
      set(newValue) {
        this.$store.dispatch('shop/setCountry', newValue)
        // this.$store.commit('shop/setCountry', newValue)
      }
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
