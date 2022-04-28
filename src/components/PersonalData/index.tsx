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
          <Text>Nome: Silvio Emanoel de Oliveira Félix</Text>
          <Text>Idade: 25 anos</Text>
          <Text>Cidade: Piúma</Text>
          <Text>Estado: Espirito Santo</Text>
          <Text>Telefone: (28) 99900-2593</Text>
          <Text>Email: silvio.felix32@hotmail.com</Text>
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
