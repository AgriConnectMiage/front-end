<script setup lang="ts">
import { managementService, Sensor } from "@/services/management-service.ts";
import { ref } from "vue";

const sensors = ref([] as Sensor[]);

managementService.getAllSensors().then((response) => {
  sensors.value = response;
});
</script>

<template>
  <div class="flex flex-col items-center">Home Page</div>
</template>

<style scoped></style>
