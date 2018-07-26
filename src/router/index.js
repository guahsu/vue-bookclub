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
    },
    {
      path: '/week3_component/',
      name: 'week3_component',
      component: () => import('@/components/week3_component/Index')
    },
    {
      path: '/week3_component2/',
      name: 'week3_component2',
      component: () => import('@/components/week3_component2/Index')
    },
    {
      path: '/week3_component2/refactor',
      name: 'week3_component2_refactor',
      component: () => import('@/components/week3_component2/refactor/Index')
    },
    {
      path: '/week3_component2/refactor2',
      name: 'week3_component2_refactor2',
      component: () => import('@/components/week3_component2/refactor2/Index')
    }
  ]
})
