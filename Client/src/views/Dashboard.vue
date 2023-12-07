<script>
export default {
  name: 'Dashboard'
}
</script>

<template>
  <!-- Judul Dashboard -->
  <h2 class="text-2xl font-bold p-5">Dashboard</h2>

  <!-- Cards -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="bg-white p-6 rounded-xl shadow-lg">
      <h3 class="text-lg font-bold mb-4">Total Earnings</h3>
      <p class="text-2xl font-bold">Rp. 1.000.000.000</p>
    </div>

    <div class="bg-white p-6 rounded-md shadow-md">
      <h3 class="text-lg font-bold mb-4">Total Events</h3>
      <p class="text-2xl font-bold">50</p>
    </div>

    <div class="bg-white p-6 rounded-md shadow-md">
      <h3 class="text-lg font-bold mb-4">Total Transactions</h3>
      <p class="text-2xl font-bold">380</p>
    </div>
  </div>
  <!-- end of dashboard -->
</template>
