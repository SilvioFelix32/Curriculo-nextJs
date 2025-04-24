import { useTranslator } from "@/contexts/Translation";

export const useExperiences = () => {
  const { t } = useTranslator();

  return [
    {
      title: t.get("experiences.myStory.title"),
      text: [t.get("experiences.myStory.text")],
    },
    {
      title: t.get("experiences.professional.title"),
      text: [
        t.get("experiences.professional.sysmap.title"),
        ...t.get("experiences.professional.sysmap.items"),
        "",
        t.get("experiences.professional.firstTeam.title"),
        ...t.get("experiences.professional.firstTeam.items"),
        "",
        t.get("experiences.professional.uniSystem.title"),
        ...t.get("experiences.professional.uniSystem.items"),
        "",
        t.get("experiences.professional.freelance.title"),
        ...t.get("experiences.professional.freelance.items"),
      ],
    },
    {
      title: t.get("experiences.education.title"),
      text: [
        t.get("experiences.education.aiLiteracy.title"),
        t.get("experiences.education.aiLiteracy.institution"),
        t.get("experiences.education.aiLiteracy.skills"),
        "",
        t.get("experiences.education.aws.title"),
        t.get("experiences.education.aws.institution"),
        t.get("experiences.education.aws.skills"),
        "",
        t.get("experiences.education.java.title"),
        t.get("experiences.education.java.institution"),
        t.get("experiences.education.java.skills"),
        "",
        t.get("experiences.education.docker.title"),
        t.get("experiences.education.docker.institution"),
        t.get("experiences.education.docker.skills"),
        "",
        t.get("experiences.education.typescript.title"),
        t.get("experiences.education.typescript.institution"),
        t.get("experiences.education.typescript.skills"),
        "",
        t.get("experiences.education.microservices.title"),
        t.get("experiences.education.microservices.institution"),
        t.get("experiences.education.microservices.skills"),
        "",
        t.get("experiences.education.webModern.title"),
        t.get("experiences.education.webModern.institution"),
        t.get("experiences.education.webModern.skills"),
      ],
    },
  ];
};
