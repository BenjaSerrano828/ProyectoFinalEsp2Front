import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/landingPage',
      name: 'landingPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LandingPage.vue'),
      props: (route) => ({ isAdmin: route.query.isAdmin === 'true' }),
    },
    {
      path: '/landingPageAdmin',
      name: 'landingPageAdmin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LandingPageAdmin.vue'),
    },
    {
      path: '/addStudentPage',
      name: 'addStudentPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddStudentPage.vue')
    },
    {
      path: '/addSubjectPage',
      name: 'addSubjectPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddSubjectPage.vue')
    },
    {
      path: '/asignSubjectPage',
      name: 'asignSubjectPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AsignSubjectPage.vue')
    },
    {
      path: '/createNewsPage',
      name: 'createNewsPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CreateNewsPage.vue')
    },
    {
      path: '/editNewsPage',
      name: 'editNewsPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EditNewsPage.vue')
    },
    {
      path: '/editProfilePage',
      name: 'editProfilePage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EditProfilePage.vue')
    },
    {
      path: '/newsListPage',
      name: 'newsListPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewsListPage.vue')
    },
    {
      path: '/profilePage',
      name: 'profilePage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfilePage.vue')
    },
    {
      path: '/scheduleViewPage',
      name: 'scheduleViewPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ScheduleViewPage.vue')
    },
    {
      path: '/studentsListPage',
      name: 'studentsListPage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/StudentsListPage.vue')
    },
  ]
})

export default router
