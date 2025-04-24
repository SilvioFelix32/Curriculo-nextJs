import { useState } from "react";
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
    { id: "LANGUAGES", title: "Linguagens", component: <Languages /> },
    { id: "FRONT-END", title: "Front-end", component: <FrontEnd /> },
    { id: "BACK-END", title: "Back-end", component: <BackEnd /> },
    { id: "DATABASES", title: "Banco de Dados", component: <Databases /> },
    {
      id: "TECNOLOGIES",
      title: "Cloud & Containers",
      component: <Frameworks />,
    },
    {
      id: "METODOLOGIES",
      title: "Metodologias Ágeis",
      component: <Methodologies />,
    },
    { id: "OTHERS", title: "Ferramentas", component: <Others /> },
  ];

  return (
    <Wrapper>
      <Title>Habilidades</Title>
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
