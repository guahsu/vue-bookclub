<template>
  <div>
    <button @click="backPreWeek">回上週</button>
    {{queryData}}
    <input type="text" v-model="queryData.limit" />
    <child />
  </div>
</template>
<script>
import child from '@/components/lifeCycleChild'
import queryData from '@/config/queyData'

export default {
  name: 'lifeCycle',
  components: {
    child
  },
  data() {
    return {
      queryData: null
    }
  },
  methods: {
    backPreWeek() {
      this.$router.push({
        path: '/week1/todolistans'
      })
    }
  },
  beforeCreate() {
    console.log('beforeCreate Parent')
  },
  created() {
    console.log('create Parent')
  },
  beforeMount() {
    this.queryData = queryData
    console.log('beforeMounted Parent')
  },
  mounted() {
    // this.queryData.limit = 20
    console.log('mounted Parent')
  },
  beforeUpdate() {
    console.log('beforeUpdate Parent')
  },
  updated() {
    console.log('updated Parent')
  },
  beforeDestroy() {
    console.log('beforeDestroy Parent')
  },
  destroyed() {
    console.log('destroyed Parent')
  }
}
</script>
