<script>
export default {
  name: 'TransactionPage',
  data() {
    return {
      transactions: [
        {
          id: 1,
          buyer: 'John Doe',
          eventName: 'Concert XYZ',
          totalTickets: 3,
          ticketType: 'VIP',
          totalPrice: '$300'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="p-8 max-w-full mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">Transaction</h2>

    <table class="min-w-full bg-white rounded-lg shadow-md">
      <thead>
        <tr class="text-gray-700 text-left">
          <th class="py-2 px-4">No</th>
          <th class="py-2 px-4">Buyer</th>
          <th class="py-2 px-4">Purchased Event</th>
          <th class="py-2 px-4">Total Tickets</th>
          <th class="py-2 px-4">Ticket Type</th>
          <th class="py-2 px-4">Total Price</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(transaction, index) in transactions"
          :key="transaction.id"
          class="text-gray-600 text-left"
        >
          <td class="py-2 px-4">{{ index + 1 }}</td>
          <td class="py-2 px-4">{{ transaction.buyer }}</td>
          <td class="py-2 px-4">{{ transaction.eventName }}</td>
          <td class="py-2 px-4">{{ transaction.totalTickets }}</td>
          <td class="py-2 px-4">{{ transaction.ticketType }}</td>
          <td class="py-2 px-4">{{ transaction.totalPrice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
