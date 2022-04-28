import {
  SiAtlassian,
  SiBitbucket,
  SiConfluence,
  SiGithub,
  SiJenkins,
  SiJirasoftware,
  SiNpm,
  SiYarn,
} from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function Others() {
  return (
    <Wrapper>
      <Card>
        <Content>git</Content>
        <Icon>
          <SiGithub />
        </Icon>
      </Card>
      <Card>
        <Content>npm</Content>
        <Icon>
          <SiNpm />
        </Icon>
      </Card>
      <Card>
        <Content>yarn</Content>
        <Icon>
          <SiYarn />
        </Icon>
      </Card>
      <Card>
        <Content>atlassian</Content>
        <Icon>
          <SiAtlassian />
        </Icon>
      </Card>
      <Card>
        <Content>confluence</Content>
        <Icon>
          <SiConfluence />
        </Icon>
      </Card>
      <Card>
        <Content>jira</Content>
        <Icon>
          <SiJirasoftware />
        </Icon>
      </Card>
      <Card>
        <Content>jenkins</Content>
        <Icon>
          <SiJenkins />
        </Icon>
      </Card>
      <Card>
        <Content>bitbucket</Content>
        <Icon>
          <SiBitbucket />
        </Icon>
      </Card>
    </Wrapper>
  );
}
