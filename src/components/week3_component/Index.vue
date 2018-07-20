<template>
  <div id="W3Index">
    <h1>Index {{ tabIndex }}</h1>
    <h2>{{ childMessage }}</h2>
    <h2>{{ obj }}</h2>
    <input v-model="message" type="text">
    <div class="tab-buttons">
      <span
        v-for="(tab, index) in tabs"
        @click="tabIndex = index"
        :class="{ 'active': tabIndex === index }"
        :key="index">
        {{ tab.name }}
      </span>
    </div>
    <div class="tab-content">
      <TabA v-show="tabIndex === 0" :data="obj"></TabA>
      <TabB v-show="tabIndex === 1" :data="childMessage">
        <div slot="content">
          <div style="width: 50px; height: 50px; border: solid 1px #333"></div>
        </div>
      </TabB>
      <TabC v-show="tabIndex === 2" :message="message" @childMessage="getChildMessage"></TabC>
    </div>
  </div>
</template>

<script>
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'
export default {
  name: 'W3Index',
  components: {
    TabA,
    TabB,
    TabC
  },
  data() {
    return {
      message: '',
      childMessage: '',
      obj: {
        name: 'AAAAA',
        value: 123
      },
      tabIndex: 0,
      tabs: [{ name: 'TabA' }, { name: 'TabB' }, { name: 'TabC' }]
    }
  },
  methods: {
    getChildMessage(msg) {
      this.childMessage = msg
    }
  }
}
</script>

<style lang="scss">
#W3Index {
  .tab {
    &-buttons {
      margin-top: 30px;
      span {
        margin-right: 20px;
        padding: 5px 20px;
        border: solid 1px #333;
        border-radius: 5px;
        cursor: pointer;
        user-select: none;
        &:hover,
        &.active {
          background-color: #333;
          color: #fff;
        }
      }
    }
    &-content {
      margin-top: 30px;
      border: solid 1px #333;
      padding: 20px;
    }
  }
}
</style>
