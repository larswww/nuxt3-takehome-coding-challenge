<script setup lang="ts">
import {format, add} from 'date-fns'
import ShowGrid from '@/components/ShowGrid.vue'
import {vIntersectionObserver} from '@vueuse/components'

let currentDay = format(new Date(), 'yyyy-MM-dd') //'2022-04-11' required by API
const selectedCountry = 'NL'
const schedules = ref([])

const loadOneDaysTvScheduleFor = (date, country) => {
  const url = `https://api.tvmaze.com/schedule?country=${country}&date=${date}`
  const {data, pending, error} = useFetch(url)
  return {date, data, pending, error}
}

schedules.value.push(loadOneDaysTvScheduleFor(currentDay, selectedCountry))
const root = ref(null)
const onIntersectionObserver = ([{intersectionRatio, isIntersecting, isVisible}]) => {
    // only increment schedule on first scroll-over, not in or exit
    addAnotherDay()
}

const addAnotherDay = () => {
  const nextDay = format(add(new Date(currentDay), {days: 1}), 'yyyy-MM-dd')
  const [hasDateAlready] = schedules.value.filter(x => x.date === nextDay)
  if (hasDateAlready) return
  schedules.value.push(loadOneDaysTvScheduleFor(nextDay, selectedCountry))
  currentDay = nextDay
}


</script>
<template>
  <div>
    <h1>index page</h1>

    <template key="shows-today" v-for="apiCall of schedules">

      <template v-if="apiCall.pending">
        Loading...
      </template>

      <template v-if="apiCall.error">
        {{ apiCall.error }}
      </template>

      <template v-if="apiCall.data">
        <ShowGrid :key="apiCall.date" date="today" :schedule="apiCall.data"/>
      </template>
    </template>


    <div ref="root" v-intersection-observer="[onIntersectionObserver, {root}]">

    </div>

  </div>

</template>