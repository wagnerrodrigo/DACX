<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img  class="mx-auto" alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

   <h1 class="text-3xl font-bold underline">
    estou aqui 
  </h1>
  <router-view/>
</template>

<style>
#app {
  @apply text-center py-10
}
</style>
