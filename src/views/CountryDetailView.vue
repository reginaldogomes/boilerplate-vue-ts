<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <div v-if="loading" class="text-center text-gray-500 text-lg">Carregando detalhes...</div>

    <div v-else-if="error" class="text-center text-red-600 text-lg font-medium">
      {{ error }}
    </div>

    <div v-else-if="country" class="bg-white rounded-2xl shadow p-8 transition">
      <div class="flex flex-col items-center text-center gap-4 mb-6">
        <img
          :src="country.flags?.svg"
          :alt="`Bandeira de ${country.name.common}`"
          class="w-48 h-32 object-cover rounded-lg border"
        />
        <h1 class="text-4xl font-bold text-primary">{{ country.name.common }}</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 text-lg mb-8">
        <p><strong>Capital:</strong> {{ country.capital?.[0] || '—' }}</p>
        <p><strong>População:</strong> {{ country.population?.toLocaleString() || '—' }}</p>
        <p><strong>Região:</strong> {{ country.region || '—' }}</p>
        <p><strong>Sub-região:</strong> {{ country.subregion || '—' }}</p>
        <p><strong>Área:</strong> {{ country.area?.toLocaleString() || '—' }} km²</p>
      </div>

      <div class="flex justify-center">
        <button
          @click="goBack"
          class="bg-primary text-amber-800 text-base px-6 py-2 rounded-lg hover:bg-primary-dark transition"
        >
          ← Voltar à lista
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const router = useRouter()

const country = ref<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const goBack = () => {
  router.back()
}

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
