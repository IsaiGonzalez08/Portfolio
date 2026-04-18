"use client";
import { listCompanies } from "../data";
import { motion } from "framer-motion";

const ExperienceSection = () => {
  return (
    <section id="experience" className="mt-20 px-5 sm:px-10 lg:px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-foreground font-bold text-4xl sm:text-5xl">
          Experience
        </h1>
      </motion.div>

      <div className="relative mt-12">
        <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-px bg-linear-to-b from-foreground/30 via-foreground/20 to-transparent" />

        <div className="flex flex-col gap-12">
          {listCompanies.map((company, index) => {
            const isCurrentJob = company.date
              .toLowerCase()
              .includes("currently");

            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                key={index}
                className="relative pl-8 sm:pl-14 group"
              >
                <div
                  className={`absolute left-0 sm:left-4 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    isCurrentJob
                      ? "bg-foreground border-foreground shadow-[0_0_8px_rgba(46,46,46,0.4)]"
                      : "bg-background border-foreground/40 group-hover:border-foreground group-hover:bg-foreground/10"
                  }`}
                />

                <div className="relative p-5 sm:p-6 rounded-xl bg-snow-white/50 hover:bg-snow-white transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground font-semibold text-xl sm:text-2xl leading-tight">
                        {company.role}
                      </h3>
                      <span className="text-foreground/70 font-medium text-base">
                        {company.name}
                      </span>
                    </div>

                    <span
                      className={`self-center sm:self-center inline-flex justify-center w-fit items-center px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${
                        isCurrentJob
                          ? "bg-foreground text-background"
                          : "bg-foreground/10 text-foreground/70"
                      }`}
                    >
                      {company.date}
                    </span>
                  </div>

                  <p className="mt-4 text-secondary leading-relaxed">
                    {company.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {company.tags.map((item, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm text-foreground/60 border border-foreground/15 rounded-full hover:border-foreground/30 hover:text-foreground/80 transition-colors duration-200"
                      >
                        {item.type}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
