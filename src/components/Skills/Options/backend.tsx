import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDocker,
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
        <Content>expressjs</Content>
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
        <Content>postgress</Content>
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
        <Content>docker</Content>
        <Icon>
          <SiDocker />
        </Icon>
      </Card>
      <Card>
        <Content>mongodb</Content>
        <Icon>
          <SiMongodb />
        </Icon>
      </Card>
      <Card>
        <Content>prisma</Content>
        <Icon>
          <SiPrisma />
        </Icon>
      </Card>
    </Wrapper>
  );
}
