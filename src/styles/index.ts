import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Content = styled.div`
  width: 85%;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${(props) => props.theme.colors.primary};
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 100px 0 100px;

  @media screen and (max-width: 768px) {
    padding: 20px 20px 0 20px;
  }
  @media screen and (max-width: 428px) {
    padding: 20px 20px 0 20px;
  }
  @media screen and (max-width: 360px) {
    padding: 20px 20px 0 20px;
  }
`;

export const TopBox = styled.div`
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};

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
