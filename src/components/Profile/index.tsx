import Image from "next/image";
import {
  ProfileContainer,
  ProfileContent,
  ProfileName,
  ProfileRole,
} from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <Image
        src={"/images/eu.jpg"}
        alt="Picture_Of_author"
        height={250}
        width={250}
        className="image"
      />
      <ProfileName>Silvio Félix</ProfileName>
      <ProfileRole>Full-Stack Developer</ProfileRole>
    </ProfileContainer>
  );
}
