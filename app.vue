<script setup lang="ts">
import NavBar from '@/components/NavBar'

/**
 * // https://github.com/nuxt/nuxt.js/issues/8122
 * // https://v3.nuxtjs.org/guide/features/state-management
 * // https://v3.nuxtjs.org/api/composables/use-state
 * - use global event bus
 * - but
 * State:
 * - dateArray
 * - searchQuery
 * - currentCountry
 */

</script>
<template>

  <div class="min-h-full">

    <div class="bg-gray-800 pb-32">
      <NavBar />

      <header class="py-2" />
    </div>

    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <NuxtPage />
        </div>
      </div>
    </main>

  </div>

</template>
