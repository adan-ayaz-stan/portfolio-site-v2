<script setup>
import ArrowDown from "../../Icons/ArrowDown.vue";
// Data
import personalInfo from "../data/personal-info";
import professionalInfo from "../data/professional-info";
import interestsInfo from "../data/interests-info";
import { ref, provide, watch } from "vue";
import Category from "./Category.vue";
import ActiveOpenFile from "./ActiveOpenFile.vue";
import CodeSnippets from "../CodeSnippets.vue";
import EmailIcon from "../../Icons/EmailIcon.vue";
import PhoneIcon from "../../Icons/PhoneIcon.vue";

const categories = [
  {
    category: "personal",
    data: personalInfo,
  },
  {
    category: "professional",
    data: professionalInfo,
  },
  {
    category: "interests",
    data: interestsInfo,
  },
];

const activeFile = ref({
  fileName: "personal",
  fileContent: [
    "I am a seasoned Full Stack Developer with expertise in frontend and backend development, utilizing various frameworks and languages.",
    "",
    "I have experience in building real-time applications and complex web components.",
    "As a freelancer, I take on diverse projects.",
    "",
    "In addition to my professional pursuits, I have a deep passion for music, gaming, and exploring captivating light novels, mangas, manhwas, and animes.",
    "",
    "My versatile skill set and diverse interests drive me to deliver exceptional results.",
  ],
  path: ["personal", "bio", ""],
});

function setActiveFile(fileName, fileContent, pathCategory, folderName) {
  activeFile.value = {
    fileName,
    fileContent,
    path: [pathCategory, folderName, fileName],
  };
}

provide("setActiveFile", setActiveFile);
</script>

<template>
  <div class="lg:hidden flex flex-col h-fit overflow-y-scroll">
    <h1 class="px-8 py-5 text-white text-xl">_about-me</h1>
    <!-- The Category Sections with Folders and Files -->
    <div class="flex flex-col gap-1">
      <Category v-for="ele in categories" :data="ele" />
      <div>
        <h1
          class="flex flex-row gap-2 items-center px-6 py-1 text-xl bg-gray-700 cursor-pointer"
        >
          <ArrowDown /> contacts
        </h1>

        <div class="flex flex-col gap-1 px-5 py-6 text-[#607399]">
          <a href="/" class="flex gap-2 items-center text-lg">
            <EmailIcon /> adanayaztracer@gmail.com
          </a>
          <a href="/" class="flex gap-2 items-center text-lg">
            <PhoneIcon /> +92 325 682 3910
          </a>
        </div>
      </div>
    </div>

    <!-- The active file section which shows the current file open -->
    <ActiveOpenFile :activeFile="activeFile" />

    <!-- Code Snippets -->
    <CodeSnippets />
  </div>
</template>
