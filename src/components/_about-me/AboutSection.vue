<script setup>
import MainWindow from "./MainWindow.vue";
import MainWindowMobile from "./mobile_views/MainWindowMobile.vue";
import NavigationSide from "./NavigationSide.vue";
</script>

<template>
  <div class="h-full w-screen flex flex-col lg:flex-row flex-nowrap">
    <!-- Sidebar -->
    <NavigationSide />

    <!-- Main Window -->
    <MainWindow />
    <MainWindowMobile />
  </div>
</template>
