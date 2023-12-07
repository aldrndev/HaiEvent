<script>
import { RouterView, RouterLink } from 'vue-router'
import Dashboard from './Dashboard.vue'
import MessagePage from './MessagePage.vue'
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'DashboardPage',
  components: {
    RouterLink,
    RouterView,
    Dashboard,
    MessagePage
  },
  data() {
    return {
      currentUser: {
        name: localStorage.getItem('name') ?? '',
        email: localStorage.getItem('email') ?? '',
        username: localStorage.getItem('username') ?? '',
        role: localStorage.getItem('role') ?? '',
        imageUrl: localStorage.getItem('imageUrl') ?? ''
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['logout']),
    logoutHandler() {
      this.logout()
    }
  }
}
</script>

<template>
  <div class="h-screen flex">
    <!-- Sidebar -->
    <div class="flex flex-col w-1/5 bg-white text-gray-700 p-4 shadow-lg overflow-hidden">
      <!-- Profile Card -->
      <div class="mb-3 mt-2 p-4 bg-white rounded-lg shadow-md">
        <img
          :src="currentUser.imageUrl"
          alt="Profile Photo"
          class="w-10 h-10 object-contain rounded-full mx-auto mb-2"
        />
        <h3 class="text-xl font-bold text-center">{{ currentUser.name }}</h3>
        <p class="text-center">{{ currentUser.email }}</p>
      </div>

      <!-- Management Event Menu -->
      <div class="p-4 flex-shrink-0">
        <h4 class="text-lg font-bold mb-4 border-b pb-2">Management</h4>
        <ul>
          <li class="flex items-center mb-4">
            <i class="fa-solid fa-server mr-2"></i>
            <RouterLink :to="{ name: 'dashboardPage' }">Dashboard</RouterLink>
          </li>
          <li class="flex items-center mb-4">
            <i class="fas fa-envelope mr-2"></i>
            <RouterLink :to="{ name: 'message' }">Message</RouterLink>
          </li>
          <!-- More Menu Items... -->
          <li class="flex items-center mb-4">
            <i class="fa-solid fa-pen-to-square mr-2"></i>
            <RouterLink :to="{ name: 'addEvent' }">Create Event</RouterLink>
          </li>
          <li class="flex items-center mb-4">
            <i class="fa-solid fa-ticket mr-2"></i>
            <RouterLink :to="{ name: 'myEvents' }">My Event</RouterLink>
          </li>
          <li class="flex items-center mb-4">
            <i class="fa-solid fa-clock-rotate-left mr-2"></i>
            <RouterLink :to="{ name: 'transaction' }">Transaction</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Account Menu -->
      <div class="p-4 flex-shrink-0">
        <h4 class="text-lg font-bold mb-4 border-b pb-2">Account</h4>
        <ul>
          <li class="flex items-center mb-4">
            <i class="fas fa-user mr-2"></i>
            <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
          </li>

          <li class="flex items-center mb-4">
            <i class="fa-solid fa-lock-open mr-2"></i>
            <RouterLink :to="{ name: 'changePassword' }">Change Password</RouterLink>
          </li>
          <li class="flex items-center mb-4">
            <i class="fa-solid fa-money-bill-1-wave mr-2"></i>
            <RouterLink :to="{ name: 'withdraw' }">Withdraw</RouterLink>
          </li>
          <li class="flex items-center mb-4">
            <i class="fa-solid fa-right-from-bracket mr-2"></i>
            <a href="#" @click.prevent="logoutHandler">Logout</a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full p-8 overflow-y-auto flex-grow">
      <!-- content here -->
      <Dashboard v-if="$route.name === 'dashboard'" />
      <RouterView />
    </div>
  </div>
</template>
