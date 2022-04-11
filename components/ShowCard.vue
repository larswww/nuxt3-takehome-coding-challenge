<script setup lang="ts">
/**
 * Render horisontally in a separate list component
 * - use the image
 * - basic info display
 *
 */

interface Props {
  show: any
}

defineProps<Props>()

</script>

<template>
  <h1>{{show.name}}</h1>
</template>