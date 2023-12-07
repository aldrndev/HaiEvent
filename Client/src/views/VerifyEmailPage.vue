<script>
import LoginPage from './LoginPage.vue'
import { mapActions, mapState } from 'pinia'
import { useUserStore } from '../stores/user'

export default {
  name: 'VerifyEmailPage',
  data() {
    return {
      clickVerifyEmail: false
    }
  },
  methods: {
    ...mapActions(useUserStore, ['verifyEmail']),
    verifyEmailHandler() {
      this.verifyEmail(this.$route.query.token)
      this.clickVerifyEmail = true
    }
  },
  components: {
    LoginPage
  },
  created() {
    if (!this.clickVerifyEmail) {
      this.verifyEmailHandler()
    }
  }
}
</script>

<template>
  <LoginPage />
</template>
