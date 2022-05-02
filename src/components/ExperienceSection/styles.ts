import styled from "styled-components";

export const Wrapper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 15px auto;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  font-family: 500;
  color: var(--blue);
  margin-bottom: 15px;

  @media screen and (max-width: 1366px) {
    font-size: 36px;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
  }
  @media screen and (max-width: 428px) {
    font-size: 24px;
  }
  @media screen and (max-width: 360px) {
    font-size: 22px;
  }
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: 300;
  font-family: 500;
  color: var(--gray);
  letter-spacing: 0.1rem;
  text-align: center;
  max-width: 1300px;

  @media screen and (max-width: 1366px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 428px) {
    font-size: 16px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;
