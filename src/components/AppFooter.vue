<template>
  <footer class="bg-blue-500 text-center py-4 mt-10 text-blue-50 text-sm">
    © {{ year }} {{ APP_NAME }}. Todos os direitos reservados.
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
import { APP_NAME } from '@/constants/config'
</script>
