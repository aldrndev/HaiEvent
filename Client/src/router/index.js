import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import EventDetailPage from '../views/EventDetailPage.vue'
import ExploreEventPage from '../views/ExploreEventPage.vue'
import DashboardPage from '../views/DashboardPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import LoginPage from '../views/LoginPage.vue'
import verifyEmailPage from '../views/verifyEmailPage.vue'
import Dashboard from '../views/Dashboard.vue'
import MessagePage from '../views/MessagePage.vue'
import CreateEventPage from '../views/CreateEventPage.vue'
import MyEventPage from '../views/MyEventPage.vue'
import TransactionPage from '../views/TransactionPage.vue'
import ProfilePage from '../views/ProfilePage.vue'
import ChangePasswordPage from '../views/ChangePasswordPage.vue'
import WithdrawPage from '../views/WithdrawPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/event-detail/:eventId',
      name: 'eventDetailPage',
      component: EventDetailPage
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreEventPage
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage,
      children: [
        {
          path: 'home',
          name: 'dashboardPage',
          component: Dashboard
        },
        {
          path: 'message',
          name: 'message',
          component: MessagePage
        },
        {
          path: 'add-event',
          name: 'addEvent',
          component: CreateEventPage
        },
        {
          path: 'myevents',
          name: 'myEvents',
          component: MyEventPage
        },
        {
          path: 'transaction',
          name: 'transaction',
          component: TransactionPage
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfilePage
        },
        {
          path: 'change-password',
          name: 'changePassword',
          component: ChangePasswordPage
        },
        {
          path: 'withdraw',
          name: 'withdraw',
          component: WithdrawPage
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/verify-email',
      name: 'verifyemail',
      component: verifyEmailPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token && to.name === 'addEvent') {
    next('/login')
  } else if (localStorage.access_token && to.name === 'login') {
    next('/')
  } else if (localStorage.access_token && to.name === 'register') {
    next('/')
  } else {
    next()
  }
})

export default router
