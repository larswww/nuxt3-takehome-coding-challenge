<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import {useFetch} from "#app";

const currentSearch = ref('')
const { data, pending, error, refresh } = await useFetch(() => `shows?q=${currentSearch.value}`, {baseURL: 'https://api.tvmaze.com/search/'})

const handleSearch = async (query) => {
  currentSearch.value = query
  await refresh()
}

</script>
<template>

  <SearchBox :results="data" :currentSearch="currentSearch" @update:currentSearch="handleSearch" />

</template>
