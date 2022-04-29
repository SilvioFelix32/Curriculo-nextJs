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
} from "./styles";

export function PersonalData() {
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
            <Text className="title">Idade:</Text> 25 anos
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
          <Button
            className="pdf"
            onClick={() => window.open("/documents/curriculo.pdf")}
          >
            <FaFileDownload />
          </Button>
          <Button
            onClick={() => window.open("https://github.com/SilvioFelix32")}
          >
            <FaGithubSquare />
          </Button>
          <Button
            onClick={() =>
              window.open("https://www.linkedin.com/in/silviofelix32/")
            }
          >
            <FaLinkedin />
          </Button>
          <Button
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
