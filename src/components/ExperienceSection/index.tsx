import { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Wrapper,
  Content,
  Title,
  Text,
  ScrollContainer,
  ExpandButton,
  ContentWrapper,
} from "./styles";
import { useExperiences } from "./experiences";

export function ExperienceSection() {
  const [expandedSections, setExpandedSections] = useState<{
    [key: number]: boolean;
  }>({ 0: true });

  const experiences = useExperiences();

  const toggleSection = (index: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <Wrapper>
      <ScrollContainer>
        {experiences.map((experience, index) => (
          <Content key={index} onClick={() => toggleSection(index)}>
            <ContentWrapper isExpanded={expandedSections[index]}>
              <Title>
                {experience.title}
                <ExpandButton>
                  {expandedSections[index] ? "▼" : "▶"}
                </ExpandButton>
              </Title>
              {expandedSections[index] &&
                experience.text.map((paragraph, i) => (
                  <Text key={i}>
                    {paragraph && <ReactMarkdown>{paragraph}</ReactMarkdown>}
                  </Text>
                ))}
            </ContentWrapper>
          </Content>
        ))}
      </ScrollContainer>
    </Wrapper>
  );
}
