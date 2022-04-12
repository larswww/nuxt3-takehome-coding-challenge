<script setup lang="ts">
import { ref, computed } from '#imports'
import {SearchIcon} from "@heroicons/vue/outline";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

/**
 * insta-search, emit event on each keydown
 * - redirect to main/searchpage to display results
 * - take input search as param
 */

interface Props {
  currentSearch: string
  results?: any[]
}
defineProps<Props>()


</script>
<template>

</template>