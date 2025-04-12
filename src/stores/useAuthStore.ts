// src/stores/authStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: null as null | { name: string; email: string },
  }),
  actions: {
    async login(email: string, password: string) {
      const res = await axios.post(`API_URL}/login`, { email, password })
      this.token = res.data.token
      this.user = res.data.user
      localStorage.setItem('token', this.token)
    },
    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
    },
    async fetchUser() {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/me`, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      this.user = res.data
    },
  },
})
