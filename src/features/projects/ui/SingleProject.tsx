"use client";

import { useSelector } from "react-redux";
import { RootState } from "shared/store/store";
import { Project, Participant } from "@/features/projects/domain/Project";
import { stackFromProjects, projectsResults } from "@/features/landing/ui/data";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import {
  ItemStack,
  ProjectResult,
  ItemResult,
} from "@/features/landing/domain/types";
import Footer from "shared/components/ui/Footer";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const SingleProject = ({ id }: Props) => {
  const { projects } = useSelector((state: RootState) => state.projects);
  const [persistedData, setPersistedData] = useState<{
    project: Project | undefined;
    listIcons: ItemStack | undefined;
    projectResults: ProjectResult | undefined;
  } | null>(null);
  const [activeResultIndex, setActiveResultIndex] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem("currentProject");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (parsed.id === id) {
        setPersistedData(parsed.data);
      } else {
        localStorage.removeItem("currentProject");
      }
    }
  }, [id]);

  const project =
    projects?.find((p: Project) => p.id === id) || persistedData?.project;
  const listIcons =
    stackFromProjects.find((p: ItemStack) => p.id === id) ||
    persistedData?.listIcons;
  const projectResults =
    projectsResults.find((p: ProjectResult) => p.id === id) ||
    persistedData?.projectResults;

  useEffect(() => {
    if (project && listIcons && projectResults) {
      const dataToSave = {
        id,
        data: {
          project,
          listIcons,
          projectResults,
        },
      };
      localStorage.setItem("currentProject", JSON.stringify(dataToSave));
    }
  }, [id, project, listIcons, projectResults]);

  if (!project) {
    return (
      <main className="min-h-dvh flex items-center justify-center px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-semibold text-foreground mb-4">
            Project not found
          </h1>
          <Link
            href="/projects"
            className="text-secondary hover:text-foreground transition-colors"
          >
            ← Back to projects
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <>
      <main className="min-h-dvh">
        {/* Hero Section */}
        <section className="pt-28 pb-16 px-5 sm:px-10 lg:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Back Link */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-secondary hover:text-foreground transition-colors mb-8 group"
              >
                <Image
                  src="/icons/right-arrow-dark.svg"
                  alt="back"
                  width={16}
                  height={16}
                  className="rotate-180 opacity-60 group-hover:opacity-100 transition-opacity"
                />
                <span className="text-sm font-medium">All Projects</span>
              </Link>
            </motion.div>

            {/* Project Title & Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8"
            >
              <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
                {project.name}
              </h1>
              <div className="flex items-center gap-3">
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-snow-white hover:bg-foreground hover:scale-105 transition-all group"
                  >
                    <Image
                      src="/icons/link.svg"
                      alt="Live site"
                      width={20}
                      height={20}
                      className="group-hover:invert transition-all"
                    />
                  </Link>
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-snow-white hover:bg-foreground hover:scale-105 transition-all group"
                  >
                    <Image
                      src="/icons/GitHub.svg"
                      alt="GitHub"
                      width={22}
                      height={22}
                      className="group-hover:invert transition-all"
                    />
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Metadata Row */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-between items-start gap-x-12 gap-y-6 mt-10 pt-8 border-t border-snow-white"
            >
              <motion.div variants={fadeInUp} className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-wider text-secondary">Role</p>
                <p className="text-foreground font-medium">{project.role}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-wider text-secondary">Duration</p>
                <p className="text-foreground font-medium">{project.duration}</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col gap-1">
                <p className="text-xs uppercase tracking-wider text-secondary">Stack</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {listIcons?.icons.map((icon: string, index: number) => (
                    <motion.div
                      key={icon}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className="w-7 h-7 hover:scale-110 transition-transform"
                    >
                      <img
                        src={icon}
                        alt="tech"
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 px-5 sm:px-10 lg:px-20 bg-snow-white/50">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-xs uppercase tracking-wider text-secondary mb-4">
              Overview
            </h2>
            <p className="text-foreground text-lg sm:text-xl leading-relaxed">
              {project.overview}
            </p>
          </motion.div>
        </section>

        {/* Results Section */}
        {projectResults && projectResults.results.length > 0 && (
          <section className="py-20 px-5 sm:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">
                  Results
                </h2>
                <p className="text-secondary max-w-lg mx-auto">
                  Key features and outcomes of this project
                </p>
              </motion.div>

              {/* Results Navigation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-wrap justify-center gap-2 mb-10"
              >
                {projectResults.results.map((result: ItemResult, index: number) => (
                  <button
                    key={result.title}
                    onClick={() => setActiveResultIndex(index)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeResultIndex === index
                        ? "bg-foreground text-white"
                        : "bg-snow-white text-secondary hover:text-foreground"
                    }`}
                  >
                    {result.title}
                  </button>
                ))}
              </motion.div>

              {/* Active Result Display */}
              <motion.div
                key={activeResultIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center"
              >
                {/* Video */}
                <div className="w-full lg:w-2/3 order-1 lg:order-2">
                  <div className="relative rounded-2xl overflow-hidden border border-snow-white shadow-sm hover:shadow-md transition-shadow">
                    <video
                      className="w-full aspect-video object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      key={projectResults.results[activeResultIndex].image}
                    >
                      <source
                        src={projectResults.results[activeResultIndex].image}
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>

                {/* Description */}
                <div className="w-full lg:w-1/3 order-2 lg:order-1">
                  <span className="inline-block px-3 py-1 bg-snow-white text-secondary text-xs font-medium rounded-full mb-4">
                    {String(activeResultIndex + 1).padStart(2, "0")} / {String(projectResults.results.length).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {projectResults.results[activeResultIndex].title}
                  </h3>
                  <p className="text-secondary leading-relaxed">
                    {projectResults.results[activeResultIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-10">
                {projectResults.results.map((_: ItemResult, index: number) => (
                  <button
                    key={index}
                    onClick={() => setActiveResultIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeResultIndex === index
                        ? "bg-foreground w-6"
                        : "bg-snow-white hover:bg-secondary"
                    }`}
                    aria-label={`Go to result ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Team Section - Full display if participants exist */}
        {project.participants && project.participants.length > 0 && (
          <section className="py-16 px-5 sm:px-10 lg:px-20 bg-snow-white/30">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-10"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Team Members
                </h2>
                <p className="text-secondary text-sm">
                  The people behind this project
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              >
                {project.participants.map((participant: Participant, index: number) => (
                  <motion.div
                    key={participant.id}
                    variants={fadeInUp}
                  >
                    <Link
                      href={participant.linkedin}
                      target="_blank"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-background hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 rounded-full bg-linear-to-br from-[#CDE9EB] to-[#8DA8C9] flex items-center justify-center text-foreground font-semibold shrink-0">
                        {participant.name.charAt(0)}
                        {participant.lastName.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate group-hover:text-secondary transition-colors">
                          {participant.name} {participant.lastName}
                        </p>
                        <p className="text-xs text-secondary">View LinkedIn</p>
                      </div>
                      <Image
                        src="/icons/right-arrow-dark.svg"
                        alt="arrow"
                        width={16}
                        height={16}
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Technical Details Section */}
        {project.technicalDetails && project.technicalDetails.length > 0 && (
          <section className="py-16 px-5 sm:px-10 lg:px-20">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  Technical Details
                </h2>
                <p className="text-secondary text-sm">
                  Architecture, decisions, and implementation details
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-5 sm:px-10 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Interested in working together?
            </h2>
            <p className="text-secondary mb-8">
              Let's discuss how I can help bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-me"
                className="px-8 py-3 bg-foreground text-white font-semibold rounded-full hover:bg-secondary transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/projects"
                className="px-8 py-3 border border-foreground text-foreground font-semibold rounded-full hover:bg-foreground hover:text-white transition-colors"
              >
                View More Projects
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SingleProject;
