<script setup lang="ts">
import { onErrorCaptured } from "vue";

onErrorCaptured((err, vm, info) => {
  console.log(err, vm, info);
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
