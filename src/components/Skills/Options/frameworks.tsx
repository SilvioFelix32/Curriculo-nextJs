import {
  SiStyledcomponents,
  SiSass,
  SiTailwindcss,
  SiChakraui,
} from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function Frameworks() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
