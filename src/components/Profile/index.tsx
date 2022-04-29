import Image from "next/image";
import { Content, Wrapper, Picture } from "./styles";

export function Profile() {
  return (
    <Wrapper>
      <Picture>
        <Image
          src={"/images/picture.jpg"}
          alt="Picture_Of_author"
          height={350}
          width={350}
          className="image"
        />
      </Picture>
      <Content>
        <Content className="name">Silvio Félix</Content>
        <Content className="stack">Full-Stack Developer</Content>
      </Content>
    </Wrapper>
  );
}
