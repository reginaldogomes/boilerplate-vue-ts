<template>
  <div class="p-6 max-w-6xl mx-auto">
    <google-login
      :client-id="googleClientId"
      @success="handleLoginSuccess"
      @error="handleLoginError"
    >
      Login com Google
    </google-login>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { GoogleLogin } from 'vue3-google-login'

// Obtendo o Client ID do Google a partir das variáveis de ambiente
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

// Função para tratar o sucesso do login
const handleLoginSuccess = (response: any) => {
  // Aqui você pode acessar o token ou as informações do usuário
  console.log('Login bem-sucedido', response)
  const { tokenId } = response
  // Aqui você pode enviar o token para o servidor ou salvar no localStorage
  localStorage.setItem('google_token', tokenId)
  // Você pode redirecionar o usuário ou armazenar o estado
}

// Função para tratar erro no login
const handleLoginError = (error: any) => {
  console.error('Erro no login com Google', error)
}
</script>
