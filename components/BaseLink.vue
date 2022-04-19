<script setup lang="ts">

interface Props {
  href: string
  classNames?: string
  target?: '_blank' | '_self'
}
const props = withDefaults(defineProps<Props>(), {
  classNames: 'ml-2 text-blue-600 underline',
  target: '_blank'
})

</script>
<template>
  <NuxtLink v-bind="props" :class="props.classNames"><slot /></NuxtLink>
</template>