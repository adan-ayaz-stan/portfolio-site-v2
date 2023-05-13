<script setup>
import HamburgerIcon from "./Icons/HamburgerIcon.vue";
import CloseIcon from "./Icons/CloseIcon.vue";
import FooterBarMobile from "./FooterBarMobile.vue";
import { ref } from "vue";
import { useNavStore } from "../stores/navStore";

const isMenuOpen = ref(false);
const navStore = useNavStore();

function changeRoute(element) {
  navStore.setActiveElement(element);
  isMenuOpen.value = false;
}
</script>

<template>
  <ul
    class="relative flex lg:hidden flex-row justify-between text-[#607B96] border-solid border-[#1e2d3d] border-b-[1px]"
  >
    <a
      href="/"
      class="px-6 py-4 border-solid transition-all duration-700 cursor-pointer whitespace-nowrap"
    >
      adan-ayaz
    </a>
    <li
      @click="isMenuOpen = true"
      class="px-6 py-4 border-solid transition-all duration-700 cursor-pointer whitespace-nowrap hover:bg-gray-800 hover:bg-opacity-50"
    >
      <HamburgerIcon class="text-xl" />
    </li>

    <!-- The Opened Menu -->
    <div
      :style="{
        clipPath: isMenuOpen
          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          : 'polygon(0 0, 100% 0, 100% 0, 0 0)',
      }"
      class="absolute top-0 left-0 w-full h-screen flex flex-col bg-[#011627] z-10 transition-all duration-400 ease-out"
    >
      <div
        class="flex flex-row justify-between border-solid transition-all duration-700 cursor-pointer whitespace-nowrap border-solid border-[#1e2d3d] border-b-[1px]"
      >
        <li class="p-4 px-6">adan-ayaz</li>
        <li @click="isMenuOpen = false" class="p-4 px-6 hover:bg-gray-800">
          <CloseIcon class="text-2xl" />
        </li>
      </div>
      <li
        v-for="ele in ['_hello', '_about-me', '_projects', '_contact-me']"
        @click="changeRoute(ele)"
        class="px-6 py-4 border-solid transition-all duration-700 cursor-pointer whitespace-nowrap border-solid border-[#1e2d3d] border-b-[1px] hover:text-white z-10"
      >
        {{ ele }}
      </li>

      <FooterBarMobile />
    </div>

    <!--  -->
  </ul>
</template>
