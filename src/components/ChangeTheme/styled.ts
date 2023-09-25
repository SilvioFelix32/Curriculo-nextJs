import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  border: none;
  height: 50px;
  padding: 10px;
  color: yellow;
  background-color: ${({ theme }) => theme.colors.primary};

  svg {
    height: 32px;
    width: 32px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 768px) {
    margin-right: 22px;
  }
`;
