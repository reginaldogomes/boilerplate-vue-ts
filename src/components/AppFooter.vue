<template>
  <footer class="bg-gray-100 text-center py-4 mt-10 text-gray-600 text-sm">
    © {{ year }} Meu Projeto. Todos os direitos reservados.
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
