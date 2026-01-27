import { Project } from "../domain/Project";

export async function getProjectById(id: string): Promise<Project> {
    try {
        const res = await fetch(`/api/projects/${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });

        const result = await res.json();

        if (!res.ok) {
            throw new Error(result.error?.code || "UNKNOWN_ERROR");
        }

        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}