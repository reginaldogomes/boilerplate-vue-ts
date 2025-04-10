<template>
  <div class="p-6 max-w-6xl mx-auto">
    <h1 class="text-3xl font-bold mb-4 text-primary">🌍 Lista de Países</h1>

    <div v-if="loading" class="text-center py-10 text-gray-600">Carregando países...</div>

    <div v-else-if="error" class="text-center text-red-600 py-10">
      {{ error }}
    </div>

    <div v-else>
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <input
          v-model="searchTerm"
          type="text"
          placeholder="Buscar país..."
          class="w-full sm:w-64 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />

        <select
          v-model="sortBy"
          class="w-full sm:w-52 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="name">Ordenar por Nome</option>
          <option value="population">Ordenar por População</option>
        </select>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <CountryCard
          v-for="(country, index) in paginatedCountries"
          :key="index"
          :country="country"
        />
      </div>

      <div class="flex justify-center mt-6">
        <button
          v-if="hasMore"
          @click="loadMore"
          class="bg-amber-500 text-amber-500 px-4 py-2 rounded hover:bg-primary-dark transition"
        >
          Ver mais
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import CountryCard from '@/components/CountryCard.vue'
import { useCountries } from '@/composables/useCountries'

const { countries, loading, error } = useCountries()
const page = ref(1)
const pageSize = 12
const searchTerm = ref('')
const sortBy = ref<'name' | 'population'>('name')

const filteredCountries = computed(() => {
  return countries.value.filter((c) =>
    c.name.common.toLowerCase().includes(searchTerm.value.toLowerCase()),
  )
})

const sortedCountries = computed(() => {
  return [...filteredCountries.value].sort((a, b) => {
    if (sortBy.value === 'name') {
      return a.name.common.localeCompare(b.name.common)
    } else {
      return (b.population || 0) - (a.population || 0)
    }
  })
})

const paginatedCountries = computed(() => {
  return sortedCountries.value.slice(0, page.value * pageSize)
})

const hasMore = computed(() => {
  return paginatedCountries.value.length < sortedCountries.value.length
})

const loadMore = () => {
  page.value++
}
</script>
