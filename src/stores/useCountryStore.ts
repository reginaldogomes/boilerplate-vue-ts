import { defineStore } from 'pinia'
import axios from 'axios'
import type { Country } from '@/types/Country'

export const useCountryStore = defineStore('countries', {
  state: () => ({
    countries: [] as Country[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchCountries() {
      if (this.countries.length > 0) return
      this.loading = true
      this.error = null
      try {
        const res = await axios.get(import.meta.env.VITE_API_URL)
        this.countries = res.data as Country[]
      } catch {
        this.error = 'Erro ao buscar países.'
      } finally {
        this.loading = false
      }
    },
  },
})
