import { Project } from "../domain/Project";
import { getProjectById } from "../services/authHttp.service";


export async function getProjectUseCase(id: string): Promise<Project> {
  return await getProjectById(id);
}
