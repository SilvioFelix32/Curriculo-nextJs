import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 50px 0 20px 0;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  font-family: 500;
  color: ${(props) => props.theme.colors.textTitle};

  @media screen and (max-width: 1366px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 428px) {
    font-size: 20px;
  }
  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  overflow-x: auto;
`;

export const Selector = styled.button`
  width: 100%;
  min-width: 130px;
  padding: 16px;
  color: ${(props) => props.theme.colors.color};
  background-color: ${(props) => props.theme.colors.secundary};
  font-size: 24px;
  font-weight: 600;
  font-family: 500;
  border: none;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &.selected {
    color: ${(props) => props.theme.colors.secundary};
    background-color: ${(props) => props.theme.colors.color};
  }

  @media screen and (max-width: 1366px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    min-width: 120px;
  }
  @media screen and (max-width: 428px) {
    font-size: 14px;
    min-width: 120px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
    min-width: 120px;
  }
`;
