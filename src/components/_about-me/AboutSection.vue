<script setup>
import MainWindow from "./MainWindow.vue";
import NavigationSide from "./NavigationSide.vue";
</script>

<template>
  <div class="h-full w-screen flex flex-row flex-nowrap">
    <!-- Sidebar -->
    <NavigationSide />

    <!-- Main Window -->
    <MainWindow />
  </div>
</template>
