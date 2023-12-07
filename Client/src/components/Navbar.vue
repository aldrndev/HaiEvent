<script>
import { RouterView, RouterLink } from 'vue-router'
export default {
  name: 'Navbar',
  components: {
    RouterView,
    RouterLink
  }
}
</script>

<template>
  <nav class="bg-gray-800 p-4 text-white">
    <div class="mx-auto flex justify-between items-center p-4">
      <!-- Logo Text -->
      <div class="flex-shrink-0 font-bold text-2xl tracking-wider">
        <RouterLink to="/" class="hover:text-gray-400 transition duration-300">HAIEVENT</RouterLink>
      </div>

      <!-- Search Box -->
      <div class="flex-grow mx-8 relative">
        <input
          type="text"
          placeholder="Search event by name..."
          class="w-4/5 p-2 pl-8 rounded-md text-black"
        />
        <span class="absolute left-2 top-1/2 transform -translate-y-1/2">
          <i class="fas fa-search text-gray-400"></i>
        </span>
      </div>

      <!-- Menu Items -->
      <div class="flex space-x-5 items-center">
        <RouterLink to="/" class="font-semibold hover:text-gray-400 transition duration-300">
          <i class="fa-solid fa-house"></i> Home</RouterLink
        >
        <RouterLink
          to="/dashboard/add-event"
          class="font-semibold hover:text-gray-400 transition duration-300"
          ><i class="fa-regular fa-pen-to-square"></i> Create Event</RouterLink
        >
        <RouterLink to="/explore" class="font-semibold hover:text-gray-400 transition duration-300"
          ><i class="fa-regular fa-compass"></i> Explore Event</RouterLink
        >
        <RouterLink to="/register">
          <button
            class="bg-gray-600 font-semibold hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Register
          </button></RouterLink
        >
        <RouterLink to="/login">
          <button
            class="bg-blue-700 font-semibold hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition duration-300"
          >
            Login
          </button></RouterLink
        >
      </div>
    </div>
  </nav>
</template>
