import styled from "styled-components";

export const Theme = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 85%;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background: ${({ theme }) => theme.colors.primary};
  padding: 2rem;

  @media screen and (max-width: 720px) {
    padding: 1rem;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 0;

  @media screen and (max-width: 1366px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 428px) {
    padding: 20px 0;
  }
  @media screen and (max-width: 360px) {
    padding: 20px 0;
  }
`;

export const TopBox = styled.div`
  max-height: 335px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1276px) {
    padding-top: 28px;
    max-height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 428px) {
    padding-top: 26px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 360px) {
    padding-top: 20px;
    max-height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
