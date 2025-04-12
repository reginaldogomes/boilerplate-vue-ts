// src/composables/useGoogleLogin.ts
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { GoogleLoginResponse, useGoogleLogin as useGoogleLoginLibrary } from 'vue3-google-login'
import { useUserStore } from '@/stores/useUserStore'

export function useGoogleLogin() {
  const { loginWithGoogle } = useUserStore()
  const router = useRouter()

  const loading = ref(false)
  const error = ref<string | null>(null)

  const onSuccess = (response: GoogleLoginResponse) => {
    loading.value = true
    error.value = null

    const token = response?.tokenId

    if (!token) {
      error.value = 'Falha no login do Google. Tente novamente.'
      loading.value = false
      return
    }

    loginWithGoogle(token)
      .then(() => {
        router.push({ name: 'dashboard' }) // Redireciona após login
      })
      .catch((err) => {
        error.value = 'Erro ao autenticar usuário. Tente novamente.'
        console.error(err)
      })
      .finally(() => {
        loading.value = false
      })
  }

  const onFailure = (error: any) => {
    error.value = 'Erro ao conectar com o Google. Tente novamente.'
    console.error(error)
  }

  const { signIn } = useGoogleLoginLibrary({
    clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    onSuccess,
    onFailure,
  })

  return {
    signIn,
    loading,
    error,
  }
}
