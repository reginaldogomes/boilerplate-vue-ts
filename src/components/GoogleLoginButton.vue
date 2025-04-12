<!-- src/components/GoogleLoginButton.vue -->
<template>
  <div>
    <button v-if="!loading && !error" class="btn-google" @click="signIn">Login com Google</button>

    <div v-if="loading" class="text-gray-500">Carregando...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { useGoogleLogin } from '@/composables/useGoogleLogin'

const { signIn, loading, error } = useGoogleLogin()
</script>

<style scoped>
.btn-google {
  background-color: #4285f4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-google:hover {
  background-color: #357ae8;
}
</style>
