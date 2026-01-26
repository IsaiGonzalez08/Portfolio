import { wordCardsList } from "../data";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";

export const WorkSection = () => {

    const backgroundColors = [
        "bg-gradient-to-br from-[#CDE9EB] to-[#E8F4F5]",
        "bg-gradient-to-br from-[#8DA8C9] to-[#DFE6EF]",
        "bg-gradient-to-br from-[#6E71A8] to-[#272727]",
    ];

    return (
        <section id="work" className="mt-32 px-5 sm:px-10 lg:px-14">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h1 className="text-foreground font-bold text-4xl sm:text-5xl">Selected work</h1>
            </motion.div>
            <div className="flex flex-col gap-10">
                {wordCardsList.map((card, index) =>
                    <WorkCard
                        key={index}
                        workCard={card}
                        bgColor={backgroundColors[index % backgroundColors.length]}
                    />
                )}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center w-full">
                <button className="cursor-pointer my-20 w-full sm:w-1/4 py-3 bg-foreground text-white rounded-4xl hover:bg-secondary transition-colors">
                    See more
                </button>
            </motion.div>
        </section>
    )
}

export default WorkSection;