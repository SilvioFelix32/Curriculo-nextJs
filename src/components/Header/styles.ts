import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textTitle};
  font-size: 1.2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
