<script setup lang="ts">
import {ClockIcon, CalendarIcon, ExternalLinkIcon, GlobeIcon} from "@heroicons/vue/outline";

const route = await useRoute()
const reactiveId = ref(route.params.id)

//https://v3.nuxtjs.org/api/composables/use-async-data
const {data: show, pending, refresh, error} = await useAsyncData(
    '/shows/',
    () => $fetch(`https://api.tvmaze.com/shows/${reactiveId.value}`),
    {watch: [reactiveId]})
refresh()

</script>
<template>
  <div>
    <div class="sm:flex" v-if="!pending">
      <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4" :key="show.name">
        <img v-if="show.image" :src="show.image.original" alt=""
             class="h-48 w-full object-cover sm:w-32 border border-gray-300 bg-white text-gray-300"/>
      </div>
      <div>
        <div class="flex inline-flex">
          <h1 class="text-xl font-bold mr-4">{{ show.name }}</h1>
          <template v-for="genre in show.genres">
          <span
              class="inline-flex items-center mr-2 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">{{
              genre
            }}</span>
          </template>
        </div>
        <p v-if="show.summary" class="mt-1">{{ show.summary }}</p>


        <ul role="list" class="mt-5 space-y-6">
          <li class="flow-root">
                  <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900">
                <ClockIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true"/>
                <span class="ml-4">{{ show.schedule.time }} {{ show.network?.country?.timezone }}</span>
              </span>
            <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900">
                <CalendarIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true"/>
                <span v-for="day in show.schedule.days" class="ml-4">{{ day }}</span>
              </span>
            <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900">
                <ExternalLinkIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true"/>
                <a :href="show.officialSite" target="_blank" class="ml-4 text-blue-600 underline">{{
                    show.officialSite
                  }}</a>
              </span>

            <span class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900">
                <GlobeIcon class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true"/>
                <span class="ml-4">{{ show.network?.country?.name }} - {{ show.language }}</span>
              </span>

          </li>
        </ul>
      </div>
    </div>

  </div>
</template>