import { Content, Wrapper, Title, Text } from "./styles";

export function ExperienceSection() {
  return (
    <Wrapper>
      <Content>
        <Title>Experiência:</Title>
        <Text>
          Analista Programador Jr - na empresa: SysMap Solutions. <br /> Período
          do emprego: 02/2022 - Momento atual.
        </Text>
        <br />
        <Text>
          Junior Full Stack Developer - na empresa: Uni System Automação e
          Tecnologia. <br /> Período do emprego: 11/2021 – 02/2022.
        </Text>
        <br />
        <Text>
          Fullstack Developer - Autônomo <br /> Período: fev. de 2021 – nov. de
          2021.
        </Text>
      </Content>
      <br />
      <Content>
        <Title>Educação:</Title>
        <Text>
          Udemy - Curso Web Moderno Completo com JavaScript 2021 + Projetos
        </Text>
        <br />
        <Text>
          Udemy - Node.js Microservices: NestJS, RabbitMQ and Cloud Services
        </Text>
        <br />
        <Text>
          Rocketseat - Ignite - Programa de aceleração de carreira full-stack
        </Text>
      </Content>
    </Wrapper>
  );
}
