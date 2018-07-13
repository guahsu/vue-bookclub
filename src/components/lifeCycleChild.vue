<template>
  <div>
    child
    <div ref="msgDiv">{{msg}}</div>
      <div v-if="msg1">Message $nextTick: {{msg1}}</div>
      <div v-if="msg2">Message $nextTick: {{msg2}}</div>
      <div v-if="msg3">Message $nextTick: {{msg3}}</div>
    <button @click="changeMsg">Change the Message</button>
  </div>
</template>
<script>

export default {
  name: 'lifeCycleChild',
  data() {
    return {
      msg: 'Hello Vue.',
      msg1: '',
      msg2: '',
      msg3: ''
    }
  },
  methods: {
    changeMsg() {
      this.msg = 'Hello world'
      console.log('update value')
      this.msg1 = this.$refs.msgDiv.innerHTML
      this.$nextTick(() => {
        this.msg2 = this.$refs.msgDiv.innerHTML
      })
      this.msg3 = this.$refs.msgDiv.innerHTML
    }
  },
  beforeCreate() {
    console.log('beforeCreate Child')
  },
  created() {
    console.log('create Child')
  },
  beforeMount() {
    console.log('beforeMounted Child')
  },
  mounted() {
    console.log('mounted Child')
  },
  beforeUpdate() {
    console.log('beforeUpdate Child')
  },
  updated() {
    console.log('updated Child')
  },
  beforeDestroy() {
    console.log('beforeDestroy Child')
  },
  destroyed() {
    console.log('destroyed Child')
  }
}
</script>
