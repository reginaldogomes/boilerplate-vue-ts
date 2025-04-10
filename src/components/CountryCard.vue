<template>
  <div
    class="bg-white shadow rounded-xl p-4 flex flex-col items-center text-center dark:bg-neutral-dark"
  >
    <!-- Imagem da bandeira -->
    <img
      v-if="country.flags?.svg"
      :src="country.flags.svg"
      :alt="`Bandeira de ${country.name?.common || 'desconhecido'}`"
      class="w-20 h-14 object-cover rounded border mb-4"
    />
    <!-- Nome do país -->
    <h2 class="text-lg font-semibold text-primary mb-1 dark:text-primary-light">
      {{ country.name?.common || 'Nome desconhecido' }}
    </h2>
    <!-- Capital -->
    <p class="text-sm text-gray-600 dark:text-neutral-light">
      <strong>Capital:</strong> {{ country.capital?.[0] || '—' }}
    </p>
    <!-- População -->
    <p class="text-sm text-gray-600 mb-4 dark:text-neutral-light">
      <strong>População:</strong> {{ formattedPopulation }}
    </p>
    <!-- Link para detalhes -->
    <RouterLink
      :to="countryDetailsLink"
      class="mt-auto text-sm text-white bg-primary px-3 py-1 rounded hover:bg-primary-dark transition"
    >
      Ver detalhes
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

// Interface do país
interface Country {
  name: {
    common: string
  }
  capital?: string[]
  population?: number
  flags?: {
    svg?: string
  }
}

// Define as props
const props = defineProps<{ country: Partial<Country> }>()

// Computed para formatar a população
const formattedPopulation = computed(() =>
  props.country.population ? props.country.population.toLocaleString() : '—',
)

// Computed para o link de detalhes
const countryDetailsLink = computed(() =>
  props.country.name?.common ? `/country/${encodeURIComponent(props.country.name.common)}` : '#',
)
</script>
