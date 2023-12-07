<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'ExploreEventPage',
  components: {
    Navbar
  },
  data() {
    return {
      events: [
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        },
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        },
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        },
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        },
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        },
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        },
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        },
        {
          id: 1,
          image: 'https://haievent.aldrincloud.com/image/20230901124356_64f17a1c3e9cd.jpg',
          title: 'Event 1',
          date: '26 September 2023',
          price: 'Rp100.000',
          publisher: 'Penerbit A'
        }
      ]
    }
  }
}
</script>

<template>
  <Navbar />
  <div class="container">
    <div class="mx-auto p-4 flex">
      <!-- Search Feature -->
      <div class="w-1/5 p-7 mx-auto shadow-lg">
        <label class="block text-sm font-medium text-gray-700 mb-3">Search</label>
        <div class="mb-4">
          <input
            type="text"
            placeholder="Search by name..."
            class="w-full p-2 rounded-md text-black border-2 block border-gray-400"
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-700 mb-3">Category</label>
          <div class="mt-1">
            <label class="block">
              <input type="checkbox" class="form-checkbox" value="Music" />
              <span class="ml-2">Music</span>
            </label>
            <label class="block">
              <input type="checkbox" class="form-checkbox" value="Art" />
              <span class="ml-2">Art</span>
            </label>
          </div>
        </div>

        <div class="mb-4">
          <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
          <select id="location" class="mt-3 block border-gray-600 w-full rounded-md border p-2.5">
            <option>Jakarta</option>
            <option>Bandung</option>
          </select>
        </div>
      </div>

      <!-- Events Display -->
      <div class="w-4/5 pl-4">
        <div class="flex justify-between items-center mb-4">
          <!-- Items per page selector -->
          <div>
            <span>Show: </span>
            <select class="rounded-md border p-2 border border-gray-600">
              <option>8</option>
              <option>12</option>
              <option>16</option>
            </select>
          </div>

          <!-- Sorting selector -->
          <div>
            <span>Sort: </span>
            <select class="rounded-md border p-2 border border-gray-600">
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
            </select>
          </div>
        </div>

        <!-- Events Grid -->
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="(event, index) in events"
            :key="index"
            class="bg-white p-4 rounded-xl shadow-md"
          >
            <!-- Image Event -->
            <img :src="event.image" alt="Event Image" class="w-full h-48 object-cover rounded-md" />

            <!-- Judul Event -->
            <h2 class="mt-2 text-xl font-semibold">{{ event.title }}</h2>

            <!-- Tanggal Event -->
            <p class="text-gray-600">{{ event.date }}</p>

            <!-- Harga Tiket -->
            <p class="font-bold">{{ event.price }}</p>

            <!-- Garis Bawah -->
            <hr class="my-2" />

            <!-- Nama Penerbit Event -->
            <p class="text-gray-500">{{ event.publisher }}</p>
          </div>
        </div>

        <!-- Pagination -->
        <div class="mt-4 flex justify-center">
          <!-- Pagination buttons... -->
        </div>
      </div>
    </div>
  </div>
</template>
