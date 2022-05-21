import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  display: none;
  flex-direction: column;
  border-radius: 10px;
  margin: 15px auto;
  padding: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 428px) {
    display: flex;
  }
  @media screen and (max-width: 360px) {
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
