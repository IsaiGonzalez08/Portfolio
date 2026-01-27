"use client";

import { useSelector } from "react-redux";
import { RootState } from "shared/store/store";
import { Project } from "@/features/projects/domain/Project";
import { stackFromProjects, projectsResults } from "@/features/landing/ui/data";
import {
  ItemStack,
  ProjectResult,
  ItemResult,
} from "@/features/landing/domain/types";
import Footer from "shared/components/ui/Footer";
import Link from "next/link";

type Props = {
  id: string;
};

const SingleProject = ({ id }: Props) => {
  const { projects } = useSelector((state: RootState) => state.projects);
  const project = projects?.find((p: Project) => p.id === id);
  const listIcons = stackFromProjects.find((p: ItemStack) => p.id === id);
  const projectResults = projectsResults.find(
    (p: ProjectResult) => p.id === id,
  );

  const backgroundColors = [
    "bg-gradient-to-br from-[#CDE9EB] to-[#E8F4F5]",
    "bg-gradient-to-br from-[#8DA8C9] to-[#DFE6EF]",
    "bg-gradient-to-br from-[#6E71A8] to-[#272727]",
  ];

  const bgColor =
    backgroundColors[projects?.findIndex((p: Project) => p.id === id)];

  return (
    <>
      <main className="min-h-dvh p-10">
        <h1 className="text-5xl font-bold">{project?.name}</h1>

        <div className="flex flex-row w-full mt-10">
          <div className="flex flex-col w-1/3">
            <p className="text-2xl font-normal">Role</p>
            <p className="text-secondary mt-2">{project?.role}</p>
          </div>
          <div className="flex flex-col w-2/3">
            <p className="text-2xl font-normal">Duration</p>
            <p className="text-secondary mt-2">{project?.duration}</p>
          </div>
        </div>

        <div className="flex flex-row w-full mt-10">
          <div className="flex flex-col w-1/3">
            <p className="text-2xl font-normal">Overview</p>
          </div>
          <div className="flex flex-col w-2/3">
            <p className="text-secondary mt-2">{project?.overview}</p>
          </div>
        </div>

        <div className="flex flex-row w-full mt-10">
          <div className="w-1/3">
            <p className="text-2xl font-normal">Stack</p>
          </div>
          <div className="flex gap-2 w-2/3">
            {listIcons?.icons.map((icon: string) => (
              <img
                key={icon}
                src={icon}
                alt="icon-project"
                className="w-12 h-12"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between my-10">
            <p className="text-2xl font-normal">Results</p>
            <div className="flex gap-2">
              <Link className="flex" href={project?.link} target="_blank">
                <img src="/icons/link.svg" alt="link" />
              </Link>
              <Link className="flex" href={project?.github} target="_blank">
                <img src="/icons/github.svg" alt="github" />
              </Link>
            </div>
          </div>

          {projectResults?.results.map((result: ItemResult, index: number) => (
            <div
              key={result.title}
              className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} justify-center items-center w-full`}
            >
              <div className="flex flex-col w-1/3">
                <p className="text-2xl font-normal">{result.title}</p>
                <p
                  className={`text-secondary mt-2 ${index % 2 === 0 ? "pr-20" : "pl-20"}`}
                >
                  {result.description}
                </p>
              </div>
              <div className="flex flex-col w-2/3">
                <img className="rounded-xl" src={result.image} alt="result" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleProject;
