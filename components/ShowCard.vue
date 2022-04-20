<script setup lang="ts">

import {defineProps} from "@vue/runtime-core";
import {Episode, Show} from "~/types";

interface Props extends Episode {
  show: Show
  airtime: string
}

const props = defineProps<Props>()

</script>

<template>
  <div
      class="group flex flex-col w-full h-42 border border-gray-200 rounded-md bg-gray-200 overflow-hidden">

    <img v-if="show.image" :src="show.image?.original" :alt="`${show.name}-poster`"
         class="object-cover group-hover:opacity-75"/>
    <h3 v-else class="bg-gradient-to-r py-5 from-indigo-600 to-pink-500 text-white group-hover:opacity-75 px-2">
      {{show.name}}
    </h3>
    <span
        class="absolute bottom-0 left-0 bg-gray-200 text-gray-600 p-1 items-center justify-center text-xs font-medium rounded">
   {{ show.schedule?.time }}
  </span>
    <NuxtLink data-test="episode-card" :to="`/show/${show.id}`" class="absolute inset-0 focus:outline-none">
      <span class="sr-only">{{ show.name }}</span>
    </NuxtLink>
  </div>
</template>