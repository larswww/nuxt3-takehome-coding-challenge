<script setup lang="ts">
</script>
<template>
  <header class="sticky top-0 z-30 bg-opacity-50 h-[72px] bg-gray-900 backdrop-filter backdrop-blur  firefox:bg-opacity-90">
    <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
      <div class="relative h-16 flex justify-between">
        <div class="relative z-10 px-2 flex lg:px-0">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          </div>
        </div>
        <div class="relative z-0 flex-1 px-2 flex items-center justify-center sm:absolute sm:inset-0">
          <div class="w-full sm:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input id="search" name="search" class="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm" placeholder="Search" type="search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>