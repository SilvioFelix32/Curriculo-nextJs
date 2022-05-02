import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import { Content, Wrapper, Title, Text } from "./styles";

export function ExperienceSection() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        showDots={true}
        infinite={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        transitionDuration={1000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        <Content>
          <Title>Minha História:</Title>
          <Text>
            Embora tenha começado minha carreira como um pintor, sempre tive uma paixão por
            tecnologias, e por isso eu ansiava aprender mais, ansiava aprender
            algo diferente.
          </Text>
          <Text>
            E foi ai que aconteceu: aquela chama se ascendeu no momento que eu
            cliquei em reproduzir no meu primeiro vídeo tutorial em JavaScript.
            <br /> O desenvolvimento web chama todas as minhas paixões: ele
            incorpora criatividade e solução de problemas.
          </Text>
        </Content>
        <Content>
          <Title>Objetivos:</Title>
          <Text>
            - Usar meu conhecimento e esforço para ajudar a equipe/ empresa a
            sempre apresentar códigos limpos, testáveis e legíveis.
            <br />
            - Ajudar tanto quanto possível á contribuir para que todos os
            projetos sejam feitos com excelência e dentro do prazo.
            <br />- Absorver experiéncia ao máximo junto a equipe/empresa e
            concluir todos os desafios propostos.
          </Text>
        </Content>
        <Content>
          <Title>Experiência:</Title>
          <Text>
            Analista Programador Jr - na empresa: SysMap Solutions. <br />{" "}
            Período do emprego: 02/2022 - Momento atual.
          </Text>
          <br />
          <Text>
            Junior Full Stack Developer - na empresa: Uni System Automação e
            Tecnologia. <br /> Período do emprego: 11/2021 – 02/2022.
          </Text>
          <br />
          <Text>
            Fullstack Developer - Autônomo <br /> Período: fev. de 2021 – nov.
            de 2021.
          </Text>
        </Content>
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
      </Carousel>
    </Wrapper>
  );
}
