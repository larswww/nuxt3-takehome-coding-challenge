<script setup lang="ts">
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
const target = ref(null)
const targetIsVisible = ref(false)

defineEmits()

const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting
    },
)
export default {
  name: "IntersectionObserver"
}
</script>
<template>
  <div ref="target">
    <slot />
  </div>

</template>
