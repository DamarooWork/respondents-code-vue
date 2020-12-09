import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import BlackList from '../views/BlackList.vue'
import CallCenter from '../views/CallCenter.vue'
import UsersOptions from '@/components/Options.vue'
import UsersQuestions from '@/components/Questions.vue';
import UsersLogic from '@/components/Logic.vue';
import UsersTerms from '@/components/Terms.vue';
import UsersRespondents from '@/components/Respondents.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  },
  {
    path: '/black-list',
    name: 'BlackList',
    component: () => import('../views/BlackList.vue')
  },
  {
    path: '/call-center',
    name: 'CallCenter',
    component: () => import('../views/CallCenter.vue')
  },
  {
    path: '/users/parametres',
    name: 'UsersOptions',
    component: () => import('../components/Options.vue')
  },
  ,
  {
    path: '/users/questions',
    name: 'UsersQuestions',
    component: () => import('../components/Questions.vue')
  },
  ,
  {
    path: '/users/logic',
    name: 'UsersLogic',
    component: () => import('../components/Logic.vue')
  },
  ,
  {
    path: '/users/terms',
    name: 'UsersTerms',
    component: () => import('../components/Terms.vue')
  },
  ,
  {
    path: '/users/respondents',
    name: 'UsersRespondents',
    component: () => import('../components/Respondents.vue')
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
