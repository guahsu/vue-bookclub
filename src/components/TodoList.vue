<template>
  <div id="TodoList">
    <div class="top-area">
      <input class="top-area-input" type="text" v-model.trim="todoMessage">
      <button class="top-area-add" @click="addTodo">Add Todo</button>
      <div class="top-area-info">
        共有: {{ todoList.length }} 筆資料，有 {{ checkedItemCount.length }} 筆完成
      </div>
      <div v-if="isMaxLimit" class="top-area-info--full">已達新增上限！v-if</div>
      <div v-show="isMaxLimit" class="top-area-info--full">已達新增上限！v-show</div>
    </div>
    <div class="content">
      <ul class="todolist">
        <li v-for="(todo, index) in todoList" :key="index" class="todolist-item">
          <input :id="`todo-${index}`" type="checkbox" v-model="todo.checked">
          <label :for="`todo-${index}`" :class="[{ 'todolist-item--checked': todo.checked }]">{{ todo.name }}</label>
          <button class="todolist-item-remove" @click="removeTodo(index)">remove</button>
        </li>
      </ul>
    </div>
    <!--
    <input class="top-area-input" type="text" v-model="firstName">
    <input class="top-area-input" type="text" v-model="lastName">
    {{ fullName }}
    {{ todoList }}
      -->
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      // checkedItemCount: [],
      // firstName: '',
      // lastName: '',
      // fullName: '',
      maxLimit: 3,
      todoMessage: '',
      todoList: [{ name: 'test', checked: false }]
    }
  },
  computed: {
    // fullName() {
    //   return `${this.firstName} ${this.lastName}`
    // },
    checkedItemCount() {
      return this.todoList.filter(todo => todo.checked)
    },
    isMaxLimit() {
      return this.todoList.length === this.maxLimit
    }
  },
  watch: {
    // todoMessage (newVal, oldVal) {
    //   console.log(newVal, oldVal)
    // }
    // todoList: {
    //   handler(newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     this.checkedItemCount = this.todoList.filter(todo => todo.checked)
    //   },
    //   deep: true
    // }
  },
  methods: {
    addTodo() {
      if (!this.isMaxLimit && this.todoMessage) {
        this.todoList.push({
          name: this.todoMessage,
          checked: false
        })
        this.todoMessage = ''
      }
    },
    removeTodo(index) {
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
#TodoList {
  * {
    user-select: none;
  }
  .top-area {
    &-info {
      &--full {
        color: pink;
      }
    }
  }
  .todolist {
    &-item {
      &--checked {
        text-decoration: line-through;
      }
    }
  }
}
</style>
