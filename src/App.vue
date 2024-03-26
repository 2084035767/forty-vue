<script setup>
import LoginPage from './pages/LoginPage.vue'
import ResignPage from './pages/ResignPage.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div id="app">
    <LoginPage v-if="route.name === 'login'" />
    <ResignPage v-else-if="route.name === 'register'" />
    <div v-else>
      <Sidebar />
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
