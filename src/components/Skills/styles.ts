import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  margin: 30px 0;
  text-align: center;
  font-size: 2vw;
  font-weight: 600;
  font-family: 500;
  color: var(--blue);
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: var(--white);
`;

export const Selector = styled.button`
  width: 100%;
  padding: 16px;
  color: var(--blue);
  background-color: var(--white);
  font-size: 1.3vw;
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
`;
