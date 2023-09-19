import React, { useEffect, useState } from "react";
import { Popup } from "semantic-ui-react";
import { FaLinkedin, FaGithubSquare, FaFileDownload } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
//styles
import {
  Content,
  Wrapper,
  Text,
  Title,
  Box,
  SocialMedia,
  Button,
  HoverText,
} from "./styles";

export function PersonalData() {
  const [actualWiggle, setActualWiggle] = useState(0);

  useEffect(() => {
    const wiggleTimer = setInterval(() => {
      setActualWiggle((prevWiggle) => (prevWiggle + 1) % 4);
    }, 3000);

    return () => clearInterval(wiggleTimer);
  }, []);

  function calculateAge(dateOfBirth) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const birthDateArray = dateOfBirth.split("-");
    const birthYear = parseInt(birthDateArray[0]);
    const birthMonth = parseInt(birthDateArray[1]);
    const birthDay = parseInt(birthDateArray[2]);

    let age = currentYear - birthYear;

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }

    return age;
  }

  // Example of usage:
  const dateOfBirth = "1997-05-01";
  const age = calculateAge(dateOfBirth);

  return (
    <Wrapper>
      <Title>Sobre Mim</Title>
      <Box>
        <Content>
          <Text>
            <Text className="title">Nome:</Text> Silvio Emanoel de Oliveira
            Félix
          </Text>
          <Text>
            <Text className="title">Idade:</Text> {age} anos
          </Text>
          <Text>
            <Text className="title">Cidade:</Text> Piúma
          </Text>
          <Text>
            <Text className="title">Estado:</Text> Espirito Santo
          </Text>
          <Text>
            <Text className="title">Telefone:</Text> (28) 99900-2593
          </Text>
          <Text>
            <Text className="title">Email:</Text> silvio.felix32@hotmail.com
          </Text>
        </Content>
        <SocialMedia>
          <Popup
            content={<HoverText>Baixar PDF</HoverText>}
            position="top center"
            offset={[0, 10]}
            trigger={
              <Button
                actualWiggle={actualWiggle === 0}
                className="wiggle"
                onClick={() => window.open("/documents/curriculo.pdf")}
              >
                <FaFileDownload />
              </Button>
            }
          ></Popup>
          <Button
            actualWiggle={actualWiggle === 1}
            className="wiggle"
            onClick={() => window.open("https://github.com/SilvioFelix32")}
          >
            <FaGithubSquare />
          </Button>
          <Button
            actualWiggle={actualWiggle === 2}
            className="wiggle"
            onClick={() =>
              window.open("https://www.linkedin.com/in/silviofelix32/")
            }
          >
            <FaLinkedin />
          </Button>
          <Button
            actualWiggle={actualWiggle === 3}
            className="wiggle"
            onClick={() =>
              window.open("https://api.whatsapp.com/send?phone=5528999002593")
            }
          >
            <SiWhatsapp />
          </Button>
        </SocialMedia>
      </Box>
    </Wrapper>
  );
}
