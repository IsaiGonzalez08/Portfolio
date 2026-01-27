"use client";

import { useSelector } from "react-redux";
import { RootState } from "shared/store/store";
import { Project } from "@/features/projects/domain/Project";
import { stackFromProjects, projectsResults } from "@/features/landing/ui/data";
import { ItemStack, ProjectResult, ItemResult } from "@/features/landing/domain/types";
import Footer from "shared/components/ui/Footer";

type Props = {
  id: string;
};

const SingleProject = ({ id }: Props) => {
  const { projects } = useSelector((state: RootState) => state.projects);
  const project = projects?.find((p: Project) => p.id === id);
  const listIcons = stackFromProjects.find((p: ItemStack) => p.id === id);
  const projectResults = projectsResults.find((p: ProjectResult) => p.id === id);

  return (
    <>
      <main className="p-10 min-h-dvh">
        <h1 className="text-2xl font-bold">{project?.name}</h1>

        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <p>Role</p>
            <p>{project?.role}</p>
          </div>
          <div className="flex flex-col w-2/3">
            <p>Duration</p>
            <p>{project?.duration}</p>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-col w-1/3">
            <p>Overview</p>
          </div>
          <div className="flex flex-col w-2/3">
            <p>{project?.overview}</p>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="w-1/3"><p>Stack</p></div>
          <div className="flex gap-2 w-2/3">
            {listIcons?.icons.map((icon: string) => (
              <img key={icon} src={icon} alt="icon-project" />
            ))}
          </div>
        </div>

        <div>
          <p>Results</p>
          {projectResults?.results.map((result: ItemResult, index: number) => (
            <div key={result.title} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-center items-center w-full`}>
              <div className="flex flex-col w-1/2">
                <p>{result.title}</p>
                <p>{result.description}</p>
              </div>
              <div className="flex flex-col w-1/2">
                <img src={result.image} alt="result" />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default SingleProject;
