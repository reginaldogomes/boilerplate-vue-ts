<!-- src/components/CountryCard.vue -->
<template>
  <div class="rounded-lg p-4 shadow bg-blue-50 hover:shadow-md transition">
    <img
      :src="country.flags.svg"
      :alt="country.name.common"
      class="w-full h-40 object-cover mb-4 rounded"
    />

    <div class="flex justify-between items-center mb-2">
      <h3 class="text-xl font-semibold text-primary">{{ country.name.common }}</h3>
      <span v-if="rank !== undefined" class="text-lg font-bold" :class="badgeClass(rank)">
        {{ medal(rank) }}
      </span>
    </div>

    <p class="text-sm text-gray-600">
      <strong>Capital:</strong> {{ country.capital?.[0] || 'N/A' }}
    </p>
    <p class="text-sm text-gray-600">
      <strong>População:</strong> {{ country.population.toLocaleString() }}
    </p>
    <router-link
      :to="`/country/${country.name.common}`"
      class="inline-block mt-4 bg-primary text-blue-500 px-4 py-2 rounded hover:bg-primary-dark transition"
    >
      Ver Detalhes
    </router-link>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  country: {
    flags: { svg: string }
    name: { common: string }
    capital?: string[]
    population: number
  }
  rank?: number
}>()

const badgeClass = (rank: number) => {
  return (
    {
      0: 'text-yellow-500',
      1: 'text-gray-400',
      2: 'text-orange-500',
    }[rank] || 'text-secondary'
  )
}

const medal = (rank: number) => {
  return (
    {
      0: '🥇',
      1: '🥈',
      2: '🥉',
    }[rank] || `${rank + 1}º`
  )
}
</script>
