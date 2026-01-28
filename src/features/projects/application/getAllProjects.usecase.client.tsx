import { Project } from "../domain/Project";
import { getAllProjects } from "../services/projectHttp.service";


export async function getAllProjectsUseCase(): Promise<Project[]> {
  return await getAllProjects();
}
