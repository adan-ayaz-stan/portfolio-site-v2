<script setup>
import { ref, watch } from "vue";
import ProjectCard from "./ProjectCard.vue";
import { useProjectsStore } from "../../stores/projectsStore";

import CloseIcon from "../Icons/CloseIcon.vue";

import data from "./data/projects-data";

const projectsStore = useProjectsStore();

const projectsToRender = ref(data);

watch(projectsStore, () => {
  // If no filters, then show all projects
  if (projectsStore.filters.length == 0) {
    return (projectsToRender.value = data);
  }

  // Only those projects that are in the filter
  return (projectsToRender.value = data.filter((project) => {
    return projectsStore.filters.includes(project.technology);
  }));
});
</script>

<template>
  <div class="relative h-full w-full overflow-y-auto">
    <div class="absolute top-0 left-0 w-full h-fit px-20 py-28">
      <div
        class="min-h-[29px] absolute top-0 left-0 w-full flex flex-row py-1 border-b-[1.5px] border-[#1E2D3D]"
      >
        <p
          v-if="projectsStore.filters.length != 0"
          class="flex gap-2 items-center px-2 border-r-[1.5px] border-[#1E2D3D]"
        >
          <span v-for="ele in projectsStore.filters">{{ ele }};</span>
          <span @click="projectsStore.resetFilters">
            <CloseIcon
              class="text-2xl p-1 hover:bg-gray-800 rounded-lg cursor-pointer"
            />
          </span>
        </p>
      </div>
      <div class="grid grid-cols-3 auto-rows-fr gap-16">
        <!-- Card -->
        <TransitionGroup name="list">
          <ProjectCard
            v-for="(ele, ind) in projectsToRender"
            :data="ele"
            :index="ind"
            :key="ele.id"
          />
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.list-leave-active {
  position: absolute;
  max-width: 325px;
}
</style>
