import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Wrapper, Content, Title, Text } from "./styles";
import { experiences } from "./experiences";

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

export function ExperienceSection() {
  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        ssr={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={12000}
        keyBoardControl={true}
        transitionDuration={500}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={true}
        customTransition="all 0.5s ease"
      >
        {experiences.map((experience, index) => (
          <Content key={index}>
            <Title>{experience.title}</Title>
            {experience.text.map((paragraph, i) => (
              <Text key={i}>{paragraph}</Text>
            ))}
          </Content>
        ))}
      </Carousel>
    </Wrapper>
  );
}
