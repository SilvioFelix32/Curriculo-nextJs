import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
`;

export const TopBox = styled.div`
  margin-top: 60px;
  display: flex;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
  }
`;
