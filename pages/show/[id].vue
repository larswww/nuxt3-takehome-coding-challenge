<script setup lang="ts">
import stripHtmlTags from "~/util/stripHtmlTags";
import ShowDetailsList from "~/components/ShowDetailsList.vue";
import {definePageMeta} from "nuxt3/dist/pages/runtime";
import TopContainer from "~/components/TopContainer.vue";

const route = await useRoute()
const reactiveId = ref(route.params.id)

//https://v3.nuxtjs.org/api/composables/use-async-data
const {data: show, pending, refresh, error} = await useAsyncData(
    '/shows/',
    () => $fetch(`https://api.tvmaze.com/shows/${reactiveId.value}`),
    {watch: [reactiveId]})
refresh()

const summary = stripHtmlTags(show.summary)

</script>
<template>
  <div data-test="show-page">
    <TopContainer  v-if="!pending">
      <div class="sm:flex">
        <div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
          <img v-if="show.image" :src="show.image.original" :alt="`${show.name} poster`"
               class="h-48 w-full object-cover sm:w-32 border border-gray-300 bg-white text-gray-300"/>
        </div>
        <div>
          <div class="flex inline-flex items-center">
            <h1 class="text-xl font-bold mr-4">{{ show.name }}
              <template v-for="genre in show.genres">
          <span
              class=" ml-3 px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
            {{ genre }}
          </span>
              </template>
            </h1>

          </div>
          <p v-if="summary" class="mt-1">{{ summary }}</p>

          <ShowDetailsList :show="show"/>
        </div>
      </div>
    </TopContainer>
  </div>
</template>