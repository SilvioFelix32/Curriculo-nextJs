import { SiJavascript, SiTypescript } from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function Languages() {
  return (
    <Wrapper>
      <Card>
        <Content>javascript</Content>
        <Icon>
          <SiJavascript />
        </Icon>
      </Card>
      <Card>
        <Content>typescript</Content>
        <Icon>
          <SiTypescript />
        </Icon>
      </Card>
    </Wrapper>
  );
}
