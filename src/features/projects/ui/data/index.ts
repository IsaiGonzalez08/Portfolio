import { WorkCard } from "@/features/landing/domain/types";

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