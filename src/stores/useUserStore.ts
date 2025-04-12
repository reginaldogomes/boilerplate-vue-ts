// src/stores/userStore.ts
import { defineStore } from 'pinia'
import axios from 'axios'

interface UserState {
  user: { name: string; email: string } | null
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
  }),

  actions: {
    async loginWithGoogle(token: string) {
      try {
        const response = await axios.post('/api/auth/google', { token })
        this.user = response.data.user
      } catch (error) {
        throw new Error('Erro ao autenticar com o Google.')
      }
    },

    logout() {
      this.user = null
    },
  },
})
