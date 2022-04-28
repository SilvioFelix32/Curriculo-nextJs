import { SiWheniwork } from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function Methodologies() {
  return (
    <Wrapper>
      <Card>
        <Content>Daily</Content>
        <Icon>
          <SiWheniwork />
        </Icon>
      </Card>
      <Card>
        <Content>Retrospective</Content>
        <Icon>
          <SiWheniwork />
        </Icon>
      </Card>
      <Card>
        <Content>Planning</Content>
        <Icon>
          <SiWheniwork />
        </Icon>
      </Card>
    </Wrapper>
  );
}
