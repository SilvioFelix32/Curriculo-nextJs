import { IoLanguage } from "react-icons/io5";
import { Card, Wrapper, Content, Icon } from "./styles";

export function Lang() {
  return (
    <Wrapper>
      <Card>
        <Content>português: nativo</Content>
        <Icon>
          <IoLanguage />
        </Icon>
      </Card>
      <Card>
        <Content>ingles: intermediário</Content>
        <Icon>
          <IoLanguage />
        </Icon>
      </Card>
      <Card>
        <Content>espanhol: intermediário</Content>
        <Icon>
          <IoLanguage />
        </Icon>
      </Card>
    </Wrapper>
  );
}
