import { WorkCard as WorkCardType } from "@/features/landing/domain/types";
import { Chip } from "shared/components/ui/Chip";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const WorkCard = ({
  bgColor,
  workCard,
  index = 0,
}: {
  bgColor?: string;
  workCard: WorkCardType;
  index?: number;
}) => {
  const [imagesToShow, setImagesToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setImagesToShow(workCard.images.length);
      } else if (width >= 768) {
        setImagesToShow(Math.min(2, workCard.images.length));
      } else {
        setImagesToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [workCard.images.length]);

  const handleCardClick = () => {
    const savedData = localStorage.getItem("currentProject");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (parsed.id !== workCard.id) {
        localStorage.removeItem("currentProject");
      }
    }
  };

  return (
    <motion.div
      className="flex flex-col gap-5 mt-5 group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={`/projects/${workCard.id}`}
        className="block"
        onClick={handleCardClick}
      >
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-5">
            <h2 className="text-2xl font-bold">{workCard.projectName}</h2>
            <Image
              src="/icons/right-arrow-dark.svg"
              alt="right-arrow-dark"
              width={30}
              height={30}
              className="
                transition-transform
                duration-500
                ease-out
                group-hover:translate-x-2
                "
            />
          </div>
          <div className="flex justify-center items-center border-2 text-secondary text-sm border-secondary rounded-4xl px-4 py-2">
            {workCard.year}
          </div>
        </div>
      </Link>
      <p className="text-foreground text-xl font-light">
        {workCard.description}
      </p>
      <Chip title={workCard.type} />
      <Link
        href={`/projects/${workCard.id}`}
        className="block"
        onClick={handleCardClick}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
            ease: "easeOut",
          }}
          className={`relative cursor-pointer flex justify-center gap-10 h-full rounded-4xl p-10 ${bgColor}`}
        >
          {workCard.images.slice(0, imagesToShow).map((imageSrc, imgIndex) => (
            <Image
              key={imgIndex}
              src={imageSrc}
              width={700}
              height={700}
              alt={`${workCard.projectName} screenshot ${imgIndex + 1}`}
              quality={95}
              className="
              object-contain
              group-hover:scale-110 
              transition-transform
              duration-500
              w-fit
              h-100
              max-h-100"
            />
          ))}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default WorkCard;
