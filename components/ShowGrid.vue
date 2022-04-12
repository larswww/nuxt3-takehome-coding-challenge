<script setup lang="ts">
import EpisodeCard from '@/components/EpisodeCard.vue'
import {Episode} from "~/types";
interface Props {
  episodes: Episode[]
  date: string
}
const props = defineProps<Props>()
</script>
<template>

  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="episode in episodes" :key="episode.id" class="relative rounded-lg border border-gray-300 bg-white px-2 py-1 shadow-sm space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
      <EpisodeCard v-bind="episode" />
    </li>
  </ul>

</template>