<template>
  <div class="max-w-3xl mx-auto p-6">
    <div v-if="loading" class="text-center text-gray-600">Carregando detalhes...</div>
    <div v-else-if="error" class="text-center text-red-600">{{ error }}</div>
    <div v-else-if="country">
      <div class="flex flex-col items-center text-center">
        <img
          :src="country.flags?.svg"
          :alt="`Bandeira de ${country.name.common}`"
          class="w-40 h-28 object-cover rounded border mb-4"
        />
        <h1 class="text-3xl font-bold text-primary mb-2">{{ country.name.common }}</h1>
        <p class="text-gray-700 text-lg mb-1">
          Capital: <strong>{{ country.capital?.[0] || '—' }}</strong>
        </p>
        <p class="text-gray-700 text-lg mb-1">
          População: <strong>{{ country.population?.toLocaleString() || '—' }}</strong>
        </p>
        <p class="text-gray-700 text-lg mb-1">
          Região: <strong>{{ country.region || '—' }}</strong>
        </p>
        <p class="text-gray-700 text-lg mb-1">
          Sub-região: <strong>{{ country.subregion || '—' }}</strong>
        </p>
        <p class="text-gray-700 text-lg">
          Área: <strong>{{ country.area?.toLocaleString() || '—' }} km²</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const country = ref<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    const name = route.params.name
    const res = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    country.value = res.data[0]
  } catch (err) {
    error.value = 'Erro ao carregar os dados do país.'
  } finally {
    loading.value = false
  }
})
</script>
