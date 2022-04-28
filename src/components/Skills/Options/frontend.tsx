import { SiCss3, SiHtml5, SiReact, SiNextdotjs } from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function FrontEnd() {
  return (
    <Wrapper>
      <Card>
        <Content>css</Content>
        <Icon>
          <SiCss3 />
        </Icon>
      </Card>
      <Card>
        <Content>html</Content>
        <Icon>
          <SiHtml5 />
        </Icon>
      </Card>
      <Card>
        <Content>reactjs</Content>
        <Icon>
          <SiReact />
        </Icon>
      </Card>
      <Card>
        <Content>nextjs</Content>
        <Icon>
          <SiNextdotjs />
        </Icon>
      </Card>
    </Wrapper>
  );
}
