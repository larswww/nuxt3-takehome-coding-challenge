<script setup lang="ts">

import {useFetch} from "#imports";

type Props = {
  url: string
}

const props = defineProps<Props>()

const { data } = useFetch(props.url)

</script>
<template>
  {{data}}
</template>
