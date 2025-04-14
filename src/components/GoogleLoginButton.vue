<template>
  <GoogleLogin :onSuccess="handleSuccess" :onError="handleError" />
</template>

<script setup lang="ts">
import { GoogleLogin } from 'vue3-google-login'
import { useGoogleLoginHandler } from '@/composables/useGoogleLogin'

const { handleSuccess, handleError } = useGoogleLoginHandler()
</script>
