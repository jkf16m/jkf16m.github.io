export type Language = "en" | "es";

const en = {
  page: {
    title: "Portfolio",
    home: {
      nav: "Home",
      greetings: "José Daniel Flores Morales",
      subtitle: "Software Engineer · AI-Driven Solutions · Fullstack · Cloud Architectures",
      welcome:
        "Fullstack engineer who ships across the stack — React Native apps, ASP.NET backends, Azure cloud. Bilingual (EN/ES) with direct business stakeholder communication.",
    },
    about: {
      nav: "About",
      whoAmI: "Who am I?",
      introduction:
        "Fullstack engineer who ships across the stack — React Native apps, ASP.NET backends, Azure cloud. Bilingual (EN/ES) with direct business stakeholder communication. Bridges legacy systems and modern architectures.",
    },
    contact: {
      nav: "Contact",
      email: "jkf20m@gmail.com",
      location: "Monterrey, Nuevo León, México",
      linkedin: "LinkedIn",
      github: "GitHub",
      hackerrank: "HackerRank",
    },
    experience: {
      nav: "Experience",
      hunikaBC: {
        name: "AL Business Central Developer",
        company: "Hunika",
        duration: "Aug 2025 – Oct 2025",
        description:
          "Built extensions for SaaS Business Central environments with unit tests, navigating strict platform constraints.",
        remark: {},
      },
      oxxogas: {
        name: "Lead Developer — Oxxo Gas GoVale",
        company: "Hunika, Grupo TI",
        duration: "Jun 2024 – Aug 2025",
        description:
          "Architected complex business logic algorithms that enabled the GoVale digital platform — translating intricate Oxxo Gas operational rules into reliable, maintainable code.",
        remark: {
          1: "Architected complex business logic algorithms for the GoVale digital platform.",
          2: "Collaborated directly with tech lead on Azure cloud deployment.",
          3: "Communicated technical constraints to business stakeholders in plain language.",
        },
      },
      pictale: {
        name: "Lead Developer — Pictale",
        company: "Pictale",
        duration: "Jul 2023 – Jun 2024",
        description:
          "Led full-stack development of React Native + ABP mobile app; shipped to App Store & Google Play with CI/CD pipelines.",
        remark: {
          1: "Led full-stack development of React Native + ABP mobile app.",
          2: "Shipped to App Store & Google Play with CI/CD pipelines.",
          3: "Managed versioning (semver) and on-the-fly updates for faster testing cycles.",
        },
      },
      ingeniosys: {
        name: "Fullstack Developer",
        company: "Ingeniosys",
        duration: "Mar 2023 – Jan 2024",
        description:
          "Delivered multiple ASP.NET + MVC projects with emphasis on UX/UI and jQuery frontends.",
        remark: {
          1: "Delivered multiple ASP.NET + MVC projects.",
          2: "Emphasis on UX/UI and jQuery frontends.",
        },
      },
      simpatTech: {
        name: "ASP.NET Developer",
        company: "Simpat Tech",
        duration: "May 2022 – Jan 2023",
        description:
          "Developed Razor Pages web apps and resolved production issues.",
        remark: {
          1: "Developed Razor Pages web apps.",
          2: "Resolved production issues.",
        },
      },
      ravisa: {
        name: "Developer & Technical Support",
        company: "Ravisa México",
        duration: "May 2021 – May 2022",
        description:
          "Built ASP.NET Core microservices with EF Core; designed React frontends.",
        remark: {
          1: "Built ASP.NET Core microservices with EF Core.",
          2: "Designed React frontends.",
          3: "Automated client reporting via Power Automate.",
        },
      },
      halo: {
        name: "Oracle SCM Engineer",
        company: "Halo Creative and Design",
        duration: "Jan 2020 – Aug 2020",
        description:
          "Executed bulk SQL migration of 14K+ records under restricted Oracle SCM permissions.",
        remark: {
          1: "Executed bulk SQL migration of 14K+ records.",
          2: "Worked under restricted Oracle SCM permissions.",
        },
      },
      virtualium: {
        name: "Frontend Developer — React",
        company: "Virtualium",
        duration: "Jul 2020 – Sep 2020",
        description:
          "Built React UIs consuming REST APIs; collaborated cross-functionally on API contracts.",
        remark: {
          1: "Built React UIs consuming REST APIs.",
          2: "Collaborated cross-functionally on API contracts.",
          3: "English-speaking team environment.",
        },
      },
    },
    projects: {
      nav: "Projects",
      mcpWorkflows: {
        name: "mcp-workflows",
        description:
          "Built an MCP tool orchestration framework for chaining and parallelizing tool calls across agents.",
        remark: {
          1: "Node.js, TypeScript",
          2: "Discontinued after Anthropic shipped official Claude workflows — validating the concept and timing.",
        },
      },
      specEngine: {
        name: "Spec-Driven Code Generation Engine",
        description:
          "Designed a single-source-of-truth automation system that auto-generates code from structured specifications.",
        remark: {
          1: "Python",
          2: "Eliminates manual boilerplate and enforces consistency across the codebase.",
        },
      },
    },
    skills: {
      nav: "Skills",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
      ai: "AI / Tooling",
      cloud: "Cloud / DevOps",
      databases: "Databases",
      testing: "Testing",
    },
    education: {
      nav: "Education",
      university: {
        name: "Engineer in Computational Systems",
        school: "Universidad Tecnológica Latinoamericana en Línea",
        duration: "2017 – 2020",
      },
      technical: {
        name: "Technical in Computational Systems",
        school: "E.I.P.T. Pablo Livas Centro",
        duration: "2014 – 2017",
      },
    },
    certifications: {
      nav: "Certifications",
      azure: "Microsoft Azure Fundamentals",
      english: "English B2",
    },
    footer: {
      madeWith: "Made with Preact",
      motto: "If you can imagine it, you can program it",
      copyright: "© 2025 José Daniel Flores Morales. All rights reserved.",
    },
  },
  components: {
    project: {
      usedTechnologies: "Technologies",
      technologies: {
        reactNative: "React Native",
        dotnet: ".NET",
        dotnetCore: ".NET Core",
        csharp: "C#",
        javascript: "JavaScript",
        typescript: "TypeScript",
        nodejs: "Node.js",
        jquery: "jQuery",
        aspnet: "ASP.NET",
        python: "Python",
        java: "Java",
        sql: "SQL",
        al: "AL",
        react: "React",
        nextjs: "Next.js",
        zustand: "Zustand",
        redux: "Redux",
        efcore: "EF Core",
        azure: "Azure",
        docker: "Docker",
        git: "Git",
        cicd: "CI/CD",
        powerAutomate: "Power Automate",
        mssql: "SQL Server",
        mongodb: "MongoDB",
        oracleScm: "Oracle SCM",
        jest: "Jest",
        mcp: "MCP",
      },
    },
  },
};

const es = {
  page: {
    title: "Portafolio",
    home: {
      nav: "Inicio",
      greetings: "José Daniel Flores Morales",
      subtitle: "Ingeniero de Software · Soluciones con IA · Fullstack · Arquitectura en la Nube",
      welcome:
        "Ingeniero fullstack que despliega en toda la pila — apps React Native, backends ASP.NET, Azure cloud. Bilingüe (EN/ES) con comunicación directa con stakeholders de negocio.",
    },
    about: {
      nav: "Acerca de",
      whoAmI: "¿Quién soy?",
      introduction:
        "Ingeniero fullstack que despliega en toda la pila — apps React Native, backends ASP.NET, Azure cloud. Bilingüe (EN/ES) con comunicación directa con stakeholders de negocio. Conecto sistemas legacy con arquitecturas modernas.",
    },
    contact: {
      nav: "Contacto",
      email: "jkf20m@gmail.com",
      location: "Monterrey, Nuevo León, México",
      linkedin: "LinkedIn",
      github: "GitHub",
      hackerrank: "HackerRank",
    },
    experience: {
      nav: "Experiencia",
      hunikaBC: {
        name: "Desarrollador AL Business Central",
        company: "Hunika",
        duration: "Ago 2025 – Oct 2025",
        description:
          "Desarrollé extensiones para entornos SaaS de Business Central con pruebas unitarias, navegando restricciones estrictas de la plataforma.",
        remark: {},
      },
      oxxogas: {
        name: "Desarrollador Lead — Oxxo Gas GoVale",
        company: "Hunika, Grupo TI",
        duration: "Jun 2024 – Ago 2025",
        description:
          "Arquitecturé algoritmos complejos de lógica de negocio que habilitaron la plataforma digital GoVale — traduciendo reglas operativas complejas de Oxxo Gas en código confiable y mantenible.",
        remark: {
          1: "Arquitecturé algoritmos complejos de lógica de negocio para la plataforma GoVale.",
          2: "Colaboré directamente con el tech lead en el despliegue en Azure.",
          3: "Comuniqué restricciones técnicas a stakeholders de negocio en lenguaje claro.",
        },
      },
      pictale: {
        name: "Desarrollador Lead — Pictale",
        company: "Pictale",
        duration: "Jul 2023 – Jun 2024",
        description:
          "Lideré el desarrollo full-stack de la app móvil React Native + ABP; lancé a App Store y Google Play con pipelines CI/CD.",
        remark: {
          1: "Lideré desarrollo full-stack de app móvil React Native + ABP.",
          2: "Lancé a App Store y Google Play con pipelines CI/CD.",
          3: "Gestioné versionado (semver) y actualizaciones en tiempo real.",
        },
      },
      ingeniosys: {
        name: "Desarrollador Fullstack",
        company: "Ingeniosys",
        duration: "Mar 2023 – Ene 2024",
        description:
          "Entregué múltiples proyectos ASP.NET + MVC con énfasis en UX/UI y frontends jQuery.",
        remark: {
          1: "Entregué múltiples proyectos ASP.NET + MVC.",
          2: "Énfasis en UX/UI y frontends jQuery.",
        },
      },
      simpatTech: {
        name: "Desarrollador ASP.NET",
        company: "Simpat Tech",
        duration: "May 2022 – Ene 2023",
        description:
          "Desarrollé aplicaciones web con Razor Pages y resolví problemas en producción.",
        remark: {
          1: "Desarrollé aplicaciones web con Razor Pages.",
          2: "Resolví problemas en producción.",
        },
      },
      ravisa: {
        name: "Desarrollador y Soporte Técnico",
        company: "Ravisa México",
        duration: "May 2021 – May 2022",
        description:
          "Construí microservicios ASP.NET Core con EF Core; diseñé frontends React.",
        remark: {
          1: "Construí microservicios ASP.NET Core con EF Core.",
          2: "Diseñé frontends React.",
          3: "Automatización de reportes de clientes con Power Automate.",
        },
      },
      halo: {
        name: "Ingeniero Oracle SCM",
        company: "Halo Creative and Design",
        duration: "Ene 2020 – Ago 2020",
        description:
          "Ejecuté migración SQL masiva de 14K+ registros bajo permisos restringidos de Oracle SCM.",
        remark: {
          1: "Ejecuté migración SQL masiva de 14K+ registros.",
          2: "Trabajé bajo permisos restringidos de Oracle SCM.",
        },
      },
      virtualium: {
        name: "Desarrollador Frontend — React",
        company: "Virtualium",
        duration: "Jul 2020 – Sep 2020",
        description:
          "Construí UIs React consumiendo APIs REST; colaboré cross-functionally en contratos de API.",
        remark: {
          1: "Construí UIs React consumiendo APIs REST.",
          2: "Colaboré cross-functionally en contratos de API.",
          3: "Entorno de trabajo en inglés.",
        },
      },
    },
    projects: {
      nav: "Proyectos",
      mcpWorkflows: {
        name: "mcp-workflows",
        description:
          "Construí un framework de orquestación de herramientas MCP para encadenar y paralelizar llamadas a herramientas entre agentes.",
        remark: {
          1: "Node.js, TypeScript",
          2: "Descontinuado después de que Anthropic lanzara workflows oficiales de Claude — validando el concepto y el timing.",
        },
      },
      specEngine: {
        name: "Motor de Generación de Código basado en Specs",
        description:
          "Diseñé un sistema de automatización de fuente única que auto-genera código a partir de especificaciones estructuradas.",
        remark: {
          1: "Python",
          2: "Elimina boilerplate manual y enforce consistencia en el codebase.",
        },
      },
    },
    skills: {
      nav: "Habilidades",
      languages: "Lenguajes",
      frontend: "Frontend",
      backend: "Backend",
      ai: "IA / Herramientas",
      cloud: "Cloud / DevOps",
      databases: "Bases de datos",
      testing: "Testing",
    },
    education: {
      nav: "Educación",
      university: {
        name: "Ingeniero en Sistemas Computacionales",
        school: "Universidad Tecnológica Latinoamericana en Línea",
        duration: "2017 – 2020",
      },
      technical: {
        name: "Técnico en Sistemas Computacionales",
        school: "E.I.P.T. Pablo Livas Centro",
        duration: "2014 – 2017",
      },
    },
    certifications: {
      nav: "Certificaciones",
      azure: "Microsoft Azure Fundamentals",
      english: "English B2",
    },
    footer: {
      madeWith: "Hecha con Preact",
      motto: "Si puedes imaginarlo, puedes programarlo",
      copyright: "© 2025 José Daniel Flores Morales. Todos los derechos reservados.",
    },
  },
  components: {
    project: {
      usedTechnologies: "Tecnologías",
      technologies: {
        reactNative: "React Native",
        dotnet: ".NET",
        dotnetCore: ".NET Core",
        csharp: "C#",
        javascript: "JavaScript",
        typescript: "TypeScript",
        nodejs: "Node.js",
        jquery: "jQuery",
        aspnet: "ASP.NET",
        python: "Python",
        java: "Java",
        sql: "SQL",
        al: "AL",
        react: "React",
        nextjs: "Next.js",
        zustand: "Zustand",
        redux: "Redux",
        efcore: "EF Core",
        azure: "Azure",
        docker: "Docker",
        git: "Git",
        cicd: "CI/CD",
        powerAutomate: "Power Automate",
        mssql: "SQL Server",
        mongodb: "MongoDB",
        oracleScm: "Oracle SCM",
        jest: "Jest",
        mcp: "MCP",
      },
    },
  },
};

const locales = { en, es } as const;

function get(obj: Record<string, unknown>, path: string): string {
  return path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj) as string;
}

export type I18n = { t: (key: string) => string; lang: Language };

export function useI18n(lang: Language): I18n {
  const locale = locales[lang];
  return {
    t: (key: string) => get(locale as Record<string, unknown>, key) ?? key,
    lang,
  };
}
