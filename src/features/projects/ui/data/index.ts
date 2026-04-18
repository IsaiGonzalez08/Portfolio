import { ItemStack, ProjectResult, WorkCard } from "@/features/landing/domain/types";

export const workCardsList = [
  {
    id: "cmkyie9330000c0thv7ugizap",
    type: "Web Development",
    projectName: "AquaQA",
    description: "Website to monitor water quality using an IoT.",
    year: "2025",
    images: ["/videos/aquaQA-demo.mp4"],
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
      "/icons/rabbitgo-2.png",
    ],
  },
  {
    id: "mainCoin",
    type: "Web Development",
    projectName: "MainCoin",
    description:
      "Interactive course platform that allows setting objectives and granting rewards, such as products Web3 technology",
    year: "2023",
    images: ["/icons/mainCoin.png"],
  },
  {
    id: "dreamSafe",
    type: "Web Development",
    projectName: "DreamSafe",
    description:
      "Web application that allows create an insurance report",
    year: "2023",
    images: ["/icons/dreamSafe-1.png"],
  },
] as WorkCard[];

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
        image: "/videos/aqua-water-demo.mp4",
      },
      {
        title: "Intuitive information display",
        description:
          "The data collected is displayed through dashboards and interactive graphics, designed so that any user can understand without the need for technical knowledge.",
        image: "/videos/aqua-water-demo.mp4",
      },
      {
        title: "Scalable and modular architecture",
        description:
          "The application is built with a full stack architecture in Next.js based on features and layers (UI, Application, Services and Domain), which facilitates maintenance, scalability and the incorporation of new functionalities.",
        image: "/videos/aqua-water-demo.mp4",
      },
    ],
  },
] as ProjectResult[];
