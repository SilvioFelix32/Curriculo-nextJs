import styled from "styled-components";

export const LanguageToggleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 50px;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  margin: 0 12px;
`;
