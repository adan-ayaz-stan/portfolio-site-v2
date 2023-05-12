<script setup>
import ArrowDown from "../Icons/ArrowDown.vue";
import CustomCheckboxVue from "./CustomCheckbox.vue";

import ReactIcon from "../Icons/ReactIcon.svg";
import VueIcon from "../Icons/VueIcon.svg";
import HtmlIcon from "../Icons/HtmlIcon.svg";
import CssIcon from "../Icons/CssIcon.svg";
import NextJsIcon from "../Icons/NextJsIcon.svg";
import NuxtIcon from "../Icons/NuxtIcon.svg";
import NestIcon from "../Icons/NestIcon.svg";
import PythonIcon from "../Icons/PythonIcon.svg";

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
    title: "NestJS",
    img: NestIcon,
    id: "_nestjs",
  },
  {
    title: "Python",
    img: PythonIcon,
    id: "_python",
  },
];
</script>

<template>
  <div class="w-[250px] h-full border-r-[1px] border-[#1E2D3D]">
    <h1
      class="flex gap-2 items-center px-8 py-1 border-b-[1px] border-[#1E2D3D]"
    >
      <ArrowDown /> projects
    </h1>

    <ul class="flex flex-col gap-1 px-8 py-4">
      <li
        v-for="ele in data"
        class="flex flex-row items-center gap-4 text-[#607B96]"
      >
        <CustomCheckboxVue :data="ele" />
      </li>
    </ul>
  </div>
</template>
