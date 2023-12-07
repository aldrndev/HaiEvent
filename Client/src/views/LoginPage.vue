<script>
import { mapActions } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'LoginPage',
  data() {
    return {
      dataLogin: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['loginUser', 'googleLogin']),
    handleCredentialResponse(response) {
      const idToken = response.credential
      this.googleLogin(idToken)
    },
    loginUserHandler() {
      this.loginUser(this.dataLogin)
    }
  },
  mounted() {
    google.accounts.id.initialize({
      client_id: '675504661602-2pk3gcgtes6pg88e302ogffr488jlm5j.apps.googleusercontent.com',
      callback: this.handleCredentialResponse
    })
    google.accounts.id.renderButton(document.getElementById('buttonDiv'), {
      theme: 'outline',
      size: 'large'
    })
  }
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="p-8 bg-white rounded-xl shadow-2xl w-1/3">
      <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">Login</h2>
      <form @submit.prevent="loginUserHandler">
        <!-- Email -->
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Email</label>
          <input type="email" v-model="dataLogin.email" class="mt-1 p-2 w-full border rounded-md" />
        </div>
        <!-- Password -->
        <div class="mb-4">
          <label class="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            v-model="dataLogin.password"
            class="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
      <div class="flex justify-center mt-5" id="buttonDiv"></div>
    </div>
  </div>
</template>
