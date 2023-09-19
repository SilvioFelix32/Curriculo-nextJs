import React from "react";
//components
import {
  ThemeToggle,
  Profile,
  PersonalData,
  ExperienceSection,
  Skills,
} from "../components";
//styles
import { Wrapper, Box, TopBox, Content, Header, Theme } from "../styles";

export default function Home() {
  return (
    <Theme>
      <Wrapper>
        <Content>
          <Box>
            <Header>
              Tema: <ThemeToggle />
            </Header>
            <TopBox>
              <Profile />
              <PersonalData />
            </TopBox>
          </Box>
          <ExperienceSection />
          <Skills />
        </Content>
      </Wrapper>
    </Theme>
  );
}
