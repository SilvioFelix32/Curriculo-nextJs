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
  color: var(--blue);

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

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 428px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 360px) {
    flex-wrap: wrap;
  }
`;

export const Selector = styled.button`
  width: 100%;
  min-width: 130px;
  padding: 16px;
  color: var(--blue);
  background-color: var(--white);
  font-size: 24px;
  font-weight: 600;
  font-family: 500;
  border: none;
  border-radius: 8px 8px 0 0;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }

  &.selected {
    color: var(--white);
    background-color: var(--blue);
  }

  @media screen and (max-width: 1366px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 428px) {
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;