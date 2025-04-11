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
  cca3?: string
}

const countries = ref<Country[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

const API_URL = import.meta.env.VITE_API_URL

export const fetchCountries = async () => {
  loading.value = truehg uj n
  error.value = null
  try {
    const res = await axios.get<Country[]>(API_URL)
    countries.value = res.data
  } catch (err: unknown) {
    error.value = 'Erro ao buscar países.'
    countries.value = []

    if (err instanceof Error) {
      console.error(err.message)
    } else {
      console.error('Erro desconhecido ao buscar países.')
    }
  } finally {
    loading.value = false
  }
}

export function useCountries() {
  return {
    countries,
    loading,
    error,
    fetchCountries,
  }
}
