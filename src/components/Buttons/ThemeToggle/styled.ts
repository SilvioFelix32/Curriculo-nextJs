import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  border: none;
  height: 50px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.primary};
  margin-left: 5px;
  svg {
    height: 32px;
    width: 32px;
    transition: filter 0.2s;
    color: yellow;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
