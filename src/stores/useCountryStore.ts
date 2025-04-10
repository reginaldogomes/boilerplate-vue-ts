// src/stores/useCountryStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCountryStore = defineStore('countries', {
  state: () => ({
    countries: [] as any[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchCountries() {
      if (this.countries.length > 0) return // ✅ já carrega todos e não duplica
      const res = await axios.get(import.meta.env.VITE_API_URL)
      this.countries = res.data // deve conter os ~250 países
    },
  },
})
