<script setup lang="ts">
import EpisodeCard from '@/components/EpisodeCard.vue'
import ShowCard from '~/components/ShowCard.vue'
import {Episode} from "~/types";
interface Props {
  episodes: Episode[]
  date: string
}
const props = defineProps<Props>()
</script>
<template>


  <ul role="list" class="my-2 grid content-between gap-x-2 gap-y-2 grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 w-full px-2">
    <li class="relative" v-for="episode in episodes">
      <ShowCard v-bind="episode" />
    </li>
  </ul>

<!--  <ul role="list" class="grid grid-cols-3 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">-->
<!--    <li v-for="episode in episodes" :key="episode.id" class="relative rounded-lg border border-gray-300 bg-white px-2 py-1 shadow-sm space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">-->
<!--      <EpisodeCard v-bind="episode" />-->
<!--    </li>-->
<!--  </ul>-->

</template>