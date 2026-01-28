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
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  id: string;
};

const SingleProject = ({ id }: Props) => {
  const { projects } = useSelector((state: RootState) => state.projects);
  const [persistedData, setPersistedData] = useState<{
    project: Project | undefined;
    listIcons: ItemStack | undefined;
    projectResults: ProjectResult | undefined;
  } | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('currentProject');
    if (savedData) {
      const parsed = JSON.parse(savedData);
      if (parsed.id === id) {
        setPersistedData(parsed.data);
      } else {
        localStorage.removeItem('currentProject');
      }
    }
  }, [id]);

  const project = projects?.find((p: Project) => p.id === id) || persistedData?.project;
  const listIcons = stackFromProjects.find((p: ItemStack) => p.id === id) || persistedData?.listIcons;
  const projectResults = projectsResults.find(
    (p: ProjectResult) => p.id === id,
  ) || persistedData?.projectResults;

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
      localStorage.setItem('currentProject', JSON.stringify(dataToSave));
    }
  }, [id, project, listIcons, projectResults]);

  const backgroundColors = [
    "bg-gradient-to-br from-[#CDE9EB] to-[#E8F4F5]",
    "bg-gradient-to-br from-[#8DA8C9] to-[#DFE6EF]",
    "bg-gradient-to-br from-[#6E71A8] to-[#272727]",
  ];

  const bgColor =
    backgroundColors[projects?.findIndex((p: Project) => p.id === id)];

  return (
    <>
      <main className="min-h-dvh px-10 py-8">
        <div className="flex items-center gap-8">
          <Link href="/projects">
            <Image src="/icons/Back.svg" alt="back" height={30} width={30} />
          </Link>
          <h1 className="text-5xl font-bold">{project?.name}</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full mt-5">
          <div className="flex flex-col w-full">
            <p className="text-2xl font-normal">Role</p>
            <p className="text-secondary mt-2">{project?.role}</p>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-2xl font-normal">Duration</p>
            <p className="text-secondary mt-2">{project?.duration}</p>
          </div>
          <div className="flex flex-col w-full">
            <p className="text-2xl font-normal">Stack</p>
            <div className="flex gap-2 mt-2">
              {listIcons?.icons.map((icon: string) => (
                <img
                  key={icon}
                  src={icon}
                  alt="icon-project"
                  className="w-8 h-8"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full mt-5">
          <div className="flex flex-col w-full lg:w-1/3">
            <p className="text-2xl font-normal">Overview</p>
          </div>
          <div className="flex flex-col w-full lg:w-2/3">
            <p className="text-secondary mt-2">{project?.overview}</p>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mt-5">
            <p className="text-2xl font-normal">Results</p>
            <div className="flex gap-2 items-center">
              <Link
                className="flex"
                href={project?.link || "#"}
                target="_blank"
              >
                <img className="w-7 h-7" src="/icons/link.svg" alt="link" />
              </Link>
              <Link
                className="flex"
                href={project?.github || "#"}
                target="_blank"
              >
                <img className="w-8 h-8" src="/icons/github.svg" alt="github" />
              </Link>
            </div>
          </div>

          <div className="flex flex-col mt-5 gap-10 lg:gap-16">
            {projectResults?.results.map(
              (result: ItemResult, index: number) => (
                <div
                  key={result.title}
                  className={`flex flex-col ${index % 2 === 0 ? "sm:flex-row " : "sm:flex-row-reverse"} gap-5 justify-center items-center w-full`}
                >
                  <div className="flex flex-col w-full lg:w-1/3">
                    <p className="text-lg font-normal">{result.title}</p>
                    <p className="text-secondary mt-2 text-sm">
                      {result.description}
                    </p>
                  </div>
                  <div className="flex flex-col w-full lg:w-2/3">
                    <img
                      className="rounded-xl"
                      src={result.image}
                      alt="result"
                    />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SingleProject;
