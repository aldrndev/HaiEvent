<script>
export default {
  name: 'WithdrawPage',
  data() {
    return {
      totalEarnings: 1000,
      withdrawAmount: 0
    }
  },
  methods: {
    handleWithdraw() {
      if (this.withdrawAmount <= this.totalEarnings && this.withdrawAmount > 0) {
        this.totalEarnings -= this.withdrawAmount
        console.log('Withdrawal successful!', this.withdrawAmount)
      } else {
        console.error('Invalid withdrawal amount!')
      }
    }
  }
}
</script>

<template>
  <div class="p-8 max-w-md mx-auto">
    <h2 class="text-2xl font-semibold mb-6 text-center text-blue-600">Withdraw</h2>
    <div class="mb-4 bg-gray-100 p-4 rounded-md">
      <label class="block text-gray-700 font-medium">Total Earnings</label>
      <p class="text-gray-800 text-lg font-semibold">{{ totalEarnings }}</p>
    </div>
    <form @submit.prevent="handleWithdraw">
      <div class="mb-4">
        <label for="withdrawAmount" class="block text-gray-700 font-medium">Withdraw Amount</label>
        <input
          type="number"
          id="withdrawAmount"
          v-model.number="withdrawAmount"
          class="mt-1 p-2 w-full border rounded-md"
          required
          :max="totalEarnings"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
      >
        Submit Withdrawal
      </button>
    </form>
  </div>
</template>
