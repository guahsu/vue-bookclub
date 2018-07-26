<template>
  <div id="Week3Component2Step2">
    <div class="label">PHONE</div>
    <input v-model="phone" type="text" @input="updatePhone">
  </div>
</template>

<script>
export default {
  name: 'Week3Component2Step2',
  data() {
    return {
      phone: ''
    }
  },
  methods: {
    updatePhone(phone) {
      this.$emit('updatePhone', { key: 'phone', value: this.phone })
    }
  }
}
</script>
