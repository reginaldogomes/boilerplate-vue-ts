<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <div
      v-for="country in validCountries"
      :key="country.cca3"
      class="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center"
    >
      <img
        v-if="country.flags?.svg"
        :src="country.flags.svg"
        :alt="`Bandeira de ${country.name.common}`"
        class="w-24 h-16 object-contain mb-2"
      />
      <h2 class="text-lg font-semibold">{{ country.name.common }}</h2>
      <p v-if="country.capital" class="text-sm text-gray-600">Capital: {{ country.capital[0] }}</p>
      <p class="text-sm text-gray-600">População: {{ country.population.toLocaleString() }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCountryStore } from '@/stores/useCountryStore'

const store = useCountryStore()

// Filtrando apenas os países válidos com os dados necessários
const validCountries = computed(
  () =>
    store.countries
      .filter(
        (country) =>
          country.flags?.svg && country.name?.common && typeof country.population === 'number',
      )
      .sort((a, b) => b.population! - a.population!) // ordena por população
      .slice(0, 10), // pega os 10 mais populosos (ou mais ricos, se você tiver essa info)
)
</script>

<style scoped>
/* Adicione estilos se quiser */
</style>
