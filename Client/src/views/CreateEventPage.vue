<script>
import { mapState, mapActions } from 'pinia'
import { useOrganizerStore } from '../stores/organizer'

export default {
  name: 'CreateEventPage',
  data() {
    return {
      eventData: {
        imageUrl: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        eventName: '',
        category: '',
        ticketType1: '',
        ticketPrice1: '',
        ticketType2: '',
        ticketPrice2: '',
        ticketType3: '',
        ticketPrice3: '',
        address: '',
        country: '',
        province: '',
        city: '',
        postalCode: '',
        latitude: '',
        longitude: '',
        description: '',
        categories: '',
        stock1: '',
        stock2: '',
        stock3: ''
      },
      imagePreview: null,
      isLoading: false
    }
  },
  computed: {
    ...mapState(useOrganizerStore, ['dataCategory'])
  },
  methods: {
    ...mapActions(useOrganizerStore, ['showCategories', 'createEvent']),
    showCategoriesHandler() {
      this.showCategories()
    },
    async createEventHandler() {
      console.log(this.eventData)
      this.isLoading = true
      try {
        await this.createEvent(this.eventData)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
    previewImage(event) {
      const file = event.target.files[0]
      if (file) {
        this.eventData.imageUrl = file
        this.imagePreview = URL.createObjectURL(file)
      }
    }
  },
  created() {
    this.showCategoriesHandler()
  }
}
</script>

<template>
  <div class="p-8 mt-5 max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-y-auto flex-grow">
    <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">Create Event</h2>
    <div class="loading-container" v-if="isLoading">
      <div class="loading-spinner"></div>
      <p class="loading-text">Request is being processed, please wait...</p>
    </div>
    <form @submit.prevent="createEventHandler" class="space-y-6" enctype="multipart/form-data">
      <div>
        <label class="block text-sm font-medium text-gray-700">Event Image</label>
        <input type="file" @change="previewImage" class="w-full p-2 border rounded-md" />
        <img
          :src="imagePreview"
          alt="Preview"
          v-if="imagePreview"
          class="mt-2 object-cover rounded-md"
        />
      </div>

      <div class="flex space-x-4">
        <div class="w-1/2">
          <label class="block text-sm font-medium text-gray-700">Start Date</label>
          <input type="date" v-model="eventData.startDate" class="w-full p-2 border rounded-md" />
        </div>
        <div class="w-1/2">
          <label class="block text-sm font-medium text-gray-700">End Date</label>
          <input type="date" v-model="eventData.endDate" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="w-1/2">
          <label class="block text-sm font-medium text-gray-700">Start Time</label>
          <input type="time" v-model="eventData.startTime" class="w-full p-2 border rounded-md" />
        </div>
        <div class="w-1/2">
          <label class="block text-sm font-medium text-gray-700">End Time</label>
          <input type="time" v-model="eventData.endTime" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Event Name</label>
          <input type="text" v-model="eventData.eventName" class="w-full p-2 border rounded-md" />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Category</label>
          <select v-model="eventData.category" class="w-full p-2 border rounded-md">
            <option v-for="cat in dataCategory" :key="cat.id" :value="cat.id">
              {{ cat.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Ticket Type 1</label>
          <input type="text" v-model="eventData.ticketType1" class="w-full p-2 border rounded-md" />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Ticket Price 1</label>
          <input
            type="number"
            v-model="eventData.ticketPrice1"
            class="w-full p-2 border rounded-md"
          />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Stock 1</label>
          <input type="number" v-model="eventData.stock1" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Ticket Type 2</label>
          <input type="text" v-model="eventData.ticketType2" class="w-full p-2 border rounded-md" />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Ticket Price 2</label>
          <input
            type="number"
            v-model="eventData.ticketPrice2"
            class="w-full p-2 border rounded-md"
          />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Stock 2</label>
          <input type="number" v-model="eventData.stock2" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Ticket Type 3</label>
          <input type="text" v-model="eventData.ticketType3" class="w-full p-2 border rounded-md" />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Ticket Price 3</label>
          <input
            type="number"
            v-model="eventData.ticketPrice3"
            class="w-full p-2 border rounded-md"
          />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Stock 3</label>
          <input type="number" v-model="eventData.stock3" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" v-model="eventData.address" class="w-full p-2 border rounded-md" />
        </div>
        <div class="flex-1">
          <label class="block text-sm font-medium text-gray-700">Country</label>
          <input type="text" v-model="eventData.country" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="w-1/3">
          <label class="block text-sm font-medium text-gray-700">Province</label>
          <input type="text" v-model="eventData.province" class="w-full p-2 border rounded-md" />
        </div>
        <div class="w-1/3">
          <label class="block text-sm font-medium text-gray-700">City</label>
          <input type="text" v-model="eventData.city" class="w-full p-2 border rounded-md" />
        </div>
        <div class="w-1/3">
          <label class="block text-sm font-medium text-gray-700">Postal Code</label>
          <input type="text" v-model="eventData.postalCode" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div class="flex space-x-4">
        <div class="w-1/2">
          <label class="block text-sm font-medium text-gray-700">Latitude</label>
          <input type="text" v-model="eventData.latitude" class="w-full p-2 border rounded-md" />
        </div>
        <div class="w-1/2">
          <label class="block text-sm font-medium text-gray-700">Longitude</label>
          <input type="text" v-model="eventData.longitude" class="w-full p-2 border rounded-md" />
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700">Event Description</label>
        <textarea
          v-model="eventData.description"
          class="w-full h-32 p-2 border rounded-md"
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Publish Event
      </button>
    </form>
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
