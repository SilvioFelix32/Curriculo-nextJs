import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: auto;
  background-color: var(--white);
  outline: solid 1px var(--gray);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    padding-top: 15px;
    color: var(--blue);
    font-size: 2.5vw;
    font-weight: 600;
    text-align: center;
    font-family: 500;
  }

  .stack {
    color: grey;
    font-size: 2vw;
    font-weight: 600;
    font-family: 500;
    text-align: center;
  }
`;

export const Picture = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .image {
    border-radius: 100%;
    object-fit: cover;
  }
`;
