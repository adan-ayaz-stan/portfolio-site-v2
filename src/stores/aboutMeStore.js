// stores/counter.js
import { defineStore } from "pinia";

export const useAboutMeStore = defineStore("about-me-store", {
  state: () => {
    return {
      opened: {
        category: "personal-info",
        file: "personal-info",
        files: [
          {
            title: "personal-info",
            content: [
              "/**",
              "I am a seasoned Full Stack Developer with expertise in frontend and backend development, utilizing various frameworks and languages.",
              "",
              "I have experience in building real-time applications and complex web components.",
              "As a freelancer, I take on diverse projects.",
              "",
              "In addition to my professional pursuits, I have a deep passion for music, gaming, and exploring captivating light novels, mangas, manhwas, and animes.",
              "",
              "My versatile skill set and diverse interests drive me to deliver exceptional results.",
              "*/",
            ],
          },
        ],
      },
    };
  },
  actions: {
    // All actions related to side navigation i.e profess., perso., interests

    // All actions related to files and folders
    setActiveCategory(category) {
      this.opened.category = category;
    },
    setActiveFile(fileName) {
      this.opened.file = fileName;
    },
    openNewFile(file) {
      this.opened.files.push(file);
      this.opened.file = file.title;
    },
    closeOpenedFile(fileName) {
      this.opened.files = this.opened.files.filter(
        (ele) => ele.title != fileName
      );
    },
  },
});
