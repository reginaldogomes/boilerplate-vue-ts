<template>
  <header class="bg-blue-500 text-white py-4 px-6 shadow">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">{{ APP_NAME }}</h1>
      <nav class="space-x-4">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/countries" class="hover:underline">Países</RouterLink>
        <RouterLink to="/login" class="hover:underline">Login</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

import { APP_NAME } from '@/constants/config'
</script>
