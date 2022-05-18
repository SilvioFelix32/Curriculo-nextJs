import { DailyIcon, PlanningIcon, RetrospectiveIcon } from "../../Icons";
import { Card, Wrapper, Content, Icon } from "./styles";

export function Methodologies() {
  return (
    <Wrapper>
      <Card>
        <Content>Daily</Content>
        <Icon>
          <DailyIcon />
        </Icon>
      </Card>
      <Card>
        <Content>Retrospective</Content>
        <Icon>
          <RetrospectiveIcon />
        </Icon>
      </Card>
      <Card>
        <Content>Planning</Content>
        <Icon>
          <PlanningIcon />
        </Icon>
      </Card>
    </Wrapper>
  );
}
