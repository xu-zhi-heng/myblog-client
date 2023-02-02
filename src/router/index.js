import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/allBlogs',
    name: 'allBlogs',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/partBlogs',
    name: 'partBlogs',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/blogContent',
    name: 'blogContent',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/writeNote',
    name: 'writeNote',
    component: () => import('../views/WriteNote.vue')
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: () => import('../views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
