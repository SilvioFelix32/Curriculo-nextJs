import { useState } from "react";
import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";
import {
  Languages,
  FrontEnd,
  BackEnd,
  Frameworks,
  Lang,
  Methodologies,
  Others,
} from "../Skills/Options";
import { Content, Wrapper, Selector } from "./styles";

export function MobileSelector() {
  const responsive = {
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Wrapper>
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        keyBoardControl={true}
        showDots={true}
        autoPlaySpeed={1000000}
      >
        <Content>
          <Selector>Linguagens</Selector>
          <Languages />
        </Content>
        <Content>
          <Selector>Front-end</Selector>
          <FrontEnd />
        </Content>
        <Content>
          <Selector>BackEnd</Selector>
          <BackEnd />
        </Content>
        <Content>
          <Selector>Tecnologias</Selector>
          <Frameworks />
        </Content>
        <Content>
          <Selector>Idiomas</Selector>
          <Lang />
        </Content>
        <Content>
          <Selector>Metodologias</Selector>
          <Methodologies />
        </Content>
        <Content>
          <Selector>Outros</Selector>
          <Others />
        </Content>
      </Carousel>
    </Wrapper>
  );
}
