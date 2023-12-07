<script>
export default {
  name: 'ProfilePage',
  data() {
    return {
      user: {
        photo: localStorage.getItem('imageUrl') ?? '',
        name: localStorage.getItem('name') ?? '',
        email: localStorage.getItem('email') ?? '',
        username: localStorage.getItem('username') ?? '',
        address: '1234 Street, City, Country',
        phoneNumber: '+1234567890'
      }
    }
  }
}
</script>

<template>
  <div class="p-8 max-w-2xl mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">Your Profile</h2>
    <div class="bg-white p-6 rounded-lg shadow-md">
      <!-- Image Photo -->
      <img
        :src="user.photo"
        alt="User Photo"
        class="w-24 h-24 object-cover rounded-full mx-auto mb-4"
      />

      <!-- Name -->
      <div class="mb-4">
        <label class="text-gray-700 font-medium">Name</label>
        <p class="text-gray-600">{{ user.name }}</p>
      </div>

      <!-- Email -->
      <div class="mb-4">
        <label class="text-gray-700 font-medium">Email</label>
        <p class="text-gray-600">{{ user.email }}</p>
      </div>

      <!-- Username -->
      <div class="mb-4">
        <label class="text-gray-700 font-medium">Username</label>
        <p class="text-gray-600">{{ user.username }}</p>
      </div>

      <!-- Address -->
      <div class="mb-4">
        <label class="text-gray-700 font-medium">Address</label>
        <p class="text-gray-600">{{ user.address }}</p>
      </div>

      <!-- Phone Number -->
      <div class="mb-4">
        <label class="text-gray-700 font-medium">Phone Number</label>
        <p class="text-gray-600">{{ user.phoneNumber }}</p>
      </div>
    </div>
  </div>
</template>
