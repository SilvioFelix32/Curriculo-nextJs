import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  font-size: 1.2rem;
  font-weight: bold;
  font-family: 500;
  color: ${(props) => props.theme.colors.text};
`;
