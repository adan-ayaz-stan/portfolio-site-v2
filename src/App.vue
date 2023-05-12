<script setup>
import { ref, onMounted } from "vue";
import NavigationBar from "./components/NavigationBar.vue";
import HeroSection from "./components/_hello/HeroSection.vue";
import AboutSection from "./components/_about-me/AboutSection.vue";
import FooterBar from "./components/FooterBar.vue";

import { useNavStore } from "./stores/navStore";
import ProjectsSection from "./components/_projects/ProjectsSection.vue";
import ContactSection from "./components/_contact-me/ContactSection.vue";

const navStore = useNavStore();
</script>

<template>
  <div class="min-h-screen h-screen max-h-screen w-full flex flex-col">
    <NavigationBar />

    <Transition name="fade" mode="out-in" appear @after-leave="onAfterLeave">
      <template v-if="navStore.activeElement == '_hello'">
        <HeroSection />
      </template>
      <template v-else-if="navStore.activeElement == '_about-me'">
        <AboutSection />
      </template>
      <template v-else-if="navStore.activeElement == '_projects'">
        <ProjectsSection />
      </template>
      <template v-else-if="navStore.activeElement == '_contact-me'">
        <ContactSection />
      </template>
    </Transition>

    <!-- Footer -->
    <FooterBar />
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transform: scale(1);
  transition: all 0.6s ease-in-out 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  transform: scale(0.85);
  opacity: 0;
}
</style>
