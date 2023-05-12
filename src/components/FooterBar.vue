<script setup>
import TwitterIcon from "./Icons/TwitterIcon.vue";
import InstagramIcon from "./Icons/InstagramIcon.vue";
import GithubIcon from "./Icons/GithubIcon.vue";
</script>

<template>
  <ul
    class="w-full mt-auto flex flex-row items-center text-[#607B96] border-solid border-[#1e2d3d] border-t-[1px] bg-[#011627]"
  >
    <li class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px]">
      find me in
    </li>
    <a
      href="https://twitter.com/AdanAyaz1"
      target="_blank"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] text-2xl hover:text-gray-100"
    >
      <TwitterIcon />
    </a>

    <a
      href="https://instagram.com/adan_ayaz"
      target="_blank"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] text-2xl hover:text-gray-100"
    >
      <InstagramIcon />
    </a>

    <a
      href="https://github.com/adan-ayaz-stan"
      target="_blank"
      class="ml-auto px-6 py-4 border-solid border-[#1e2d3d] border-l-[1px] hover:text-gray-100"
    >
      @adan-ayaz-stan
      <GithubIcon class="inline" />
    </a>
  </ul>
</template>
