<script setup lang="ts">
import VerticalNavbarItem from "@/components/navbar/VerticalNavbarItem.vue";
</script>

<template>
  <div class="hidden md:block">
    <nav class="h-screen flex flex-col px-6 text-lg pt-8 bg-white" id="navbar">
      <div
        class="flex cursor-pointer pl-2 items-center"
        @click="$router.push('/')"
      >
        <span class="ml-4 text-xl">ACM</span>
      </div>

      <!-- NAV BAR-->
      <div class="flex flex-col items-start mt-8 gap-4">
        <VerticalNavbarItem
          label="Inventory"
          routeName="Inventory"
          :isActive="$route.name === 'Inventory'"
        >
        </VerticalNavbarItem>
        <VerticalNavbarItem
          label="Dashboard"
          routeName="Dashboard"
          :isActive="$route.name === 'Dashboard'"
        >
        </VerticalNavbarItem>
        <VerticalNavbarItem
          label="Profile"
          routeName="Profile"
          :isActive="$route.name === 'Profile'"
        >
        </VerticalNavbarItem>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#navbar {
  width: 225px;
}
</style>
