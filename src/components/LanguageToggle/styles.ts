import styled from "styled-components";

export const LanguageToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  padding: 0.5rem;
  margin-left: 1rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
