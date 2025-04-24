import React, { useEffect, useState } from "react";
import { useTranslator } from "../../contexts";
import Tooltip from "@mui/material/Tooltip";
import { FaLinkedin, FaGithubSquare, FaFileDownload } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
// styles
import {
  PersonalDataContainer,
  PersonalDataContent,
  PersonalDataText,
  PersonalDataTitle,
  PersonalDataLabel,
  SocialMediaContainer,
  SocialMediaButton,
  Section,
} from "./styles";

export function PersonalData() {
  const [actualWiggle, setActualWiggle] = useState(0);
  const { t } = useTranslator();

  useEffect(() => {
    const wiggleTimer = setInterval(() => {
      setActualWiggle((prevWiggle) => (prevWiggle + 1) % 4);
    }, 3000);

    return () => clearInterval(wiggleTimer);
  }, []);

  function calculateAge(dateOfBirth: string) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    const birthDateArray = dateOfBirth.split("-");
    const birthYear = parseInt(birthDateArray[0]);
    const birthMonth = parseInt(birthDateArray[1]);
    const birthDay = parseInt(birthDateArray[2]);

    let age = currentYear - birthYear;

    if (
      currentMonth < birthMonth ||
      (currentMonth === birthMonth && currentDay < birthDay)
    ) {
      age--;
    }

    return age;
  }

  const dateOfBirth = "1997-05-01";
  const age = calculateAge(dateOfBirth);

  return (
    <PersonalDataContainer>
      <PersonalDataTitle>{t.get("personalData.title")}</PersonalDataTitle>
      <PersonalDataContent>
        <Section>
          <PersonalDataLabel>
            {t.get("personalData.name")}:
            <PersonalDataText>Silvio Félix</PersonalDataText>
          </PersonalDataLabel>
          <PersonalDataLabel>
            {t.get("personalData.age")}:
            <PersonalDataText>{age} anos</PersonalDataText>
          </PersonalDataLabel>
          <PersonalDataLabel>
            {t.get("personalData.location")}:
            <PersonalDataText>Piúma</PersonalDataText>
          </PersonalDataLabel>
          <PersonalDataLabel>
            {t.get("personalData.state")}:
            <PersonalDataText>Espirito Santo</PersonalDataText>
          </PersonalDataLabel>
          <PersonalDataLabel>
            {t.get("personalData.phone")}:
            <PersonalDataText>(28) 99900-2593</PersonalDataText>
          </PersonalDataLabel>
          <PersonalDataLabel>
            {t.get("personalData.email")}:
            <PersonalDataText>silvio.felix32@hotmail.com</PersonalDataText>
          </PersonalDataLabel>
        </Section>
        <SocialMediaContainer>
          <Tooltip title="Baixar PDF" arrow>
            <SocialMediaButton
              $actualWiggle={actualWiggle === 0}
              onClick={() => window.open("/documents/curriculo.pdf")}
            >
              <FaFileDownload />
            </SocialMediaButton>
          </Tooltip>
          <SocialMediaButton
            $actualWiggle={actualWiggle === 1}
            onClick={() => window.open("https://github.com/SilvioFelix32")}
          >
            <FaGithubSquare />
          </SocialMediaButton>
          <SocialMediaButton
            $actualWiggle={actualWiggle === 2}
            onClick={() =>
              window.open("https://www.linkedin.com/in/silviofelix32/")
            }
          >
            <FaLinkedin />
          </SocialMediaButton>
          <SocialMediaButton
            $actualWiggle={actualWiggle === 3}
            onClick={() =>
              window.open("https://api.whatsapp.com/send?phone=5528999002593")
            }
          >
            <SiWhatsapp />
          </SocialMediaButton>
        </SocialMediaContainer>
      </PersonalDataContent>
    </PersonalDataContainer>
  );
}
