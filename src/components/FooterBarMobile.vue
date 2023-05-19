<script setup>
import InstagramIcon from "./Icons/InstagramIcon.vue";
import TwitterIcon from "./Icons/TwitterIcon.vue";
import GithubIcon from "./Icons/GithubIcon.vue";

/******************************
 * SELF-EXPLANATORY COMPONENT *
 ******************************/
</script>

<template>
  <div
    class="relative flex lg:hidden flex-row items-center justify-between mt-auto text-[#607B96] border-solid border-[#1e2d3d] border-t-[1px]"
  >
    <li class="pl-6">find me in</li>

    <li
      class="flex items-center text-2xl border-solid border-[#1e2d3d] border-l-[1px]"
    >
      <a
        href="/"
        class="p-4 border-solid border-[#1e2d3d] border-r-[1px] hover:text-white"
      >
        <TwitterIcon />
      </a>
      <a
        href="/"
        class="p-4 border-solid border-[#1e2d3d] border-r-[1px] hover:text-white"
      >
        <InstagramIcon />
      </a>
      <a href="/" class="p-4 text-sm hover:text-white">
        <GithubIcon />
      </a>
    </li>
  </div>
</template>
