<script setup>
import CommandPromptIcon from "../Icons/CommandPromptIcon.vue";
import GlobeIcon from "../Icons/GlobeIcon.vue";
import GamepadIcon from "../Icons/GamepadIcon.vue";
import ArrowDown from "../Icons/ArrowDown.vue";
import FoldersWithFiles from "./NavigationSide__Children/FolderWithFiles.vue";
import EmailIconVue from "../Icons/EmailIcon.vue";
import PhoneIcon from "../Icons/PhoneIcon.vue";

import personalInfo from "./data/personal-info.js";
import professionalInfo from "./data/professional-info.js";
import interestsInfo from "./data/interests-info.js";
import { useAboutMeStore } from "../../stores/aboutMeStore";

const aboutMeStore = useAboutMeStore();
</script>

<template>
  <div
    class="hidden lg:flex min-w-[250px] h-full flex-row border-solid border-[#1e2d3d] border-r-[1px]"
  >
    <!-- Icons Bar on the left side -->
    <div
      class="flex flex-col py-2 border-solid border-[#1e2d3d] border-r-[1px]"
    >
      <p
        @click="aboutMeStore.setActiveCategory('professional-info')"
        :style="{
          color:
            aboutMeStore.opened.category == 'professional-info' ? 'white' : '',
        }"
        class="p-3 text-[#607B96] hover:text-white cursor-pointer transition-all duration-400 ease"
      >
        <CommandPromptIcon />
      </p>
      <p
        @click="aboutMeStore.setActiveCategory('personal-info')"
        :style="{
          color: aboutMeStore.opened.category == 'personal-info' ? 'white' : '',
        }"
        class="p-3 text-[#607B96] hover:text-white cursor-pointer transition-all duration-400 ease"
      >
        <GlobeIcon />
      </p>
      <p
        @click="aboutMeStore.setActiveCategory('interests-info')"
        :style="{
          color:
            aboutMeStore.opened.category == 'interests-info' ? 'white' : '',
        }"
        class="p-3 text-[#607B96] hover:text-white cursor-pointer transition-all duration-400 ease"
      >
        <GamepadIcon />
      </p>
    </div>

    <!-- Folder structure on the right side -->
    <div class="h-full w-full flex flex-col overflow-x-hidden">
      <!-- must be data dependent -->
      <h2
        class="flex items-center gap-2 px-3 py-1 border-solid border-[#1e2d3d] border-b-[1px] overflow-hidden"
      >
        <ArrowDown class="inline" />
        <Transition name="fade" mode="out-in">
          <template v-if="aboutMeStore.opened.category == 'personal-info'">
            <p>personal-info</p>
          </template>
          <template
            v-else-if="aboutMeStore.opened.category == 'professional-info'"
          >
            <p>professional-info</p>
          </template>
          <template
            v-else-if="aboutMeStore.opened.category == 'interests-info'"
          >
            <p>side-interests</p>
          </template>
        </Transition>
      </h2>

      <Transition name="fadeabs" mode="out-in">
        <template v-if="aboutMeStore.opened.category == 'personal-info'">
          <div class="flex flex-col pt-2 pl-1 pb-6">
            <FoldersWithFiles v-for="ele in personalInfo" :data="ele" />
          </div>
        </template>
        <template
          v-else-if="aboutMeStore.opened.category == 'professional-info'"
        >
          <div class="flex flex-col pt-2 pl-1 pb-6">
            <FoldersWithFiles v-for="ele in professionalInfo" :data="ele" />
          </div>
        </template>
        <template v-else-if="aboutMeStore.opened.category == 'interests-info'">
          <div class="flex flex-col pt-2 pl-1 pb-6">
            <FoldersWithFiles v-for="ele in interestsInfo" :data="ele" />
          </div>
        </template>
      </Transition>

      <!--  -->
      <h2 class="px-3 py-1 border-solid border-[#1e2d3d] border-y-[1px]">
        <ArrowDown class="inline" />
        contacts
      </h2>
      <div class="relative flex flex-col gap-2 px-2 py-2">
        <p
          title="adanayaztracer@gmail.com"
          class="flex flex-row gap-3 items-start text-[#607B96] truncate"
        >
          <EmailIconVue class="mt-[4px]" />
          <span> adanayaztracer<br />@gmail.com </span>
        </p>

        <p class="flex flex-row items-end gap-1 text-[#607B96]">
          <PhoneIcon />
          <span> +92 325 682 3910 </span>
        </p>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/*  */
.fadeabs-enter-active,
.fadeabs-leave-active {
  transition: all 0.5s ease;
}

.fadeabs-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.fadeabs-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
