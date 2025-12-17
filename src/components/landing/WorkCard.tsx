import Image from "next/image";
import { WorkCard as WorkCardType } from "../../types";
import { Chip } from "../ui/Chip";

export const WorkCard = ({ bgColor, workCard }: { bgColor?: string, workCard: WorkCardType }) => {
    return (
        <div>
            <Chip title={workCard.type} />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row mt-10 gap-5">
                    <h2 className="text-4xl font-bold">{workCard.projectName}</h2>
                    <img src="/icons/right-arrow-dark.svg" alt="right-arrow-dark" />
                </div>
                <div className="border-2 text-secondary border-secondary rounded-4xl px-4 py-2">
                    {workCard.year}
                </div>
            </div>
            <p className="text-foreground text-xl font-light mt-3">{workCard.description}</p>
            <div className={`w-full flex flex-row justify-center items-center gap-6 mt-16 py-10 rounded-4xl min-h-[660px] ${bgColor}`}>
                {workCard.images.map((imageSrc, index) => (
                    <Image key={index} className="rounded-4xl" src={imageSrc} alt={`${workCard.projectName}-${index}`} width={620} height={600} priority={index === 0} />
                ))}
            </div>
        </div>
    )
}

export default WorkCard;