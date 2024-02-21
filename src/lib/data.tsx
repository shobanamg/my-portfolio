import { Github, Twitter, Figma } from "lucide-react";
import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-react.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoNodejs from "/public/images/logos/icon-nodejs.svg";
import LogoExpress from "/public/images/logos/icon-express.svg";
import LogoExpressLight from "/public/images/logos/icon-express-light.svg";
import LogoMongoDB from "/public/images/logos/icon-mongodb.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";
import LogoPrisma from "/public/images/logos/icon-prisma.svg";
import LogoPrismaLight from "/public/images/logos/icon-prisma-light.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoMySQL from "/public/images/logos/icon-mysql.svg";
import LogoPostman from "/public/images/logos/icon-postman.svg";
import LogoFirebase from "/public/images/logos/icon-firebase.svg";
import LogoMaterialUI from "/public/images/logos/icon-material-ui.svg";
import LogoDocker from "/public/images/logos/icon-docker.svg";
import LogoGithub from "/public/images/logos/icon-github.svg";
import LogoCostbits from "/public/images/logos/logo-costbits.svg";
import LogoCostbitsLight from "/public/images/logos/logo-costbits-light.svg";
import LogoHYF from "/public/images/logos/logo-hack-your-future.svg";
import LogoHYFLight from "/public/images/logos/logo-hack-your-future-light.svg";

import ProjectCountries from "/public/images/project-countries.png";
import ProjectCinemania from "/public/images/project-cinemania.png";
import ProjectAirbnb from "/public/images/project-airbnb.png";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

export const NAV_LINKS = [
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/shobanamg",
  },
  {
    icon: Twitter,
    url: "https://twitter.com/ShobanaMathiarl",
  },
  {
    icon: Figma,
    url: "https://www.figma.com",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Firebase",
    logo: LogoFirebase,
    url: "https://firebase.google.com/",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "MySQL",
    logo: LogoMySQL,
    url: "https://www.mysql.com/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com/",
  },
  {
    label: "MaterialUI",
    logo: LogoMaterialUI,
    url: "https://material-ui.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Prisma",
    logo: LogoPrisma,
    darkModeLogo: LogoPrismaLight,
    url: "https://www.prisma.io/",
  },
  {
    label: "Github",
    logo: LogoGithub,
    url: "https://github.com/",
  },
  {
    label: "Postman",
    logo: LogoPostman,
    url: "https://www.postman.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://docker.com/",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoCostbits,
    darkModeLogo: LogoCostbitsLight,
    logoAlt: "costbits logo",
    position: "Frontend Developer",
    startDate: new Date(2023, 6),
    endDate: new Date(2023, 10),
    summary: [
      "Worked as a frontend web developer (React /  Typescript / Tailwindcss) at CosBits.",
      "Worked on the frontend of the CostBits web app.",
    ],
  },
  {
    logo: LogoHYF,
    darkModeLogo: LogoHYFLight,
    logoAlt: "HYF logo",
    position: "Full Stack Web Developer",
    startDate: new Date(2022, 8),
    endDate: new Date(2023, 4),
    summary: [
      "Completed 32 week intensive full-stack development boot camp",
      "Developed and maintained the backend of the Meal Sharing Individual Project (frontend + backend).",
      "Lead the team in the final project.",
      "Worked on both frontend and backend of the final project.",
      "Implemented more than 10 projects using JS, React, TypeScript, Tailwindcss, Nodejs, Express, MongoDB, MySQL, Prisma, Firebase, Docker, and more.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Countries App",
    description:
      "A Countries Application, where you can search for the countries and see more details about it.",
    demoUrl: "https://shobanamg.github.io/countries-app/",
    sourceCodeUrl: "https://github.com/shobanamg/countries-app",
    previewImage: ProjectCountries,
    technologies: [
      "React",
      "Typescript",
      "Tailwindcss",
      "Rest Countries API",
      "React Query",
      "Vitejs",
    ],
  },
  {
    name: "Airbnb Clone",
    description:
      "An Airbnb inspired platform, simplifying the search and reservation of diverse accommodations for a personalized travel experience.",
    demoUrl: "https://rent-property-example.vercel.app/",
    sourceCodeUrl: "https://github.com/shobanamg/airbnb-clone",
    previewImage: ProjectAirbnb,
    technologies: [
      "React",
      "Typescript",
      "MongoDB",
      "Nextjs",
      "Cloudinary",
      "Prisma",
      "Tailwindcss",
      "Next-Auth",
    ],
  },
  {
    name: "Cinemania",
    description:
      "For my culminating project at HackYourFuture, I played a key role as team lead while collaborating with my team on both front-end and back-end development.",
    demoUrl: "https://cinemania.fly.dev/movies",
    sourceCodeUrl: "https://github.com/HackYourFuture-CPH/CINEMANIA",
    previewImage: ProjectCinemania,
    technologies: [
      "React",
      "Express.js",
      "Material UI",
      "Styled Components",
      "Emotion",
      "MySQL",
      "Node.js",
      "Knex.js",
      "Firebase",
      "Docker",
    ],
  },
];
