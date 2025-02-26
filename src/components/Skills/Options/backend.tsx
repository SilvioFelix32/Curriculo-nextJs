import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiTypeorm,
} from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function BackEnd() {
  return (
    <Wrapper>
      <Card>
        <Content>node.js</Content>
        <Icon>
          <SiNodedotjs />
        </Icon>
      </Card>
      <Card>
        <Content>express</Content>
        <Icon>
          <SiExpress />
        </Icon>
      </Card>
      <Card>
        <Content>fastify</Content>
        <Icon>
          <SiNestjs />
        </Icon>
      </Card>
      <Card>
        <Content>nest.js</Content>
        <Icon>
          <SiNestjs />
        </Icon>
      </Card>
      <Card>
        <Content>prismaorm</Content>
        <Icon>
          <SiPrisma />
        </Icon>
      </Card>
      <Card>
        <Content>typeorm</Content>
        <Icon>
          <SiTypeorm />
        </Icon>
      </Card>
    </Wrapper>
  );
}
