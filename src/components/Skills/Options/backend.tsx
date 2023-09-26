import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { Card, Wrapper, Content, Icon } from "./styles";

export function BackEnd() {
  return (
    <Wrapper>
      <Card>
        <Content>nodejs</Content>
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
        <Content>nestjs</Content>
        <Icon>
          <SiNestjs />
        </Icon>
      </Card>
      <Card>
        <Content>postgressql</Content>
        <Icon>
          <SiPostgresql />
        </Icon>
      </Card>
      <Card>
        <Content>mysql</Content>
        <Icon>
          <SiMysql />
        </Icon>
      </Card>
      <Card>
        <Content>mongodb</Content>
        <Icon>
          <SiMongodb />
        </Icon>
      </Card>
      <Card>
        <Content>prismaorm</Content>
        <Icon>
          <SiPrisma />
        </Icon>
      </Card>
    </Wrapper>
  );
}
