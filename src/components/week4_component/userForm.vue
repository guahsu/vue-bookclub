<template>
  <div id="userForm">
    <div v-if="hasFormColumn">
      <div class="input-group">
        <label>
          <span>姓名:</span>
        </label>
        <input type="text" v-model="formColumns.name" @input="updateColumns($event, 'name')"/>
      </div>
      <div type="text" class="input-group">
        <label>
          <span>身分證字號:</span>
        </label>
        <input v-model="formColumns.idNumber" @input="updateColumns($event, 'idNumber')"/>
      </div>
      <div type="text" class="input-group">
        <label>
          <span>地址:</span>
        </label>
        <input type="text" v-model="formColumns.address" @input="updateColumns($event, 'address')"/>
      </div>
      <div class="input-group">
        <label>
          <span>電話:</span>
        </label>
        <input type="tel" v-model="formColumns.phone" @input="updateColumns($event, 'phone')"/>
      </div>
      <div class="input-group">
        <label>
          <span>生日:</span>
        </label>
        <input type="date" v-model="formColumns.brithday" @input="updateColumns($event, 'brithday')"/>
      </div>
    </div>
    <div class="complete-form" v-if="form">
      <span>即時表單資料</span>
      <div>姓名: {{form.name}}</div>
      <div>身分證字號: {{form.idNumber}}</div>
      <div>地址: {{form.address}}</div>
      <div>電話: {{form.phone}}</div>
      <div>生日: {{form.brithday}}</div>
    </div>
    <!-- <div class="update-form-btn">
      <button @click="updateFrom">更新表單資料</button>
    </div>
    <div class="complete-form" v-if="form && form.updateAt">
      <span>表單資料已更新</span>
      <div>姓名: {{form.name}}</div>
      <div>身分證字號: {{form.idNumber}}</div>
      <div>地址: {{form.address}}</div>
      <div>電話: {{form.phone}}</div>
      <div>生日: {{form.brithday}}</div>
      <div>最後更新時間: {{form.updateAt.toString()}}</div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'userForm',
  props: {
    form: {
      type: Object,
      default: () => {}
    },
    updateMethod: Function
  },
  computed: {
    hasFormColumn() {
      const self = this
      self.formColumns = Object.assign({}, self.form)
      return self.form
    }
  },
  data() {
    return {
      formColumns: null
    }
  },
  methods: {
    updateColumns(e, name) {
      let field = {
        value: e.target.value,
        name: name
      }
      this.$store.commit('user/updateFormColumns', field)
    },
    updateFrom() {
      this.updateMethod(this.formColumns)
    }
  }
}
</script>

<style lang="scss">
  .input-group{
    display: block;
    font-size: 16px;
    label{
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 10px;
      width: 85px;
    }
    input{
      border-radius: 5px;
      height: 20px;
      width: 150px;
    }
  }
  .update-form-btn{
    margin-top: 50px;
    button{
      border-radius: 5px;
      height: 40px;
      cursor: pointer;
    }
  }
  .complete-form{
    margin-top: 50px;
  }
</style>
