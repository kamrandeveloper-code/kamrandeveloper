import { notFound } from "next/navigation";
import ProjectForm from "../../ProjectForm";
import { updateProject } from "@/lib/actions/projects";
import { adminFetch } from "@/lib/admin-auth";
import type { Project } from "@/lib/api";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function EditProjectPage({ params }: Props) {
  const { id } = await params;
  const res = await adminFetch(`/api/projects/${id}`);
  if (!res.ok) notFound();
  const project: Project = await res.json();

  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">Edit Project</h1>
      <ProjectForm action={updateProject.bind(null, project.id)} project={project} />
    </div>
  );
}
