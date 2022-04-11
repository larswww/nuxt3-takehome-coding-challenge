<script setup lang="ts">

import {useFetch} from "#imports";

type Props = {
  url: string
}

const props = defineProps<Props>()

const { data, pending, error } = useFetch(props.url)

</script>
<template>
  {{data}}
</template>
