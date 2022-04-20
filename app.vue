<script setup lang="ts">
import NavBar from '@/components/NavBar'

useHead({
  titleTemplate: 'Lars National TV shows inc', // or, title => `My App - ${title}`
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  charset: 'utf-8',
  meta: [
    {name: 'description', content: 'SSR HTML & JS!.'}
  ],
})

</script>
<template>

  <div class="min-h-full">

    <div class="bg-gray-800 pb-32">
      <NavBar/>

      <header class="py-2"/>
    </div>

    <main class="-mt-32 max-w-7xl mx-auto sm:px-6 lg:px-8">
      <NuxtPage/>
    </main>

  </div>

</template>
