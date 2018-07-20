<template>
  <div id="TabC">
    <h2>TabC</h2>
    <input v-model="childMessage" type="text">
    <h3 :class="{'hasPink': hasPink}">Message: {{ message }}</h3>
    <button @click="emitMsg">emit</button>
  </div>
</template>

<script>
export default {
  name: 'TabC',
  props: {
    message: {
      type: String,
      default: '',
      required: true
    }
  },
  data() {
    return {
      childMessage: ''
    }
  },
  computed: {
    hasPink() {
      return this.message.match(/pink/gi)
    }
  },
  methods: {
    emitMsg() {
      this.$emit('childMessage', this.childMessage)
    }
  }
}
</script>

<style lang="scss">
#TabC {
  .hasPink {
    color: pink;
  }
}
</style>
