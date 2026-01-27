import { getProjectUseCaseServer } from "@/features/projects/application/getProject.usecase.server";

type PageProps = {
  params: { id: string };
};

export default async function SingleProject({ params }: PageProps) {
  const { id } = params;

  const project = await getProjectUseCaseServer(id);

  if (!project) return <div>Not found</div>;

  return <h2>Single Project {id}</h2>;
}
