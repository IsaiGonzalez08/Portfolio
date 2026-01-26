import { WorkCard as WorkCardType } from "@/features/landing/domain/types";
import { Chip } from "shared/components/ui/Chip";
import Image from "next/image";
import { motion } from "framer-motion";

export const WorkCard = ({ bgColor, workCard }: { bgColor?: string, workCard: WorkCardType }) => {
    return (
        <motion.div className="flex flex-col gap-5 mt-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center gap-5">
                    <h2 className="text-2xl font-bold">{workCard.projectName}</h2>
                    <img src="/icons/right-arrow-dark.svg" alt="right-arrow-dark" />
                </div>
                <div className="flex justify-center items-center border-2 text-secondary text-sm border-secondary rounded-4xl px-4 py-2">
                    {workCard.year}
                </div>
            </div>
            <p className="text-foreground text-xl font-light">{workCard.description}</p>
            <Chip title={workCard.type} />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`cursor-pointer w-full flex flex-row justify-center items-center rounded-4xl p-10  ${bgColor}`}>
                {workCard.images.map((imageSrc, index) => (
                    <Image key={index} className="rounded-4xl" src={imageSrc} alt={`${workCard.projectName}-${index}`} width={620} height={600} priority={index === 0} />
                ))}
            </motion.div>
        </motion.div>
    )
}

export default WorkCard;