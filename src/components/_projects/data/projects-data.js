import ReactIcon from "../../../assets/icons/SkillIconsReactDark.svg";
import VueIcon from "../../../assets/icons/SkillIconsVuejsDark.svg";
import HtmlIcon from "../../../assets/icons/DeviconHtml5.svg";
import CssIcon from "../../../assets/icons/DeviconCss3.svg";
import NextJsIcon from "../../../assets/icons/LogosNextjsIcon.svg";
import NuxtIcon from "../../../assets/icons/SkillIconsNuxtjsDark.svg";
import NestIcon from "../../../assets/icons/SkillIconsNestjsDark.svg";
import PythonIcon from "../../../assets/icons/SkillIconsPythonDark.svg";

const data = [
  {
    id: 1000,
    title: "Project 1",
    theme: "_kanban-board",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "A general Kanban Ticketing System built with NextJS and Supabase.",
    link: "https://github.com/adan-ayaz-stan/kanban-ticketing-system",

    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fmonday-blogs%2Fw_1092%2Ch_670%2Cc_fit%2Ffl_lossy%2Cf_auto%2Cq_auto%2Fwp-blog%2F2021%2F02%2Fsample-Kanban-visual.png&f=1&nofb=1&ipt=de0b84a539373c3e4323016d89fd9896b8fbc68c14e57022af7ff06266605ff2&ipo=images",
  },
  {
    id: 2000,
    title: "Project 2",
    theme: "_conference-app",
    technologies: [
      { title: "Vue", icon: VueIcon },
      { title: "Nuxt", icon: NuxtIcon },
    ],
    desc: "A conference-app built on Nuxt, Supabase and tRPC.",
    link: "https://github.com/adan-ayaz-stan/conference-app-nuxt",
    img: "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3000,
    title: "Project 3",
    theme: "_chat-app",
    technologies: [
      { title: "Vue", icon: VueIcon },
      { title: "Nuxt", icon: NuxtIcon },
    ],
    desc: "A basic chat application built on Nuxt and Supabase.",
    link: "https://github.com/adan-ayaz-stan/nuxt-chat-application",
    img: "https://i.ibb.co/fDcYLCp/OIG.jpg",
  },
  {
    id: 4000,
    title: "Project 4",
    theme: "_online-store",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "A mimickery of a online store design using NextJS.",
    link: "https://github.com/adan-ayaz-stan/the-bottle-haus-project",
    img: "https://i.ibb.co/tbymZzK/index.png",
  },
  {
    id: 5000,
    title: "Project 5",
    theme: "_portfolio-site",
    technologies: [{ title: "Vue", icon: VueIcon }],
    desc: "My own portfolio site built on top of Vue as a SPA.",
    link: "/",
    img: "https://i.ibb.co/WcFc25V/index2.png",
  },
  {
    id: 6000,
    title: "Project 6",
    theme: "_agency-website",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "An agency website built with NextJS and Framer Motion.",
    link: "https://luceforge.vercel.app",
    icon: NextJsIcon,
    img: "https://i.ibb.co/NZ7skxR/image.png",
  },
  {
    id: 7000,
    title: "Project 7",
    theme: "_novel-pub",
    technologies: [
      { title: "React", icon: ReactIcon },
      { title: "NextJS", icon: NextJsIcon },
    ],
    desc: "A full-stack light novel web app built atop of NextJS frontend + NextJS Web scraping",
    link: "https://spitfiresnovelpub.vercel.app",
    img: "https://img.freepik.com/free-photo/colorful-ball-ribbons_71767-142.jpg?t=st=1687028246~exp=1687028846~hmac=95b0d7a5a5bc29ce5c447dfb77fea6cacd6f7ddf4fc532fa2d3a256aeba38b97",
  },
];

export default data;
