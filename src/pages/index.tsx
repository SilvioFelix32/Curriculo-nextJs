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
import { Wrapper, Box, TopBox, Content } from "../styles";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

const Home: NextPage = () => {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === "light" ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Content>
          <Box>
            <SwitchToggle toggleTheme={toggleTheme} />
            <TopBox>
              <Profile />
              <PersonalData />
            </TopBox>
          </Box>
          <ExperienceSection />
          <Skills />
        </Content>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Home;
