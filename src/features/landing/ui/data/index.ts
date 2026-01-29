import {
  companyItem,
  iconItem,
  ItemStack,
  ProjectResult,
  WorkCard,
} from "@/features/landing/domain/types";

export const listIcons = [
  {
    name: "LinkedIn",
    icon: "/icons/LinkedIn.svg",
    href: "https://www.linkedin.com/in/gerardo-isa%C3%AD-gonz%C3%A1lez-ruiz-b02b6b224/",
  },
  {
    name: "GitHub",
    icon: "/icons/GitHub.svg",
    href: "https://github.com/IsaiGonzalez08",
  },
  {
    name: "Dribbble",
    icon: "/icons/Dribbble.svg",
    href: "https://dribbble.com/isaigonza",
  },
] as iconItem[];

export const listCompanies = [
  {
    name: "Pixzelle Studio",
    role: "Front-end Developer",
    date: "August 2023 - Currently",
    description:
      "Development of interactive web pages using frameworks such as Vue, Svelte and Next.js and maintenance of cross-platform applications with Flutter.",
    tags: [
      {
        type: "Web",
      },
      {
        type: "Mobile",
      },
    ],
  },
  {
    name: "Vara Network",
    role: "Web Developer",
    date: "January/2023 - April/2023",
    description:
      "Leading front-end website development and involved in website design.",
    tags: [
      {
        type: "Web",
      },
      {
        type: "UX/UI",
      },
    ],
  },
  {
    name: "Dsoft",
    role: "Intership Web Developer",
    date: "April/2022 - August/2022",
    description:
      "Participation in web development implementation of new features in internal projects and troubleshooting in production systems.",
    tags: [
      {
        type: "Web",
      },
      {
        type: "UX/UI",
      },
    ],
  },
] as companyItem[];

export const workCardsList = [
  {
    id: "cmkyie9330000c0thv7ugizap",
    type: "Web Development",
    projectName: "AquaQA",
    description: "Website to monitor water quality using an IoT.",
    year: "2025",
    images: ["/gifts/aquaQA-demo.gif"],
  },
  {
    id: "rabbitGO",
    type: "Mobile Application",
    projectName: "RabbitGO",
    description:
      "Application that gives information about public transport service with an interactive map.",
    year: "2024",
    images: [
      "/icons/rabbitgo-1.png",
      "/icons/rabbitgo-2.png",
    ],
  },
  {
    id: "mainCoin",
    type: "Web Development",
    projectName: "MainCoin",
    description:
      "Application that gives information about public transport service.",
    year: "2023",
    images: ["/icons/mainCoin.png"],
  },
] as WorkCard[];

export const skillCategories = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Svelte",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "React Native", "Dart"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "Figma", "VS Code"],
  },
];

export const certificates = [
  {
    title: "Coursera / Google UX Design",
    issuer: "Google",
    date: "2024",
    image: "/icons/coursera.svg",
  },
  {
    title: "Coursera / Front-End Developer Professional",
    issuer: "Meta",
    date: "2023",
    image: "/icons/coursera.svg",
  },
];

export const stackFromProjects = [
  {
    id: "cmkyie9330000c0thv7ugizap",
    name: "AquaQA",
    icons: [
      "/icons/Flutter.svg",
      "/icons/Firebase.svg",
      "/icons/GoogleMaps.svg",
    ],
  },
  {
    id: "rabbitGO",
    name: "RabbitGO",
    icons: [
      "/icons/Flutter.svg",
      "/icons/Firebase.svg",
      "/icons/GoogleMaps.svg",
    ],
  },
  {
    id: "mainCoin",
    name: "MainCoin",
    icons: [
      "/icons/Flutter.svg",
      "/icons/Firebase.svg",
      "/icons/GoogleMaps.svg",
    ],
  },
] as ItemStack[];

export const projectsResults = [
  {
    id: "cmkyie9330000c0thv7ugizap",
    name: "AquaQA",
    results: [
      {
        title: "Smart water monitoring",
        description:
          "AquaQA monitors water quality in real time through an IoT system that integrates key sensors such as temperature, pH, turbidity and magnetism,",
        image: "/gifts/IoT-video.gif",
      },
      {
        title: "Intuitive information display",
        description:
          "The data collected is displayed through dashboards and interactive graphics, designed so that any user can understand without the need for technical knowledge.",
        image: "/gifts/IoT-video.gif",
      },
      {
        title: "Scalable and modular architecture",
        description:
          "The application is built with a full stack architecture in Next.js based on features and layers (UI, Application, Services and Domain), which facilitates maintenance, scalability and the incorporation of new functionalities.",
        image: "/gifts/IoT-video.gif",
      },
    ],
  },
] as ProjectResult[];
