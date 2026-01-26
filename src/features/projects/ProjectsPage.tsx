"use client";

import { motion } from "framer-motion";
import Footer from "shared/components/ui/Footer";
import WorkCard from "features/landing/ui/components/WorkCard";
import { workCardsList } from "features/landing/ui/data";

const backgroundColors = [
    "bg-gradient-to-br from-[#CDE9EB] to-[#E8F4F5]",
    "bg-gradient-to-br from-[#8DA8C9] to-[#DFE6EF]",
    "bg-gradient-to-br from-[#6E71A8] to-[#272727]",
];

export const ProjectsPage = () => {
    return (
        <>
            <div className="min-h-dvh pb-10">
                <main className="flex flex-col items-center w-full px-5 sm:px-10 lg:px-14 pt-24 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="w-full max-w-5xl"
                    >
                        <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
                            All Projects
                        </h1>
                        <p className="text-secondary mb-10">
                            A collection of my work and side projects.
                        </p>

                        <div className="flex flex-col gap-10">
                            {workCardsList.map((card, index) => (
                                <WorkCard
                                    key={card.id}
                                    workCard={card}
                                    bgColor={backgroundColors[index % backgroundColors.length]}
                                />
                            ))}
                        </div>
                    </motion.div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default ProjectsPage;
