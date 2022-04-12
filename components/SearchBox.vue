<script setup lang="ts">
import {SearchIcon, CheckIcon} from "@heroicons/vue/outline";
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'
import {useFetch} from "#app";
import {defineEmits} from "@vue/runtime-core";

const router = useRouter()

interface Props {
  currentSearch: string
  results: any[]
}
const props = defineProps<Props>()

const selectedShow = ref(null)
watch(selectedShow, (selected) => {
  // will throw an error if using vue devtools 6 https://github.com/vuejs/router/issues/1338
  router.push(`/show/${selected.show.id}`)
})

</script>
<template>
<!--  https://headlessui.dev/vue/combobox -->
  <Combobox as="div" class="w-full sm:max-w-xs" v-model="selectedShow">
    <label for="search" class="sr-only">Search</label>
    <div class="relative">
      <div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
        <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true"/>
      </div>
      <ComboboxInput
          data-test="search-box"
          id="search"
          name="search"
          class="block w-full bg-gray-700 border border-transparent rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 focus:placeholder-gray-500 sm:text-sm"
          placeholder="Search"
          type="search"
          @change="(event) => $emit('update:currentSearch', event.target.value)"
          :display-value="(result) => result ? result.show.name : currentSearch"
      />
    </div>
    <ComboboxOptions
        v-if="results && results.length > 0"
        class="absolute z-10 mt-1 max-h-56 w-full sm:max-w-xs
                overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
      <ComboboxOption
          data-test="search-result"
          v-for="result in results"
          :key="result.show.id"
          :value="result"
          as="template"
          v-slot="{ active, selected }"
      >
        <li
            :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-indigo-600 text-white' : 'text-gray-900']">
          <div class="flex items-center">
            <img v-if="result.show.image" :src="result.show.image.medium|| ''" alt=""
                 class="h-6 w-6 flex-shrink-0 rounded"/>
            {{ result.show.name }}

          </div>

        </li>
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>