import styled from "styled-components";

export const Theme = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

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

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  gap: 10px;

  font-size: 18px;
  font-weight: bold;
  font-family: 500;
  color: ${(props) => props.theme.colors.textTitle};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 100px 0 100px;

  @media screen and (max-width: 1366px) {
    padding: 20px 50px 0 50px;
  }

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
  max-height: 550px;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};

  @media screen and (max-width: 1276px) {
    padding-top: 28px;
    max-height: 100%;
    display: flex;
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
