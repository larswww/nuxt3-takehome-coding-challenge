<script setup lang="ts">
interface Props {
  heading: string
}
defineProps<Props>()

</script>

<template>
  <div class="pb-2 sm:flex sm:items-center sm:justify-between">
    <h3 class="text-lg leading-6 font-medium text-gray-900">{{heading}}</h3>
    <div class="mt-3 sm:mt-0 sm:ml-4">
      <slot />
    </div>
  </div>
</template>