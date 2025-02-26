import { useState } from "react";
import {
  Languages,
  FrontEnd,
  BackEnd,
  Frameworks,
  Lang,
  Methodologies,
  Others,
  Databases,
} from "./Options";
import { Content, Context, Selector, Wrapper, Title } from "./styles";

export function Skills() {
  const [nextSkill, setNextSkill] = useState("LANGUAGES");

  return (
    <Wrapper>
      <Title>Habilidades</Title>
      <Context>
        <Content>
          <Selector
            className={nextSkill === "LANGUAGES" ? "selected" : ""}
            onClick={() => setNextSkill("LANGUAGES")}
          >
            Linguagens
          </Selector>
          <Selector
            className={nextSkill === "FRONT-END" ? "selected" : ""}
            onClick={() => setNextSkill("FRONT-END")}
          >
            Front-end
          </Selector>
          <Selector
            className={nextSkill === "BACK-END" ? "selected" : ""}
            onClick={() => setNextSkill("BACK-END")}
          >
            Back-end
          </Selector>
          <Selector
            className={nextSkill === "DATABASES" ? "selected" : ""}
            onClick={() => setNextSkill("DATABASES")}
          >
            Banco de Dados
          </Selector>
          <Selector
            className={nextSkill === "TECNOLOGIES" ? "selected" : ""}
            onClick={() => setNextSkill("TECNOLOGIES")}
          >
            Tecnologias
          </Selector>
          <Selector
            className={nextSkill === "LANG" ? "selected" : ""}
            onClick={() => setNextSkill("LANG")}
          >
            Idiomas
          </Selector>
          <Selector
            className={nextSkill === "METODOLOGIES" ? "selected" : ""}
            onClick={() => setNextSkill("METODOLOGIES")}
          >
            Metodologias
          </Selector>
          <Selector
            className={nextSkill === "OTHERS" ? "selected" : ""}
            onClick={() => setNextSkill("OTHERS")}
          >
            Outros
          </Selector>
        </Content>
        <Content>
          {nextSkill === "LANGUAGES" && <Languages />}
          {nextSkill === "FRONT-END" && <FrontEnd />}
          {nextSkill === "BACK-END" && <BackEnd />}
          {nextSkill === "DATABASES" && <Databases />}
          {nextSkill === "TECNOLOGIES" && <Frameworks />}
          {nextSkill === "LANG" && <Lang />}
          {nextSkill === "METODOLOGIES" && <Methodologies />}
          {nextSkill === "OTHERS" && <Others />}
        </Content>
      </Context>
    </Wrapper>
  );
}
