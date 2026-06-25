export type ExperienceItem = {
  remarksCount: number;
  translationKey: string;
  usedTechnologies: string[];
};

export const experiences: ExperienceItem[] = [
  {
    remarksCount: 0,
    translationKey: "hunikaBC",
    usedTechnologies: ["al", "mssql"],
  },
  {
    remarksCount: 3,
    translationKey: "oxxogas",
    usedTechnologies: ["typescript", "azure", "dotnet", "csharp"],
  },
  {
    remarksCount: 3,
    translationKey: "pictale",
    usedTechnologies: ["reactNative", "csharp", "nodejs"],
  },
  {
    remarksCount: 2,
    translationKey: "ingeniosys",
    usedTechnologies: ["aspnet", "javascript", "jquery"],
  },
  {
    remarksCount: 2,
    translationKey: "simpatTech",
    usedTechnologies: ["aspnet", "csharp"],
  },
  {
    remarksCount: 3,
    translationKey: "ravisa",
    usedTechnologies: ["dotnetCore", "efcore", "react", "powerAutomate"],
  },
  {
    remarksCount: 2,
    translationKey: "halo",
    usedTechnologies: ["sql", "oracleScm"],
  },
  {
    remarksCount: 3,
    translationKey: "virtualium",
    usedTechnologies: ["react", "javascript"],
  },
];

export type ProjectItem = {
  translationKey: string;
  technologies: string[];
};

export const projects: ProjectItem[] = [
  {
    translationKey: "mcpWorkflows",
    technologies: ["nodejs", "typescript", "mcp"],
  },
  {
    translationKey: "specEngine",
    technologies: ["python"],
  },
];

export type SkillCategory = {
  translationKey: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    translationKey: "languages",
    items: ["JavaScript", "TypeScript", "C#", "Java", "Python", "SQL", "AL"],
  },
  {
    translationKey: "frontend",
    items: ["React", "React Native", "Next.js", "Zustand", "Redux"],
  },
  {
    translationKey: "backend",
    items: ["ASP.NET Core", "EF Core", "Node.js", "REST APIs"],
  },
  {
    translationKey: "ai",
    items: ["MCP", "Agent Orchestration", "Spec-Driven Automation"],
  },
  {
    translationKey: "cloud",
    items: ["Azure", "Docker", "Git", "CI/CD", "Power Automate"],
  },
  {
    translationKey: "databases",
    items: ["SQL Server", "MongoDB", "Oracle SCM"],
  },
  {
    translationKey: "testing",
    items: ["Jest", "Unit Testing", "TDD"],
  },
];

export type EducationItem = {
  translationKey: string;
};

export const education: EducationItem[] = [
  { translationKey: "university" },
  { translationKey: "technical" },
];
