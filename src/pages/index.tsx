import type { NextPage } from "next";
//components
import { Profile } from "../components/Profile";
import { PersonalData } from "../components/PersonalData";
import { ExperienceSection } from "../components/ExperienceSection";
import { Skills } from "../components/Skills";

//styles
import { Wrapper, TopBox } from "../styles";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <TopBox>
        <Profile />
        <PersonalData />
      </TopBox>
      <ExperienceSection />
      <Skills />
    </Wrapper>
  );
};

export default Home;
