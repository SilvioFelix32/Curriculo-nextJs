import {
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
} from "react-icons/si";

export function FrontEnd() {
  return (
    <ul>
      <li>
        <SiReact /> React.js
      </li>
      <li>
        <SiNextdotjs /> Next.js
      </li>
      <li>
        <SiStyledcomponents /> Styled Components
      </li>
      <li>
        <SiTailwindcss /> Tailwind CSS
      </li>
    </ul>
  );
}
