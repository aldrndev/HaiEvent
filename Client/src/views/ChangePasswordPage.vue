<script>
export default {
  name: 'ChangePasswordPage',
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleChangePassword() {
      if (this.newPassword === this.confirmPassword) {
        console.log('Password changed successfully!')
      } else {
        console.error('New Password and Confirm New Password do not match!')
      }
    }
  }
}
</script>

<template>
  <div class="p-8 max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">Change Password</h2>
    <form @submit.prevent="handleChangePassword">
      <div class="mb-4">
        <label for="currentPassword" class="block text-gray-700 font-medium"
          >Current Password</label
        >
        <input
          type="password"
          id="currentPassword"
          v-model="currentPassword"
          class="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div class="mb-4">
        <label for="newPassword" class="block text-gray-700 font-medium">New Password</label>
        <input
          type="password"
          id="newPassword"
          v-model="newPassword"
          class="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div class="mb-4">
        <label for="confirmPassword" class="block text-gray-700 font-medium"
          >Confirm New Password</label
        >
        <input
          type="password"
          id="confirmPassword"
          v-model="confirmPassword"
          class="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Change Password
      </button>
    </form>
  </div>
</template>
