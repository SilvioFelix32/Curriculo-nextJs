import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.secundary};
  }
`;

export const Content = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ContentWrapper = styled.div<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  outline: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  padding: 0 0 ${({ isExpanded }) => (isExpanded ? "1rem" : "0")};
`;

export const Title = styled.h2`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;
  margin: 0 2rem;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
1;
