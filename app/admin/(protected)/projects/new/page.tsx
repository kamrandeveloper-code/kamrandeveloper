import ProjectForm from "../ProjectForm";
import { createProject } from "@/lib/actions/projects";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-2xl text-text mb-6">New Project</h1>
      <ProjectForm action={createProject} />
    </div>
  );
}
