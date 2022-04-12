<script setup lang="ts">
import SearchBox from '@/components/SearchBox.vue'
import {useFetch} from "#app";

const searchUrl = 'https://api.tvmaze.com/search/shows?q=girls'
const { data, pending, error } = useFetch(searchUrl)

</script>
<template>

  <SearchBox />

  {{data}}
</template>
