<script setup>
import ArrowDown from "../Icons/ArrowDown.vue";
import CustomCheckboxVue from "./CustomCheckbox.vue";

import ReactIcon from "../Icons/ReactIcon.svg";
import VueIcon from "../Icons/VueIcon.svg";
import HtmlIcon from "../Icons/HtmlIcon.svg";
import CssIcon from "../Icons/CssIcon.svg";
import NextJsIcon from "../Icons/NextJsIcon.svg";
import NuxtIcon from "../Icons/NuxtIcon.svg";
import SvelteIcon from "../Icons/SvelteIcon.svg";
import NestIcon from "../Icons/NestIcon.svg";
import GolangIcon from "../Icons/GolangIcon.svg";
import PythonIcon from "../Icons/PythonIcon.svg";
import { ref, onMounted } from "vue";

const data = [
  {
    title: "React",
    img: ReactIcon,
    id: "_react",
  },
  {
    title: "Vue",
    img: VueIcon,
    id: "_vue",
  },
  // {
  //   title: "HTML",
  //   img: HtmlIcon,
  //   id: "_html",
  // },
  // {
  //   title: "CSS",
  //   img: CssIcon,
  //   id: "_css",
  // },
  {
    title: "NextJS",
    img: NextJsIcon,
    id: "_nextjs",
  },
  {
    title: "Nuxt",
    img: NuxtIcon,
    id: "_nuxt",
  },
  {
    title: "Svelte",
    img: SvelteIcon,
    id: "_svelte",
  },
  {
    title: "NestJS",
    img: NestIcon,
    id: "_nestjs",
  },
  {
    title: "Python",
    img: PythonIcon,
    id: "_python",
  },
  {
    title: "Golang",
    img: GolangIcon,
    id: "_golang",
  },
];

const isOpenFilters = ref(false);

onMounted(() => {
  if (window.innerWidth > 1020) {
    isOpenFilters.value = true;
  }
});
</script>

<template>
  <div class="lg:w-[250px] h-fit lg:h-full border-b-[1px] lg:border-r-[1px] border-[#1E2D3D]">
    <h1 @click="isOpenFilters = !isOpenFilters"
      class="flex gap-2 items-center px-8 py-1 border-b-[1px] border-[#1E2D3D] bg-[#1E2D3D] lg:bg-[#011627] cursor-pointer">
      <ArrowDown :style="!isOpenFilters && { transform: 'rotate(-90deg)' }" class="transition-all duration-400" />
      projects
    </h1>

    <ul :style="{
      maxHeight: isOpenFilters ? '500px' : '0px',
      padding: isOpenFilters ? '8px 16px' : '0px 0px',
    }" class="flex flex-col gap-1 overflow-y-hidden transition-all duration-400">
      <li v-for="ele in data" class="flex flex-row items-center gap-4 text-[#607B96]">
        <CustomCheckboxVue :data="ele" />
      </li>
    </ul>
  </div>
</template>
