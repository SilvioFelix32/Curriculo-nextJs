import type { NextPage } from "next";
import React, { useState } from "react";
//components
import { Profile } from "../components/Profile";
import { PersonalData } from "../components/PersonalData";
import { ExperienceSection } from "../components/ExperienceSection";
import { SwitchToggle } from "../components/ChangeTheme";
import { Skills } from "../components/Skills";
//styles
import { ThemeProvider } from "styled-components";
import { Wrapper, Box, TopBox, Content, Header } from "../styles";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import { MobileSelector } from "../components/MobileSelector";

const Home: NextPage = () => {
  const [theme, setTheme] = useState(light);
  const [device, setDevice] = useState("");

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Content>
          <Box>
            <Header>
              Tema: <SwitchToggle toggleTheme={toggleTheme} />
            </Header>
            <TopBox>
              <Profile />
              <PersonalData />
            </TopBox>
          </Box>
          <ExperienceSection />
          <Skills />
          <MobileSelector />
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
