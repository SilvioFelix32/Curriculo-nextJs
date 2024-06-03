import {
  SiStyledcomponents,
  SiSass,
  SiTailwindcss,
  SiChakraui,
  SiDocker,
  SiAxios,
  SiAwslambda,
  SiAmazonapigateway,
  SiAmazon,
} from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function Frameworks() {
  return (
    <Wrapper>
      <Card>
        <Content>lambda</Content>
        <Icon>
          <SiAwslambda />
        </Icon>
      </Card>
      <Card>
        <Content>apigateway</Content>
        <Icon>
          <SiAmazonapigateway />
        </Icon>
      </Card>
      <Card>
        <Content>Cognito</Content>
        <Icon>
          <SiAmazon />
        </Icon>
      </Card>
      <Card>
        <Content>docker</Content>
        <Icon>
          <SiDocker />
        </Icon>
      </Card>
      <Card>
        <Content> styled-components</Content>
        <Icon>
          <SiStyledcomponents />
        </Icon>
      </Card>
      <Card>
        <Content>sass</Content>
        <Icon>
          <SiSass />
        </Icon>
      </Card>
      <Card>
        <Content>tailwindcss</Content>
        <Icon>
          <SiTailwindcss />
        </Icon>
      </Card>
      <Card>
        <Content>chakra-ui</Content>
        <Icon>
          <SiChakraui />
        </Icon>
      </Card>
      <Card>
        <Content>Axios</Content>
        <Icon>
          <SiAxios />
        </Icon>
      </Card>
    </Wrapper>
  );
}
