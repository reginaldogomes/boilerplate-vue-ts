<template>
  <div class="p-8 max-w-md mx-auto">
    <h1 class="text-2xl font-bold mb-4">Login</h1>
    <form @submit.prevent="handleLogin" class="flex flex-col gap-4">
      <input v-model="username" placeholder="Usuário" class="input" />
      <input v-model="password" type="password" placeholder="Senha" class="input" />
      <button type="submit" class="btn bg-blue-500 text-white py-2 rounded">Entrar</button>
      <p v-if="error" class="text-red-500">Credenciais inválidas</p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref(false)

const { login } = useAuth()
const router = useRouter()

const handleLogin = async () => {
  const success = await login(username.value, password.value)
  if (success) {
    router.push('/')
  } else {
    error.value = true
  }
}
</script>
