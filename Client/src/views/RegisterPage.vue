<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'RegisterPage',
  data() {
    return {
      dataRegister: {
        image: '',
        name: '',
        email: '',
        username: '',
        password: '',
        address: '',
        phoneNumber: '',
        role: ''
      },
      imagePreview: null,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(useUserStore, ['register']),
    async handleRegister() {
      this.isLoading = true
      try {
        await this.register(this.dataRegister)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    previewImage(event) {
      const file = event.target.files[0]
      if (file) {
        this.dataRegister.image = file
        this.imagePreview = URL.createObjectURL(file)
      }
    }
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="p-8 bg-white rounded-md shadow-md w-1/2">
      <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">Register</h2>
      <div class="loading-container" v-if="isLoading">
        <div class="loading-spinner"></div>
        <p class="loading-text">Request is being processed, please wait...</p>
      </div>
      <form @submit.prevent="handleRegister" enctype="multipart/form-data">
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Profile Photo</label>
          <input type="file" @change="previewImage" class="mt-1 p-2 w-full border rounded-md" />
          <img
            :src="imagePreview"
            alt="Preview"
            v-if="imagePreview"
            class="mt-2 w-20 h-20 object-cover rounded-md"
          />
        </div>

        <div class="flex justify-between gap-4 mb-4">
          <div class="w-1/2">
            <label class="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              v-model="dataRegister.name"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div class="w-1/2">
            <label class="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              v-model="dataRegister.email"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>

        <div class="flex justify-between gap-4 mb-4">
          <div class="w-1/2">
            <label class="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              v-model="dataRegister.username"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div class="w-1/2">
            <label class="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              v-model="dataRegister.password"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>
        </div>

        <div class="flex justify-between gap-4 mb-4">
          <div class="w-1/2">
            <label class="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              v-model="dataRegister.phoneNumber"
              class="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div class="w-1/2">
            <label class="block text-gray-700 font-medium">Register as</label>
            <select v-model="dataRegister.role" class="mt-1 p-2 w-full border rounded-md">
              <option value="buyer">Buyer</option>
              <option value="organizer">Organizer</option>
            </select>
          </div>
        </div>

        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Address</label>
          <textarea
            v-model="dataRegister.address"
            class="mt-1 p-2 w-full border rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8); /* Latar belakang hitam dengan opacity 80% */
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
}

.loading-spinner {
  border: 10px solid rgba(0, 0, 0, 0.1);
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

.loading-text {
  color: #1c1b1b; /* Text color */
  font-size: 16px; /* Font size */
  margin-top: 10px; /* Top margin from the spinner */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
