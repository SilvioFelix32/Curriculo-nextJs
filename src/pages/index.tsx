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
import { Wrapper, Box, TopBox, Content, Theme } from "../styles";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <Theme>
      <Wrapper>
        <Content>
          <Box>
            <Header />
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
