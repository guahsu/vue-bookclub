<template>
  <div id="Week3Component2Step4">
    <div class="label">NAME： {{ name }}</div>
    <div class="label">EMAIL： {{ email }}</div>
    <div class="label">PHONE： {{ phone }}</div>
  </div>
</template>

<script>
export default {
  name: 'Week3Component2Step4',
  props: ['name', 'email', 'phone'],
  data() {
    return {}
  }
}
</script>
