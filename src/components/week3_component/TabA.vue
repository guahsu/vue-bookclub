<template>
  <div id="TabA">
    <h1>TabA</h1>
    <h2>{{ childData }}</h2>
    <button @click="changeObj">changeObj</button>
  </div>
</template>

<script>
export default {
  name: 'TabA',
  // props: ['data'],
  props: {
    data: {
      type: Object,
      default: () => { return {} },
      required: false
    }
  },
  data() {
    return {
      childData: JSON.parse(JSON.stringify(this.data))
    }
  },
  methods: {
    changeObj() {
      this.childData.name = 'BBBBBB'
    }
  }
}
</script>
