<!-- src/components/TopRichestCountries.vue -->
<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4 text-accent">💰 Top 12 Países Mais Ricos</h2>

    <div v-if="store.loading" class="text-gray-500 text-center py-6">Carregando...</div>
    <div v-if="store.error" class="text-red-500 text-center py-6">{{ store.error }}</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CountryCard
        v-for="(country, index) in richestCountries"
        :key="index"
        :country="country"
        :rank="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useCountryStore } from '@/stores/useCountryStore'
import CountryCard from './CountryCard.vue'

const store = useCountryStore()

const richestCountryNames = [
  'United States',
  'China',
  'Japan',
  'Germany',
  'India',
  'United Kingdom',
  'France',
  'Italy',
  'Brazil',
  'Canada',
  'Russia',
  'South Korea',
]

onMounted(() => {
  store.fetchCountries()
})

const richestCountries = computed(() =>
  richestCountryNames
    .map((name) => store.countries.find((c) => c.name.common === name))
    .filter(Boolean),
)
</script>
