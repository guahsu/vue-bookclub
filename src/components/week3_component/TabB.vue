<template>
  <div id="TabB">
    <h1>TabB</h1>
    <h2>{{ data }}</h2>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: 'TabB',
  props: ['data', 'data2'],
  data() {
    return {

    }
  }
}
</script>
