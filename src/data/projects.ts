export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of your first project. Explain what it does and why it's interesting.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/cvsloane/project-one",
    demo: "https://project-one.vercel.app",
  },
  {
    title: "Project Two",
    description:
      "Another project description. Highlight the key features and technologies used.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/cvsloane/project-two",
  },
  {
    title: "Project Three",
    description:
      "Your third project. Share what problem it solves and what you learned building it.",
    tech: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/cvsloane/project-three",
    demo: "https://project-three.vercel.app",
  },
];
