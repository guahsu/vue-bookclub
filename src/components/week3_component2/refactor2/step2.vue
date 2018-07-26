<template>
  <div id="Week3Component2Step2">
    <div class="label">EMAIL</div>
    <input v-model="email" type="text" @input="updateEmail">
  </div>
</template>

<script>
export default {
  name: 'Week3Component2Step2',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    updateEmail(email) {
      this.$emit('updateEmail', { key: 'email', value: this.email })
    }
  }
}
</script>
