<script setup lang="ts">
import { CalendarDate } from "@internationalized/date";

const value = shallowRef(new CalendarDate(2022, 2, 3));
</script>

<template>
  <UCalendar v-model="value" />
</template>
