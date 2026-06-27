export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: "⚙️",
    skills: [".NET MVC", "Web API", "ASP.NET Core"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: [ "React js","Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Databases",
    icon: "🗄️",
    skills: ["SQL Server", "PostgreSQL"],
  },
  {
    category: "Tools",
    icon: "🛠️",
    skills: ["Git", "REST APIs", "Visual Studio", "VS Code"],
  },
  
];
