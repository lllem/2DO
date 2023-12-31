import { createRouter, createWebHashHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/stats',
      name: 'stats',
      component: () => import('../views/StatsView.vue')
    },

    {
      path: '/new',
      name: 'new-task',
      component: () => import('../views/NewTaskView.vue')
    },

    {
      path: '/tasks',
      name: 'tasks',
      children: [
        {
          path: '',
          name: 'tasksAll',
          component: () => import('../views/TasksAllView.vue')
        },

        {
          path: '/tasks/:id',
          name: 'taskView',
          props: true,
          component: () => import('../views/TaskView.vue'),
        },

      ],

    },


    {
      path: '/:catchAll(.*)',
      name: 'err404',
      component: () => import('../views/Err404View.vue'),
      hidden: true,
    },
  ]
})

export default router
