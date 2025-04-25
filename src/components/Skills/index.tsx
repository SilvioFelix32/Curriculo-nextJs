import { useState } from "react";
import { useTranslator } from "../../contexts";
import {
  Languages,
  FrontEnd,
  BackEnd,
  Frameworks,
  Methodologies,
  Others,
  Databases,
} from "./Options";
import {
  Context,
  Wrapper,
  Title,
  SkillItem,
  SkillTitle,
  SkillContent,
} from "./styles";

export function Skills() {
  const { t } = useTranslator();
  const [expandedSkills, setExpandedSkills] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleSkill = (skill: string) => {
    setExpandedSkills((prev) => ({
      ...prev,
      [skill]: !prev[skill],
    }));
  };

  const skills = [
    {
      id: "LANGUAGES",
      title: t.get("skills.languages"),
      component: <Languages />,
    },
    {
      id: "FRONT-END",
      title: t.get("skills.frontEnd"),
      component: <FrontEnd />,
    },
    { id: "BACK-END", title: t.get("skills.backEnd"), component: <BackEnd /> },
    {
      id: "DATABASES",
      title: t.get("skills.databases"),
      component: <Databases />,
    },
    {
      id: "TECNOLOGIES",
      title: "Cloud & Containers",
      component: <Frameworks />,
    },
    {
      id: "METODOLOGIES",
      title: t.get("skills.methodologies"),
      component: <Methodologies />,
    },
    { id: "OTHERS", title: t.get("skills.tools"), component: <Others /> },
  ];

  return (
    <Wrapper>
      <Title>{t.get("skills.title")}</Title>
      <Context>
        {skills.map((skill) => (
          <SkillItem key={skill.id}>
            <SkillTitle onClick={() => toggleSkill(skill.id)}>
              {skill.title}
              <span>{expandedSkills[skill.id] ? "▼" : "▶"}</span>
            </SkillTitle>
            {expandedSkills[skill.id] && (
              <SkillContent>{skill.component}</SkillContent>
            )}
          </SkillItem>
        ))}
      </Context>
    </Wrapper>
  );
}
