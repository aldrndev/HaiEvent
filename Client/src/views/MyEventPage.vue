<script>
export default {
  name: 'MyEventPage',
  data() {
    return {
      events: [
        {
          id: 1,
          name: 'Concert XYZ',
          image: 'path_to_image',
          category: 'Music',
          totalSales: 150,
          status: 'active'
        }
      ]
    }
  },
  methods: {
    changeStatus(id, status) {
      console.log(`Event with id ${id} is now ${status}`)
    }
  }
}
</script>

<template>
  <div class="p-8 max-w-full mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">My Event</h2>

    <table class="min-w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr class="text-gray-700 text-left">
          <th class="py-2 px-4">No</th>
          <th class="py-2 px-4">Event Name</th>
          <th class="py-2 px-4">Image Event</th>
          <th class="py-2 px-4">Category</th>
          <th class="py-2 px-4">Total Sales Ticket</th>
          <th class="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in events" :key="event.id" class="text-gray-600 text-left">
          <td class="py-2 px-4">{{ index + 1 }}</td>
          <td class="py-2 px-4">{{ event.name }}</td>
          <td class="py-2 px-4">
            <img :src="event.image" alt="Event Image" class="w-16 h-16 object-cover rounded-md" />
          </td>
          <td class="py-2 px-4">{{ event.category }}</td>
          <td class="py-2 px-4">{{ event.totalSales }}</td>
          <td class="py-2 px-4">
            <select
              v-model="event.status"
              @change="changeStatus(event.id, event.status)"
              class="p-2 border rounded-md"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
