import { notFound } from "next/navigation";
import Image from "next/image";
import { workCardsList } from "@/features/landing/ui/data";

type PageProps = {
    params: Promise<{ id: string }>
};

async function getProjectFromApi(id: string) {
    const baseUrl = process.env.PROJECTS_API_BASE_URL ?? process.env.NEXT_PUBLIC_PROJECTS_API_BASE_URL;

    if (!baseUrl) return null;

    const res = await fetch(`${baseUrl.replace(/\/$/, "")}/projects/${id}`, {
        next: { revalidate: 60 }
    });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Failed to fetch project: ${res.status}`);

    return (await res.json()) as unknown;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params;

    let apiProject: unknown = null;

    try {
        apiProject = await getProjectFromApi(id);
    } catch {
        apiProject = null;
    }

    const localProject = workCardsList.find((p) => p.id === id) ?? null;

    if (!apiProject && !localProject) {
        notFound();
    }

    const title = (localProject?.projectName ?? id).toString();
    const description = localProject?.description;
    const year = localProject?.year;
    const type = localProject?.type;
    const images = localProject?.images ?? [];

    return (
        <main className="min-h-dvh px-5 sm:px-10 lg:px-14 pt-24 pb-16">
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex flex-col gap-2 mb-10">
                    <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
                    <div className="flex flex-row flex-wrap gap-3 text-secondary">
                        {type ? <span>{type}</span> : null}
                        {year ? <span>{year}</span> : null}
                    </div>
                    {description ? <p className="text-foreground text-lg font-light mt-2">{description}</p> : null}
                </div>

                {images.length ? (
                    <div className="flex flex-col gap-6">
                        {images.map((src, index) => (
                            <div key={`${src}-${index}`} className="w-full rounded-4xl overflow-hidden">
                                <Image
                                    src={src}
                                    alt={`${title}-${index}`}
                                    width={1200}
                                    height={800}
                                    className="w-full h-auto"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                ) : null}

                {apiProject ? (
                    <pre className="mt-12 p-6 rounded-4xl bg-muted/40 overflow-auto text-sm">
                        {JSON.stringify(apiProject, null, 2)}
                    </pre>
                ) : null}
            </div>
        </main>
    );
}
