<template>
  <div id="Week3Component2Step1">
    <div class="label">NAME</div>
    <input v-model="name" type="text" @input="updateName">
  </div>
</template>

<script>
export default {
  name: 'Week3Component2Step1',
  data() {
    return {
      name: ''
    }
  },
  methods: {
    updateName(name) {
      this.$emit('updateName', { key: 'name', value: this.name })
    }
  }
}
</script>
