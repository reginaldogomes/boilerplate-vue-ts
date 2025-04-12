import { ref } from 'vue'
import axios from 'axios'

const token = ref<string | null>(localStorage.getItem('token'))

export function useAuth() {
  const login = async (username: string, password: string) => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        username,
        password,
      })
      token.value = res.data.token
      localStorage.setItem('token', res.data.token)
      return true
    } catch (err) {
      return false
    }
  }

  const logout = () => {
    token.value = null
    localStorage.removeItem('token')
  }

  const isAuthenticated = () => !!token.value

  return {
    token,
    login,
    logout,
    isAuthenticated,
  }
}
