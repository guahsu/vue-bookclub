<template>
  <div id="shop-calculation">
    購物車
    <div class="shop-calculation-form">
      <div>已經挑選：{{selectedItems.items}}樣</div>
      <div>目前金額：{{selectedItems.budget}}元</div>
      <div class="shop-items">
        <button v-for="item in shopItems" :key="item.name" @click="addItems(item)">
          {{`${item.name} $${item.cost}`}}
        </button>
      </div>
      <div class="action-buttons">
        <button @click="clearItems">Clear shop car</button>
        <button @click="checkoutItems">Checkout</button>
      </div>
      <div class="payment-info" v-if="paymentInfo">
        <div v-for="(cost, key) in paymentInfo" :key="key">{{key}}:{{cost}}元</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'shop-calculation',
  computed: {
    ...mapGetters({
      shopItems: 'getItemsInfo',
      paymentInfo: 'getPaymentInfo'
    }),
    selectedItems() {
      let selected = this.$store.state.selectedItems
      let costs = selected.map(e => e.cost)
      return {
        items: selected.length,
        budget: costs.reduce((a, b) => a + b, 0)
      }
    }
  },
  data() {
    return {
      currentShopItems: [
        { name: 'Apple', cost: 10 },
        { name: 'Banana', cost: 15 },
        { name: 'Cookie', cost: 8 },
        { name: 'Chocolate', cost: 20 }
      ]
    }
  },
  mounted() {
    this.initShopItems(this.currentShopItems)
  },
  methods: {
    ...mapActions([
      'initShopItems',
      'checkoutShopItesm',
      'clearShopItesm'
    ]),
    addItems(item) {
      this.$store.commit('shop/addItems', item)
    },
    checkoutItems() {
      this.checkoutShopItesm()
    },
    clearItems() {
      this.$store.commit('shop/clearItems')
    }
  }
}
</script>

<style lang="scss" scoped>
  .shop-calculation-form{
    width:500px;
    font-size: 16px;
    .shop-items,
    .action-buttons{
      width: 100%;
    }
    .shop-items{
      margin-top: 10px;
      button{
        margin-right:4px;
        background-color: transparent;
        color:  black;
        cursor: pointer;
        &:hover{
          background-color: #ffffff
        }
      }
    }
    .action-buttons{
      margin-top: 5px;
      width: 100%;
      button{
        margin-right:6px;
        float:right;
      }
    }
    .payment-info{
      margin-top: 100px;
    }
  }
  button {
    width: 24%;
    height: 40px;
  }
</style>
