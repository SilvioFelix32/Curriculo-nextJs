import {
  SiAmazondynamodb,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPostgresql,
} from "react-icons/si";
import { Wrapper, Content, Card, Icon } from "./styles";

export function Databases() {
  return (
    <Wrapper>
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
        <Content>oracle</Content>
        <Icon>
          <SiOracle />
        </Icon>
      </Card>
      <Card>
        <Content>mongodb</Content>
        <Icon>
          <SiMongodb />
        </Icon>
      </Card>
      <Card>
        <Content>dynamoDB</Content>
        <Icon>
          <SiAmazondynamodb />
        </Icon>
      </Card>
    </Wrapper>
  );
}
