<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="flex flex-col items-center mt-24">
    <Button
      class="bg-primary-green"
      @click="router.push({ name: 'Inventory' })"
    >
      Login
    </Button>
  </div>
</template>

<style scoped></style>
