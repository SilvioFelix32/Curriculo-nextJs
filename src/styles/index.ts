import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
`;

export const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const TopBox = styled.div`
  padding-top: 60px;
  display: flex;

  @media screen and (max-width: 1400px) {
    padding-top: 30px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding-top: 28px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 428px) {
    padding-top: 26px;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 360px) {
    padding-top: 20px;
    display: flex;
    flex-direction: column;
  }
`;
