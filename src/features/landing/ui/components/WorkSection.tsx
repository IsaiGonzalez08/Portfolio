import { wordCardsList } from "../data";
import WorkCard from "./WorkCard";

export const WorkSection = () => {

    const backgroundColors = [
        "bg-gradient-to-br from-[#CDE9EB] to-[#E8F4F5]",
        "bg-gradient-to-br from-[#6E71A8] to-[#272727]",
        "bg-gradient-to-br from-[#8DA8C9] to-[#DFE6EF]"
    ];

    return (
        <section id="work" className="mt-14 px-5">
            <h1 className="text-foreground font-bold text-4xl">Selected work</h1>
            <div className="flex flex-col gap-10">
                {wordCardsList.map((card, index) =>
                    <WorkCard
                        key={index}
                        workCard={card}
                        bgColor={backgroundColors[index % backgroundColors.length]}
                    />
                )}
            </div>

            <button className="cursor-pointer my-20 w-full py-3 bg-foreground text-white rounded-4xl hover:bg-secondary transition-colors">
                See more
            </button>
        </section>
    )
}

export default WorkSection;