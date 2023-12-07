import { defineStore } from 'pinia'
import axios from 'axios'

// const BASE_URL = 'https://isproject.my.id'
const BASE_URL = 'http://localhost:3000'

export const useMessageStore = defineStore('messageStore', {
  state() {
    return {
      messages: []
    }
  },
  actions: {
    updateMessages(state, newMessages) {
      state.messages = newMessages
    },
    async fetchMessages(loggedInUserId) {
      try {
        const { data } = await axios.get(`${BASE_URL}/message/${loggedInUserId}`)
        this.messages = data
      } catch (error) {
        console.error('Error fetching messages:', error)
      }
    },
    async sendMessage(message) {
      try {
        await axios.post(`${BASE_URL}/message`, message)
        this.messages.push(message)
      } catch (error) {
        console.error('Error sending message:', error)
      }
    }
  }
})
