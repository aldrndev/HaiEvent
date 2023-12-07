<script>
export default {
  name: 'EventPreview',
  props: ['getEvent'],
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
  <div v-for="(event, index) in events" :key="index" class="bg-white p-4 rounded-xl shadow-md">
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
</template>
