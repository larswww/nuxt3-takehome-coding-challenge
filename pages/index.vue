<script setup lang="ts">
import {format, add} from 'date-fns'
import ShowGrid from '@/components/ShowGrid.vue'
import PageHeading from '@/components/PageHeading.vue'
import TopContainer from '@/components/TopContainer.vue'
import {vIntersectionObserver} from '@vueuse/components'
import {Episode} from "~/types";

const getYyyyMmDdDate = (date: Date):string => format(date, 'yyyy-MM-dd')
const getPrettyDate = (date: string):string => format(new Date(date), "EEEE do 'of' LLLL")
const today = getYyyyMmDdDate(new Date())

let currentDay = today //'2022-04-11' required by API
const selectedCountry = useSelectedCountry()
const schedules = ref([])
const countryOptions = ref([
  {name: 'Worldwide', code: '', flagEmoji: '🌎'},
  {name: 'Netherlands', code: 'NL', flagEmoji: '🇳🇱'},
  {name: 'Sweden', code: 'SE', flagEmoji: '🇸🇪'}
])

initialize()
watch(selectedCountry, initialize)

function loadOneDaysTvScheduleFor (date, country) {
  const countryQuery = country ? `&country=${country}` : ''
  const url = `https://api.tvmaze.com/schedule?date=${date}${countryQuery}`
  const {data: episodes, pending, error} = useFetch<Episode[]>(url)
  return {date, episodes, pending, error}
}

function addAnotherDay() {
  const nextDay = format(add(new Date(currentDay), {days: 1}), 'yyyy-MM-dd')
  const [hasDateAlready] = schedules.value.filter(x => x.date === nextDay)
  if (hasDateAlready) return
  const apiPromise = loadOneDaysTvScheduleFor(nextDay, selectedCountry.value)
  schedules.value.push(apiPromise)
  currentDay = nextDay
}

function initialize () {
  schedules.value = []
  currentDay = today
  const daysToLoadBeforeScroll = 7
  for (let i = 1; i <= daysToLoadBeforeScroll; i++) addAnotherDay()
}

</script>
<template>
  <div>
    <TopContainer>
      <PageHeading heading="Upcoming TV Shows">
        <select data-test="country-select" v-model="selectedCountry">
          <option v-for="option in countryOptions" :value="option.code"> {{option.flagEmoji}} {{option.name}}</option>
        </select>
      </PageHeading>
    </TopContainer>


    <div class="w-full" v-for="apiCall in schedules" :key="`schedule-for-${apiCall.date}`">

      <div class="-ml-2 mt-6 mb-1 flex flex-wrap items-baseline">
        <h3 class="ml-2 mt-2 text-lg leading-6 font-medium text-gray-900">
          {{ getPrettyDate(apiCall.date) }}
        </h3>
        <p v-if="!apiCall.episodes?.length" class="ml-2 mt-1 text-sm text-gray-500"> No new episodes </p>
        <p v-if="apiCall.error" class="ml-2 mt-1 text-sm text-red-500"> ❌ Error requesting episodes, try reloading</p>
      </div>

      <template v-if="apiCall.pending">
        Loading...
      </template>
      <template v-else>
        <ShowGrid :key="apiCall.date"
                  :date="apiCall.date"
                  :episodes="apiCall.episodes"/>
      </template>
    </div>
    <!--    The api will 429 too many requests if the scroll is too aggressive
      - if user scrolls past button, it won't load more, until its scrolled over again.
     -->
    <button
        class="w-full mt-8 px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        ref="infiniteScroll" v-intersection-observer="addAnotherDay" @click="addAnotherDay">
      Load More
    </button>
  </div>

</template>