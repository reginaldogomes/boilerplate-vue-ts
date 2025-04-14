// src/composables/useGoogleLogin.ts
import { ref } from 'vue'

export function useGoogleLogin() {
  const loading = ref(false)
  const error = ref<string | null>(null)

  const signIn = async () => {
    try {
      loading.value = true
      error.value = null

      // Este método é inserido pelo plugin GoogleLoginPlugin no window
      const googleUser = await (window as any).$gAuth.signIn()

      const profile = googleUser.getBasicProfile()
      const token = googleUser.getAuthResponse().id_token

      // Aqui você pode enviar `token` para o seu backend via Vercel Function
      console.log('Usuário:', profile.getName())
      console.log('Token JWT do Google:', token)

      // TODO: salvar no Pinia ou localStorage
    } catch (err) {
      error.value = 'Falha no login com Google.'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return { signIn, loading, error }
}
