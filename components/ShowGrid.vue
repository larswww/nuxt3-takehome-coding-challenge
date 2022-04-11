<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue'
import {Episode} from "~/types";
/**
 * Flexible grid to display shows, has a slot that renders show cards
 */

interface Props {
  episodes: Episode[]
  date: string
}

const props = defineProps<Props>()

</script>
<template>

  <div class="-ml-2 mt-2 mb-1 flex flex-wrap items-baseline">
    <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">{{ date }}</h3>
    <p v-if="!episodes.length" class="ml-2 mt-1 text-sm text-gray-500 truncate"> ❌ Nothing new</p>
  </div>

  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="dayOfTv in episodes" :key="dayOfTv.id" class="relative rounded-lg border border-gray-300 bg-white px-2 py-1 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
      <ShowCard v-bind="dayOfTv" />
    </li>
  </ul>

</template>