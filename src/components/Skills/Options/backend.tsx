import {
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiTypeorm,
  SiSpring,
  SiApachemaven,
} from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";

export function BackEnd() {
  return (
    <ul>
      <li>
        <SiNodedotjs /> Node.js
      </li>
      <li>
        <SiExpress /> Express
      </li>
      <li>
        <SiNestjs /> Fastify
      </li>
      <li>
        <SiNestjs /> NestJS
      </li>
      <li>
        <BiLogoJava /> Java
      </li>
      <li>
        <SiTypeorm /> TypeORM
      </li>
      <li>
        <SiPrisma /> Prisma ORM
      </li>
      <li>
        <SiSpring /> Spring
      </li>
      <li>
        <SiSpring /> Spring Boot
      </li>
      <li>
        <SiApachemaven /> Maven
      </li>
    </ul>
  );
}
