export interface TranslationDictionary {
  [id: string]: string | string[] | TranslationDictionary;
}

export interface TranslationMultiLanguageDictionary {
  [id: string]: TranslationDictionary;
}

export const dictionary: TranslationMultiLanguageDictionary = {
  "pt-br": {
    header: {
      language: "Idioma",
      theme: "Tema",
    },
    experiences: {
      myStory: {
        title: "Minha História:",
        text: "Minha paixão por tecnologia começou cedo e me levou a explorar o desenvolvimento web, iniciando com JavaScript. Como desenvolvedor fullstack, busco constantemente soluções eficientes e elegantes, unindo criatividade e resolução de problemas.",
      },
      professional: {
        title: "Experiência Profissional:",
        sysmap: {
          title:
            "Analista Desenvolvedor FullStack - SysMap Solutions (12/2023 - Atualmente)",
          items: [
            "Atuando como analista desenvolvedor fullstack, com foco no backend",
            "Frontend: React e Styled Components",
            "Backend: Node.js, Express, Fastify, Zod, TypeORM, Java",
            "Testes: Jest e Mockito",
            "Cloud: AWS Lambda, API Gateway, S3",
            "Bancos de Dados: ScyllaDB, OracleDB, PostgreSQL, MySQL",
          ],
        },
        firstTeam: {
          title: "Primeira Equipe (03/2022 - 06/2022):",
          items: [
            "Analista desenvolvedor fullstack em time de autenticação",
            "Frontend: React e Styled Components",
            "Backend: Node.js, Express, Prisma ORM",
            "Testes: Jest, Mocha e Chai",
            "Cloud: AWS Lambda, Cognito, API Gateway, S3",
            "Containers: Docker",
          ],
        },
        uniSystem: {
          title:
            "Full Stack Developer - Uni System Automação e Tecnologia (11/2021 – 02/2022)",
          items: [
            "Desenvolvimento de site web para parque aquático",
            "Frontend: SASS e Next.JS (responsivo)",
            "Backend: Nest.JS",
          ],
        },
        freelance: {
          title: "Fullstack Developer - Autônomo (02/2021 – 11/2021)",
          items: [
            "Desenvolvimento de componentes e páginas responsivas",
            "Frontend: React.js e TypeScript",
            "Backend: Node.js e Express",
            "Implementação de arquiteturas limpas",
          ],
        },
      },
      education: {
        title: "Educação:",
        aiLiteracy: {
          title: "AI Literacy",
          institution: "Instituição: Triggo.AI",
          skills: "Competências: Treinamento sobre IAs e seu uso prático",
        },
        aws: {
          title: "AWS Lambda & Serverless - Developer Guide with Hands-on Lab",
          institution: "Instituição: Udemy",
          skills:
            "Competências: Amazon Cognito, API Gateway, Amazon DynamoDB, AWS Lambda, Amazon S3, Amazon SQS",
        },
        java: {
          title: "Curso de Java",
          institution: "Instituição: Rocketseat",
          skills: "Competências: Spring Boot, Java",
        },
        docker: {
          title: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
          institution: "Instituição: Udemy",
          skills: "Competências: Docker, Docker Swarm, Kubernetes",
        },
        typescript: {
          title: "TypeScript do Básico ao Avançado (c/ React, Express)",
          institution: "Instituição: Udemy",
          skills:
            "Competências: Git, Node.js, React.js, Yarn, Desenvolvimento Full Stack, TypeScript, JavaScript",
        },
        microservices: {
          title: "Node.js Microservices: NestJS, RabbitMQ and Cloud Services",
          institution: "Instituição: Udemy",
          skills:
            "Competências: Git, Node.js, React.js, CSS, Yarn, NestJS, Desenvolvimento Full Stack, TypeScript, JavaScript, MongoDB",
        },
        webModern: {
          title: "Curso Web Moderno Completo com JavaScript + Projetos",
          institution: "Instituição: Udemy",
          skills:
            "Competências: SASS, Git, Node.js, React.js, CSS, Yarn, Desenvolvimento Full Stack, Express.js, JavaScript, MongoDB",
        },
      },
    },
    skills: {
      title: "Habilidades",
      languages: "Linguagens",
      frontEnd: "Front-end",
      backEnd: "Back-end",
      databases: "Banco de Dados",
    },
    personalData: {
      title: "Sobre",
      name: "Nome",
      age: "Idade",
      location: "Cidade",
      state: "Estado",
      phone: "Telefone",
      email: "Email",
    },
  },
  "en-us": {
    header: {
      language: "Language",
      theme: "Theme",
    },
    experiences: {
      myStory: {
        title: "My Story:",
        text: "My passion for technology started early and led me to explore web development, starting with JavaScript. As a fullstack developer, I constantly seek efficient and elegant solutions, combining creativity and problem-solving.",
      },
      professional: {
        title: "Professional Experience:",
        sysmap: {
          title:
            "FullStack Developer Analyst - SysMap Solutions (12/2023 - Present)",
          items: [
            "Working as a fullstack developer analyst, focusing on backend",
            "Frontend: React and Styled Components",
            "Backend: Node.js, Express, Fastify, Zod, TypeORM, Java",
            "Testing: Jest and Mockito",
            "Cloud: AWS Lambda, API Gateway, S3",
            "Databases: ScyllaDB, OracleDB, PostgreSQL, MySQL",
          ],
        },
        firstTeam: {
          title: "First Team (03/2022 - 06/2022):",
          items: [
            "Fullstack developer analyst in authentication team",
            "Frontend: React and Styled Components",
            "Backend: Node.js, Express, Prisma ORM",
            "Testing: Jest, Mocha and Chai",
            "Cloud: AWS Lambda, Cognito, API Gateway, S3",
            "Containers: Docker",
          ],
        },
        uniSystem: {
          title:
            "Full Stack Developer - Uni System Automation and Technology (11/2021 – 02/2022)",
          items: [
            "Development of web site for water park",
            "Frontend: SASS and Next.JS (responsive)",
            "Backend: Nest.JS",
          ],
        },
        freelance: {
          title: "Fullstack Developer - Freelance (02/2021 – 11/2021)",
          items: [
            "Development of responsive components and pages",
            "Frontend: React.js and TypeScript",
            "Backend: Node.js and Express",
            "Implementation of clean architectures",
          ],
        },
      },
      education: {
        title: "Education:",
        aiLiteracy: {
          title: "AI Literacy",
          institution: "Institution: Triggo.AI",
          skills: "Skills: Training on AIs and their practical use",
        },
        aws: {
          title: "AWS Lambda & Serverless - Developer Guide with Hands-on Lab",
          institution: "Institution: Udemy",
          skills:
            "Skills: Amazon Cognito, API Gateway, Amazon DynamoDB, AWS Lambda, Amazon S3, Amazon SQS",
        },
        java: {
          title: "Java Course",
          institution: "Institution: Rocketseat",
          skills: "Skills: Spring Boot, Java",
        },
        docker: {
          title: "Docker for Developers (with Docker Swarm and Kubernetes)",
          institution: "Institution: Udemy",
          skills: "Skills: Docker, Docker Swarm, Kubernetes",
        },
        typescript: {
          title: "TypeScript from Basic to Advanced (with React, Express)",
          institution: "Institution: Udemy",
          skills:
            "Skills: Git, Node.js, React.js, Yarn, Full Stack Development, TypeScript, JavaScript",
        },
        microservices: {
          title: "Node.js Microservices: NestJS, RabbitMQ and Cloud Services",
          institution: "Institution: Udemy",
          skills:
            "Skills: Git, Node.js, React.js, CSS, Yarn, NestJS, Full Stack Development, TypeScript, JavaScript, MongoDB",
        },
        webModern: {
          title: "Complete Modern Web Course with JavaScript + Projects",
          institution: "Institution: Udemy",
          skills:
            "Skills: SASS, Git, Node.js, React.js, CSS, Yarn, Full Stack Development, Express.js, JavaScript, MongoDB",
        },
      },
    },
    skills: {
      title: "Skills",
      languages: "Languages",
      frontEnd: "Front-end",
      backEnd: "Back-end",
      databases: "Databases",
    },
    personalData: {
      title: "About",
      name: "Name",
      age: "Age",
      location: "Location",
      state: "State",
      phone: "Phone",
      email: "Email",
    },
  },
};
