import {
  SiAmazondynamodb,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPostgresql,
} from "react-icons/si";

export function Databases() {
  return (
    <ul>
      <li>
        <SiPostgresql /> PostgreSQL
      </li>
      <li>
        <SiMysql /> MySQL
      </li>
      <li>
        <SiMongodb /> MongoDB
      </li>
      <li>
        <SiAmazondynamodb /> DynamoDB
      </li>
      <li>
        <SiOracle /> ScyllaDB
      </li>
      <li>
        <SiOracle /> OracleDB
      </li>
    </ul>
  );
}
