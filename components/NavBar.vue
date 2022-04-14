<script setup lang="ts">
import SearchController from '@/components/SeearchController.vue'
</script>
<template>
  <header class="sticky top-0 z-30 bg-opacity-50 h-[72px] bg-gray-900 backdrop-filter backdrop-blur  firefox:bg-opacity-90">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
      <div class="relative h-16 flex justify-between">
        <div class="relative z-10 px-2 flex lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink data-test="logo" to="/" class="bg-white rounded-md text-2xl px-2 py-1 bg-gradient-to-t from-white to-yellow-200 hover:from-pink-500 hover:to-yellow-500">
            📺
            </NuxtLink>
          </div>
        </div>
        <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
          <SearchController />
        </div>
      </div>
    </div>
  </header>
</template>