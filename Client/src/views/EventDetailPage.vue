<script>
import Carousel from '../components/Carousel.vue'
import Navbar from '../components/Navbar.vue'
import { mapState } from 'pinia'
import { useOrganizerStore } from '../stores/organizer'

export default {
  name: 'EventDetailPage',
  components: {
    Carousel,
    Navbar
  },

  data() {
    return {
      activeTab: 'description',
      event: {
        tickets: ['Regular', 'VIP', 'Supreme']
      },
      selectedTickets: [],
      map: null
    }
  },
  computed: {
    totalPrice() {},
    ...mapState(useOrganizerStore, ['eventDetail'])
  },
  methods: {
    decreaseTicket(id) {},
    increaseTicket(id) {}
  },
  mounted() {
    this.$nextTick(() => {
      const mapContainer = this.$refs.mapContainer

      if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
        console.error('Google Maps JavaScript API belum diload')
        return
      }

      this.map = new google.maps.Map(mapContainer, {
        center: {
          lat: +this.eventDetail.latitude || -6.208763,
          lng: +this.eventDetail.longitude || 106.845599
        },
        zoom: 15
      })

      new google.maps.Marker({
        map: this.map,
        position: this.map.getCenter()
      })
    })
  }
}
</script>

<template>
  <Navbar />

  <div class="container mx-auto p-4">
    <div class="grid grid-cols-3 gap-4">
      <!-- Image Event Card dan Tabs -->
      <div class="col-span-2">
        <!-- Image Event -->
        <div class="bg-gray-300 h-64 rounded overflow-hidden">
          <img :src="eventDetail.imageUrl" alt="Event Image" class="w-full h-full object-cover" />
        </div>

        <!-- Tabs -->
        <div class="mt-4 flex space-x-4"><h2>Description</h2></div>

        <!-- Description Tab -->
        <div v-if="activeTab === 'description'" class="mt-4">
          <p class="font-bold">Category:</p>
          <p>{{ eventDetail.category }}</p>
          <p class="font-bold mt-2">Description:</p>
          <p>{{ eventDetail.description }}</p>
          <p class="font-bold mt-2">Location:</p>
          <p class="mb-5">{{ eventDetail.address }}</p>
          <div ref="mapContainer" style="width: 100%; height: 500px"></div>
        </div>

        <!-- Ticket Tab -->
        <div v-if="activeTab === 'ticket'" class="mt-4">
          <!-- Ticket Cards -->
          <div v-for="ticket in event.tickets" :key="ticket.id" class="p-4 border rounded mb-2">
            <p>ticket.type</p>
            <div class="flex items-center">
              <button @click="decreaseTicket(ticket.id)">-</button>
              <p class="mx-2">ticket.quantity</p>
              <button @click="increaseTicket(ticket.id)">+</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Event Card dan Summary Card -->
      <div class="col-span-1">
        <!-- Detail Event Card -->
        <div class="p-4 border rounded mb-4">
          <h2 class="font-bold text-xl">{{ eventDetail.eventName }}</h2>
          <p>{{ eventDetail.startDate }}</p>
          <p>{{ eventDetail.startTime }}</p>
          <p>{{ eventDetail.country }}</p>
          <hr class="my-2" />
          <p>Aldrin</p>
        </div>

        <!-- Summary Card -->
        <div class="p-4 border rounded">
          <h2 class="font-bold text-xl mb-2">Summary</h2>
          <div v-for="ticket in selectedTickets" :key="ticket.id" class="mb-2">
            <p>ticket.type : ticket.quantity</p>
          </div>
          <p class="font-bold">Total: totalPrice</p>
          <button class="bg-blue-500 text-white px-4 py-2 rounded mt-4">Purchase</button>
        </div>
      </div>
    </div>
  </div>
</template>
