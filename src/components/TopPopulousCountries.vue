<!-- src/components/TopPopulousCountries.vue -->
<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4 text-primary">👥 Países Mais Populosos</h2>

    <div v-if="store.loading" class="text-gray-500 text-center py-6">Carregando...</div>
    <div v-else-if="store.error" class="text-red-500 text-center py-6">{{ store.error }}</div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <CountryCard
        v-for="(country, index) in visibleCountries"
        :key="country.cca3"
        :country="country"
        :rank="getRank(country)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useCountryStore } from '@/stores/useCountryStore'
import CountryCard from './CountryCard.vue'

const store = useCountryStore()

onMounted(() => {
  store.fetchCountries()
  rotateVisible()
  interval.value = setInterval(rotateVisible, 10000)
})

onBeforeUnmount(() => {
  clearInterval(interval.value)
})

const interval = ref<number | undefined>()

// 🧠 Seleciona os 12 países mais populosos da store (sem afetar ela)
const topPopulous = computed(() => {
  return [...store.countries].sort((a, b) => (b.population || 0) - (a.population || 0)).slice(0, 12)
})

// Lista visível de 6 países
const visibleCountries = ref<any[]>([])

function rotateVisible() {
  const shuffled = [...topPopulous.value].sort(() => Math.random() - 0.5)
  visibleCountries.value = shuffled.slice(0, 6)
}

function getRank(country: any): number {
  return topPopulous.value.findIndex((c) => c.cca3 === country.cca3)
}
</script>
