<script setup lang="ts">
import ShowScheduleController from '@/components/ShowScheduleController.vue'
/**
 Infinite scroll of upcoming tv shows using this endpoint:  https://api.tvmaze.com/schedule?country=TR
 - country selector

 For each date
 - showsched
 - autoScroll detector at the bottom?
 */
</script>
<template>
  <h1>index page</h1>
  <ShowScheduleController url="https://api.tvmaze.com/schedule?country=NL"/>
</template>