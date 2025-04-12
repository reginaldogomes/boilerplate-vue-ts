<template>
  <div class="max-w-6xl mx-auto p-6">
    <h2 class="text-3xl font-bold mb-6 text-center">Top 12 Países Mais Populosos</h2>

    <div v-if="topCountries.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="country in topCountries"
        :key="country.cca3"
        class="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center"
      >
        <img
          :src="country.flags.svg"
          :alt="`Bandeira de ${country.name.common}`"
          class="w-32 h-20 object-cover rounded border mb-4"
        />
        <h3 class="text-xl font-semibold mb-2">{{ country.name.common }}</h3>
        <p class="text-gray-700 text-sm">Capital: {{ country.capital?.[0] || '—' }}</p>
        <p class="text-gray-700 text-sm">População: {{ country.population.toLocaleString() }}</p>
      </div>
    </div>

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

const store = useCountryStore()
const { countries } = storeToRefs(store)

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
