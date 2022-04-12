<script setup lang="ts">
import { ChevronRightIcon} from "@heroicons/vue/solid";
/**
 * Render horisontally in a separate list component
 * - use the image
 * - basic info display
 *
 */
import {Episode, Show} from "~/types";

interface Props extends Episode {
  show: Show
  airtime: string
  season: number
  number: number
}

defineProps<Props>()

</script>

<template>
  <div data-test="episode-card" class="flex items-center">

  <span
      class="bg-gray-200 text-gray-600 p-1 items-center justify-center text-sm font-medium rounded">
    {{ airtime }}
  </span>
  <div class="flex-1 min-w-0">
    <NuxtLink :to="`/show/${show.id}`" class="flex items-center">
      <div class="flex-1 px-2 py-2 text-sm truncate">
        <h2 class="text-gray-900 font-medium hover:text-gray-600">{{ show.name }}</h2>
        <p class="text-gray-500">Season {{ season }} episode {{ number }}</p>
      </div>
      <div class="flex-shrink-0 pr-2 bg-transparent">
        <button type="button"
                class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:bg-green-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span class="sr-only">View Show</span>
          <ChevronRightIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </NuxtLink>
  </div>
  </div>

</template>