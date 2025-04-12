<template>
  <div class="max-w-6xl mx-auto p-6">
    <h2 class="text-3xl font-bold mb-6 text-center">Top 12 Países Mais Populosos</h2>

    <!-- Loading Skeleton -->
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-pulse">
      <div v-for="n in 6" :key="n" class="bg-white p-6 rounded-2xl shadow-md space-y-4">
        <div class="w-full h-40 bg-gray-300 rounded"></div>
        <div class="h-5 bg-gray-300 rounded w-2/3 mx-auto"></div>
        <div class="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
      </div>
    </div>

    <!-- Lista de Países -->
    <div
      v-else-if="topCountries.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <CountryCard
        v-for="(country, index) in topCountries"
        :key="country.cca3"
        :country="country"
        :rank="index"
      />
    </div>

    <!-- Nenhum país -->
    <div v-else class="text-center text-gray-500 text-lg mt-10">
      Nenhum país disponível no momento.
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useCountryStore } from '@/stores/useCountryStore'
import type { Country } from '@/@types/Country'
import CountryCard from '@/components/CountryCard.vue'

const store = useCountryStore()
const { countries, loading } = storeToRefs(store)

onMounted(() => {
  if (!countries.value.length) {
    store.fetchCountries()
  }
})

const topCountries = computed(() =>
  countries.value
    .filter((c): c is Country => !!c && !!c.population && !!c.flags?.svg && !!c.name?.common)
    .sort((a, b) => b.population - a.population)
    .slice(0, 12),
)
</script>
