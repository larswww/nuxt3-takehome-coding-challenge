<script setup lang="ts">
import {format, add} from 'date-fns'
import ShowGrid from '@/components/ShowGrid.vue'
import {vIntersectionObserver} from '@vueuse/components'
import {Episode} from "~/types";

let currentDay = format(new Date(), 'yyyy-MM-dd') //'2022-04-11' required by API
const selectedCountry = 'NL'
const schedules = ref([])

const loadOneDaysTvScheduleFor = (date, country) => {
  const url = `https://api.tvmaze.com/schedule?country=${country}&date=${date}`
  const {data: episodes, pending, error} = useFetch<Episode[]>(url)
  return {date, episodes, pending, error}
}

schedules.value.push(loadOneDaysTvScheduleFor(currentDay, selectedCountry))

function addAnotherDay() {
  const nextDay = format(add(new Date(currentDay), {days: 1}), 'yyyy-MM-dd')
  const [hasDateAlready] = schedules.value.filter(x => x.date === nextDay)
  if (hasDateAlready) return
  schedules.value.push(loadOneDaysTvScheduleFor(nextDay, selectedCountry))
  currentDay = nextDay
}


</script>
<template>

  <div>
    <div v-for="apiCall in schedules" :key="`schedule-for-${apiCall.date}`">

      <div class="-ml-2 mt-6 mb-1 flex flex-wrap items-baseline">
        <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">{{ format(new Date(apiCall.date), "EEEE io 'of' LLLL") }}</h3>
        <p v-if="!apiCall.episodes?.length" class="ml-2 mt-1 text-sm text-gray-500"> No new episodes </p>
        <p v-if="apiCall.error" class="ml-2 mt-1 text-sm text-red-500"> ❌ Error requesting episodes, try reloading</p>
      </div>

      <template v-if="apiCall.pending">
        Loading... {{ apiCall.pending }}
      </template>
      <template v-else>
        <ShowGrid :key="apiCall.date"
                  :date="apiCall.date"
                  :episodes="apiCall.episodes"/>
      </template>
    </div>
    <!--    The api will return 429 too many requests if the scroll is too aggressive
      - if user scrolls past button, it won't load more, until its scrolled over again.
     -->
    <button ref="infiniteScroll" v-intersection-observer="addAnotherDay" class="w-full" @click="addAnotherDay">
      Load More
    </button>
  </div>

</template>