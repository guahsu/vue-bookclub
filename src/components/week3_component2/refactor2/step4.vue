<template>
  <div id="Week3Component2Step4">
    <div class="label">NAME： {{ userData.name }}</div>
    <div class="label">EMAIL： {{ userData.email }}</div>
    <div class="label">PHONE： {{ userData.phone }}</div>
  </div>
</template>

<script>
export default {
  name: 'Week3Component2Step4',
  props: {
    userData: {
      type: Object,
      default: () => { return {} },
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
