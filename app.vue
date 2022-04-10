<script setup lang="ts">
import NavBar from '@/components/NavBar'

</script>
<template>
  <div class="min-h-full">
    <div class="bg-gray-800 pb-32">
            <NavBar />
      <header class="py-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold text-white">Your TV Dashboard </h1>
        </div>
      </header>
    </div>

    <main class="-mt-32">
      <div class="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
        <NuxtPage />
        <!-- Replace with your content -->
        <div class="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          <slot />
        </div>
        <!-- /End replace -->
      </div>
    </main>

  </div>

</template>
