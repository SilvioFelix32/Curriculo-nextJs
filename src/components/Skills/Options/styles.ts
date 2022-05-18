import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 35vh;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  margin: 10px 20px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.secundary};
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
    z-index: 6;
  }

  @media screen and (max-width: 768px) {
    height: 50px;
    width: 300px;
  }
  @media screen and (max-width: 428px) {
    height: 50px;
    width: 300px;
  }
  @media screen and (max-width: 360px) {
    height: 50px;
    width: 300px;
  }
`;

export const Content = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.color};
  font-family: 500;
  padding: 0 15px;
  width: 100%;

  @media screen and (max-width: 1366px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
  @media screen and (max-width: 360px) {
    font-size: 10px;
  }
`;

export const Icon = styled.div`
  height: 60px;
  width: 80px;
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 8px 0;
  background-color: gray;

  svg {
    padding: 10px;
    height: 100%;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.color};
    border-radius: 0 8px 8px 0;
  }

  @media screen and (max-width: 1366px) {
    height: 60px;
  }
  @media screen and (max-width: 768px) {
    height: 50px;
  }
  @media screen and (max-width: 428px) {
    height: 50px;
  }
  @media screen and (max-width: 360px) {
    height: 50px;
  }
`;
