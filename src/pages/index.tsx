import type { NextPage } from "next";
//components
import { Profile } from "../components/Profile";
import { PersonalData } from "../components/PersonalData";
import { ExperienceSection } from "../components/ExperienceSection";
import { Skills } from "../components/Skills";

//styles
import { Wrapper, TopBox, Content } from "../styles";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Content>
        <TopBox>
          <Profile />
          <PersonalData />
        </TopBox>
        <ExperienceSection />
        <Skills />
      </Content>
    </Wrapper>
  );
};

export default Home;
