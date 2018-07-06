<template>
  <div id="TodoList">
    <h3>2018-07-06 Todo list answer</h3>
    <div class="top-area">
      <input class="top-area-input" type="text" v-model.trim="todoMessage">
      <button class="top-area-add" @click="addTodo">Add Todo</button>
      <div class="top-area-info">
        共有: {{ todoList.length }} 筆資料
      </div>
    </div>
    <div class="content">
      <ul class="todolist">
        <li v-for="(todo, index) in todoList" :key="index" class="todolist-item">
          <input :id="`todo-${index}`" type="checkbox" v-model="todo.checked">
          <label :for="`todo-${index}`" :class="[{ 'todolist-item--checked': todo.checked }]">
            {{ todo.name }}
          </label>
        </li>
      </ul>
    </div>
    <hr/>
    已完成事項, 共{{completeList.length}}筆
    <div class="content">
      <ul class="todolist">
        <li v-for="(com, index) in completeList" :key="index" class="todolist-item">
          {{com.name}}
          <button class="todolist-item-remove" @click="resetTodo(com)">reset</button>
          <button class="todolist-item-remove" @click="removeTodo(index)">remove</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      maxLimit: 3,
      todoMessage: '',
      todoList: [{ name: 'test', checked: false }]
    }
  },
  computed: {
    completeList() {
      return this.todoList.filter(todo => todo.checked)
    }
  },
  methods: {
    addTodo() {
      this.todoList.push({
        name: this.todoMessage,
        checked: false
      })
      this.todoMessage = ''
    },
    removeTodo(index) {
      this.todoList.splice(index, 1)
    },
    resetTodo(com) {
      com.checked = false
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
