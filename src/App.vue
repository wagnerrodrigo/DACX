<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import button from './components/button.vue'
import Coins from './views/Coins/index.vue'
import Exchange from './views/Coins/index.vue'
import Plataforms from './views/Coins/index.vue'

</script>

<template>
<Plataforms></Plataforms>
  <Exchange></Exchange>
  <Coins></Coins>
   <h1 class="text-3xl font-bold underline">
    App
  </h1>
  <router-view> </router-view>
  <button >proximo</button>
</template>

<style>
#app {
  @apply text-center py-14
  text-emerald-800
}
</style>
