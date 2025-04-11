// src/composables/useCountries.ts
import { ref } from 'vue'
import axios from 'axios'

export interface Country {
  name: {
    common: string
  }
  capital?: string[]
  population?: number
  flags?: {
    svg?: string
  }
}

const countries = ref<Country[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

export const fetchCountries = async () => {
  loading.value = true
  error.value = null
  try {
    const res = await axios.get<Country[]>('https://restcountries.com/v3.1/all')
    countries.value = res.data
  } catch (err) {
    error.value = 'Erro ao buscar países.'
    countries.value = [] // garante reset
  } finally {
    loading.value = false
  }
}

export function useCountries() {
  return {
    countries,
    loading,
    error,
    fetchCountries, // agora acessível para testar
  }
}
