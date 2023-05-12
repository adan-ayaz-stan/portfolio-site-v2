<script setup>
import GameSection from "./GameSection.vue";
</script>

<template>
  <div
    class="h-full w-screen grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-4 px-[15%] py-12"
  >
    <!-- Text Section -->
    <div class="flex flex-col items-center lg:items-start">
      <p class="text-xl">Hi all. I am</p>
      <h1 class="text-[4em] text-center lg:text-left leading-tight">
        Adan Ayaz
      </h1>
      <h3 class="text-[2em] text-blue-600">> Full Stack Developer</h3>

      <p class="mt-12 text-gray-500">// complete the game to continue</p>
      <p class="text-gray-500">// you can also see it on my github page</p>

      <p class="flex gap-3 mt-2">
        <span class="text-blue-600">const</span
        ><span class="text-green-400">githubLink</span>=<a
          href="https://github.com/adan-ayaz-stan"
          target="_blank"
          class="text-yellow-600"
          >"https://github.com/adan-ayaz-stan"</a
        >
      </p>
    </div>

    <!-- Game Section -->
    <div class="relative h-full flex items-center justify-center">
      <div
        class="absolute top-0 left-0 h-[20em] w-[20em] border-2 z-[-10] blur-2xl"
      >
        <div
          style="
            clip-path: polygon(
              20% 0%,
              55% 23%,
              100% 20%,
              100% 80%,
              57% 100%,
              31% 70%,
              0 76%,
              0% 20%
            );
          "
          class="h-[90%] w-[90%] flex items-center justify-center bg-[#43D9AD] bg-opacity-70"
        />
      </div>
      <div
        class="absolute bottom-0 right-0 h-[20em] w-[20em] border-2 z-[-10] blur-2xl"
      >
        <div
          style="
            clip-path: polygon(
              20% 0%,
              55% 23%,
              100% 20%,
              100% 80%,
              57% 100%,
              31% 70%,
              0 76%,
              0% 20%
            );
          "
          class="h-[90%] w-[90%] flex items-center justify-center bg-[#4D5BCE] bg-opacity-90 rotate-45"
        />
      </div>

      <GameSection />
    </div>
  </div>
</template>
