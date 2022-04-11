<script setup lang="ts">
import ShowCard from '@/components/ShowCard.vue'
/**
 * Flexible grid to display shows, has a slot that renders show cards
 */

interface Props {
  schedule: [any]
}

const props = defineProps<Props>()

</script>
<template>

  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <li v-for="dayOfTv in props.schedule" :key="dayOfTv.id" class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
      <ShowCard v-bind="dayOfTv" />
    </li>
  </ul>

</template>