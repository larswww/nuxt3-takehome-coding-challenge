<script setup lang="ts">
import {Show} from "@/types";
import {ClockIcon, CalendarIcon, ExternalLinkIcon, GlobeIcon} from "@heroicons/vue/outline";
import getPrettyDayString from "@/util/getPrettyDayString";
import ExternalLink from "~/components/BaseLink.vue"

const props = defineProps<{
  show: Show
}>()

const {schedule, network, officialSite, language} = props.show
const days = getPrettyDayString(schedule.days)

const items = [
  {
    show: !!schedule.time,
    text: schedule.time,
    icon: ClockIcon,
    child: {
      component: 'span',
      text: network?.country?.timezone,
      classname: 'ml-2 text-sm text-gray-500'
    }
  },
  {
    show: !!days,
    text: days,
    icon: CalendarIcon
  },
  {
    show: !!officialSite,
    icon: ExternalLinkIcon,
    text: 'Official Site',
    child: {
      component: ExternalLink,
      props: {href: officialSite},
      text: officialSite
    }
  },
  {
    show: !!network?.country?.name,
    icon: GlobeIcon,
    text: network?.country?.name,
    child: {
      component: 'span',
      text: language,
      classname: 'ml-2 text-sm text-gray-500'
    }
  }
]

</script>
<template>
  <ul role="list" class="mt-5 space-y-1">
    <template v-for="item in items">
      <li>
                  <span v-if="item.show"
                        class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900">
                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true"/>
                      <span class="ml-4">
                        {{ item.text }}
                        <template v-if="item.child">
                          <component :is="item.child.component" v-bind="item.child.props" :class="item.child.classname"> {{ item.child.text }} </component>
                        </template>
                      </span>
                  </span>
      </li>
    </template>

  </ul>
</template>