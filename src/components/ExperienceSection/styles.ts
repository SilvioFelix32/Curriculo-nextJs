import styled from "styled-components";

export const Wrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 15px auto;
  padding: 20px;
  background-color: var(--gray);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  font-size: 2.2vw;
  font-weight: 600;
  font-family: 500;
  color: var(--blue);
`;

export const Text = styled.p`
  font-size: 1.5vw;
  font-weight: 500;
  font-family: 500;
  color: var(--blue);
  letter-spacing: 0.1rem;
`;
