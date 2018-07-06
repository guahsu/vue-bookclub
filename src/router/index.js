import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TodoList from '@/components/TodoList'
import TodoListAns from '@/components/TodoListAns'
import lifeCycle from '@/views/LifeCycle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/week1/todolist',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/week1/todolistans',
      name: 'TodoListAns',
      component: TodoListAns
    },
    {
      path: '/week2/lifeCycle',
      name: 'lifeCycle',
      component: lifeCycle
    }
  ]
})
