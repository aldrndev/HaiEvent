import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

// const BASE_URL = 'https://isproject.my.id'
const BASE_URL = 'http://localhost:3000'

export const useUserStore = defineStore('user', {
  state() {
    return {
      dataUser: {
        currentName: localStorage.getItem('name') ?? '',
        currentEmail: localStorage.getItem('email') ?? '',
        currentUsername: localStorage.getItem('username') ?? '',
        currentRole: localStorage.getItem('role') ?? '',
        currentStatus: localStorage.getItem('isVerified') ?? '',
        currentId: localStorage.getItem('id') ?? ''
      }
    }
  },
  actions: {
    async register(dataRegister) {
      try {
        const formData = new FormData()
        formData.append('imageUrl', dataRegister.image)
        formData.append('name', dataRegister.name)
        formData.append('email', dataRegister.email)
        formData.append('username', dataRegister.username)
        formData.append('password', dataRegister.password)
        formData.append('address', dataRegister.address)
        formData.append('phoneNumber', dataRegister.phoneNumber)
        formData.append('role', dataRegister.role)

        const { data } = await axios({
          url: `${BASE_URL}/register`,
          method: 'POST',
          data: formData
        })

        Swal.fire('Success', data.message, 'success')
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    },
    async verifyEmail(token) {
      try {
        const { data } = await axios({
          url: `${BASE_URL}/verify-email`,
          method: 'GET',
          params: {
            token
          }
        })
        Swal.fire('Success', data.message, 'success')
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    },

    async loginUser(dataLogin) {
      try {
        const { data } = await axios({
          url: `${BASE_URL}/login`,
          method: 'POST',
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })

        this.dataUser.currentName = data.user.name
        this.dataUser.currentEmail = data.user.email
        this.dataUser.currentUsername = data.user.username
        this.dataUser.currentRole = data.user.role
        this.dataUser.currentStatus = data.user.isVerified
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('name', data.user.name)
        localStorage.setItem('role', data.user.role)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('isVerified', data.user.isVerified)
        localStorage.setItem('imageUrl', data.user.imageUrl)
        localStorage.setItem('id', data.user.id)
        if (this.dataUser.currentRole === 'buyer') {
          this.router.push('/explore')
        } else if (this.dataUser.currentRole === 'organizer') {
          this.router.push('/dashboard')
        }

        Swal.fire('Success', data.message, 'success')
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    },
    logout() {
      localStorage.clear()
      Swal.fire('Success', 'Logout succesfully', 'success')
      this.router.push('/')
    },
    async googleLogin(idToken) {
      try {
        const { data } = await axios({
          url: `${BASE_URL}/login-google`,
          method: 'POST',
          data: {
            token: idToken
          }
        })
        this.dataUser.currentName = data.user.name
        this.dataUser.currentEmail = data.user.email
        this.dataUser.currentUsername = data.user.username
        this.dataUser.currentRole = data.user.role
        this.dataUser.currentStatus = data.user.isVerified
        localStorage.setItem('access_token', data.access_token)
        localStorage.setItem('email', data.user.email)
        localStorage.setItem('name', data.user.name)
        localStorage.setItem('role', data.user.role)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('isVerified', data.user.isVerified)
        localStorage.setItem('imageUrl', data.user.imageUrl)
        localStorage.setItem('id', data.user.id)

        if (this.dataUser.currentRole === 'buyer') {
          this.router.push('/explore')
        } else if (this.dataUser.currentRole === 'organizer') {
          this.router.push('/dashboard')
        }
        Swal.fire('Success', data.message, 'success')
      } catch (error) {
        Swal.fire('Error', error.response.data.message, 'error')
      }
    }
  }
})
