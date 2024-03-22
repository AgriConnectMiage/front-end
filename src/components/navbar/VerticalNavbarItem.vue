<script setup lang="ts">
defineProps({
  label: String,
  routeName: String,
  isActive: Boolean,
});
</script>

<template>
  <div
    class="flex py-2 pl-4 w-full rounded bg-transparent hover:bg-secondary-green cursor-pointer"
    :class="{ 'bg-secondary-green': isActive }"
    @click="$router.push({ name: routeName })"
  >
    <slot></slot>
    <span class="text-neutral-500">{{ label }}</span>
  </div>
</template>

<style scoped></style>
