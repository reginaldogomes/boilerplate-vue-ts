<!-- src/components/GoogleLoginButton.vue -->
<template>
  <div class="flex flex-col items-center justify-center space-y-4 py-6">
    <button
      v-if="!loading && !error"
      @click="signIn"
      class="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
    >
      <svg class="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#4285F4"
          d="M533.5 278.4c0-17.7-1.6-34.8-4.6-51.2H272v96.8h147.2c-6.4 34.4-25.8 63.4-54.8 82.8v68.6h88.8c51.9-47.9 81.3-118.4 81.3-196.9z"
        />
        <path
          fill="#34A853"
          d="M272 544.3c73.5 0 135.1-24.3 180.1-65.6l-88.8-68.6c-24.7 16.6-56.4 26.2-91.3 26.2-70.2 0-129.7-47.4-151-111.2H30v69.7c44.6 88.1 136.7 149.5 242 149.5z"
        />
        <path
          fill="#FBBC05"
          d="M121 325.1c-10.6-31.2-10.6-64.9 0-96.1V159.3H30c-36.7 73.4-36.7 160.2 0 233.6l91-67.8z"
        />
        <path
          fill="#EA4335"
          d="M272 107.7c38.8-.6 76 13.5 104.8 38.9l78.1-78.1C420.9 24.6 347.6-1.5 272 0 166.7 0 74.6 61.4 30 149.5l91 69.7C142.3 155.1 201.8 107.7 272 107.7z"
        />
      </svg>
      Entrar com Google
    </button>

    <div v-if="loading" class="text-gray-500 text-sm animate-pulse">Carregando...</div>
    <div v-if="error" class="text-red-500 text-sm text-center max-w-xs">{{ error }}</div>
  </div>
</template>

<script setup lang="ts">
import { useGoogleLogin } from '@/composables/useGoogleLogin'

const { signIn, loading, error } = useGoogleLogin()
</script>
