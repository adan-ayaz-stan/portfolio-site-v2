<script setup>
import { ref } from "vue";
import { useGameStore } from "../stores/gameStore";
import { useNavStore } from "../stores/navStore";

/****************************
 * IMPORT STORES FROM PINIA *
 ****************************/

const gameStore = useGameStore();
const navStore = useNavStore();

/*************************************
 * INITIAL POSITION OF THE UNDERLINE IN TH NAVBAR *
 *************************************/

const activeBar = ref({
  width: 93,
  posY: 250,
});

/****************************************************
 * SETTING THE POSITION OF THE UNDERLINE UPON HOVER *
 ****************************************************/

function elementHovered(s) {
  activeBar.value = { width: s.target.offsetWidth, posY: s.target.offsetLeft };
}
function hoverLeave(e) {
  const activeEle = document.getElementById(navStore.activeElement);
  activeBar.value = {
    width: activeEle.offsetWidth,
    posY: activeEle.offsetLeft,
  };
}

/****************************************
 * THIS FUNCTION CHANGES THE NAVIGATION *
 ****************************************/

function setElementActive(element) {
  navStore.setActiveElement(element);
}
</script>

<template>
  <ul
    class="relative hidden lg:flex flex-row text-[#607B96] border-solid border-[#1e2d3d] border-b-[1px]"
    style="font-family: 'Fira Code' monospace"
  >
    <!--  -->
    <div
      :style="{ width: `${activeBar.width}px`, left: `${activeBar.posY}px` }"
      class="absolute bottom-0 min-w-[0px] h-[2px] bg-[#fea55f] transition-all duration-500 whitespace-nowrap"
    ></div>
    <li
      @mouseenter="elementHovered"
      @mouseleave="hoverLeave"
      :style="
        gameStore.win
          ? { transform: 'translateY(0%)' }
          : { transform: 'translateY(-100%)' }
      "
      id="_user"
      class="w-[250px] px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] transition-all duration-700 delay-100 cursor-pointer whitespace-nowrap"
    >
      adan-ayaz
    </li>
    <li
      @click="setElementActive('_hello')"
      @mouseenter="elementHovered"
      @mouseleave="hoverLeave"
      id="_hello"
      :style="{ color: navStore.activeElement == '_hello' ? 'white' : 'gray' }"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] transition-all duration-700 cursor-pointer whitespace-nowrap"
    >
      _hello
    </li>
    <li
      @click="setElementActive('_about-me')"
      @mouseenter="elementHovered"
      @mouseleave="hoverLeave"
      :style="{
        transform: gameStore.win ? 'rotateX(0deg)' : 'rotateX(90deg)',
        color: navStore.activeElement == '_about-me' ? 'white' : 'gray',
      }"
      id="_about-me"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] duration-700 delay-[400ms] origin-top cursor-pointer whitespace-nowrap"
    >
      _about-me
    </li>
    <li
      @click="setElementActive('_projects')"
      @mouseenter="elementHovered"
      @mouseleave="hoverLeave"
      :style="{
        transform: gameStore.win ? 'rotateX(0deg)' : 'rotateX(90deg)',
        color: navStore.activeElement == '_projects' ? 'white' : 'gray',
      }"
      id="_projects"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-r-[1px] origin-top transition-all duration-700 delay-[900ms] cursor-pointer whitespace-nowrap"
    >
      _projects
    </li>
    <li
      @click="setElementActive('_contact-me')"
      @mouseenter="elementHovered"
      @mouseleave="hoverLeave"
      id="_contact-me"
      :style="{
        color: navStore.activeElement == '_contact-me' ? 'white' : 'gray',
      }"
      class="px-6 py-4 border-solid border-[#1e2d3d] border-l-[1px] ml-auto cursor-pointer whitespace-nowrap"
    >
      _contact-me
    </li>
  </ul>
</template>
