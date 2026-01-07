import Image from "next/image";
import { WorkCard as WorkCardType } from "../../types";
import { Chip } from "../ui/Chip";

export const WorkCard = ({ bgColor, workCard }: { bgColor?: string, workCard: WorkCardType }) => {
    return (
        <div className="flex flex-col gap-5 mt-5">
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
            <div className={`w-full flex flex-row justify-center items-center rounded-4xl  ${bgColor}`}>
                {workCard.images.map((imageSrc, index) => (
                    <Image key={index} className="rounded-4xl" src={imageSrc} alt={`${workCard.projectName}-${index}`} width={620} height={600} priority={index === 0} />
                ))}
            </div>
        </div>
    )
}

export default WorkCard;