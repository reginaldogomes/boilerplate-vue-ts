// src/composables/useGoogleLogin.ts
export function useGoogleLoginHandler() {
  const handleSuccess = (response: any) => {
    console.log('Login com Google bem-sucedido:', response)

    const credential = response.credential
    // Aqui você pode enviar o token para seu backend para autenticação com JWT, por exemplo
  }

  const handleError = () => {
    console.error('Erro ao tentar login com o Google')
  }

  return {
    handleSuccess,
    handleError,
  }
}
