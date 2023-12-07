<script>
export default {
  name: 'MessagePage',
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Arif',
          avatar: 'https://placekitten.com/50/50',
          messages: [
            { id: 1, content: 'Hi there!', isOwn: false },
            { id: 2, content: 'How can I help you today?', isOwn: false }
          ]
        },
        {
          id: 2,
          name: 'Rizal',
          avatar: 'https://placekitten.com/48/48',
          messages: [
            { id: 3, content: 'Hello!', isOwn: true },
            { id: 4, content: 'I have a question about your events.', isOwn: false }
          ]
        }
      ],
      selectedUser: null,
      newMessage: ''
    }
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user
    },
    sendMessage() {
      if (this.newMessage.trim()) {
        this.selectedUser.messages.push({
          id: Date.now(),
          content: this.newMessage,
          isOwn: true
        })
        this.newMessage = ''
      }
    }
  }
}
</script>

<template>
  <div class="h-full flex flex-col">
    <h2 class="text-2xl font-bold mb-6">Message</h2>

    <div class="flex flex-grow bg-gray-100 rounded-lg overflow-hidden">
      <!-- Users List -->
      <div class="w-1/3 p-4 bg-white overflow-y-auto">
        <ul>
          <li
            v-for="user in users"
            :key="user.id"
            @click="selectUser(user)"
            class="cursor-pointer hover:bg-gray-100 p-2"
          >
            <div class="flex items-center">
              <img :src="user.avatar" alt="User Avatar" class="w-12 h-12 rounded-full" />
              <span class="ml-4 text-lg font-semibold">{{ user.name }}</span>
            </div>
          </li>
        </ul>
      </div>

      <!-- Chat Area -->
      <div class="w-2/3 flex flex-col p-4">
        <div v-if="selectedUser" class="flex flex-col h-full">
          <!-- Chat History -->
          <div class="flex-1 overflow-y-auto">
            <div
              v-for="message in selectedUser.messages"
              :key="message.id"
              :class="{ 'text-right': message.isOwn }"
              class="p-2"
            >
              <div class="inline-block rounded-lg px-4 py-2 bg-gray-300">
                {{ message.content }}
              </div>
            </div>
          </div>

          <!-- Text Input -->
          <div class="flex-shrink-0">
            <textarea
              v-model="newMessage"
              class="w-full p-2 rounded-lg"
              placeholder="Type your message..."
              @keydown.enter.exact.prevent="sendMessage"
            ></textarea>
            <div class="flex justify-center">
              <button @click="sendMessage" class="w-1/3 mt-2 bg-blue-500 text-white p-2 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
