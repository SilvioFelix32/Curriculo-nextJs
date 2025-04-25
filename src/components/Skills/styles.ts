import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
`;

export const Title = styled.h1`
  margin: 10px 0;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  font-family: 500;
  color: ${(props) => props.theme.colors.text};

  @media screen and (max-width: 1366px) {
    font-size: 26px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 428px) {
    font-size: 20px;
  }
  @media screen and (max-width: 360px) {
    font-size: 18px;
  }
`;

export const Context = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SkillItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const SkillTitle = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  transition: background-color 0.3s ease;

  span {
    font-size: 1rem;
  }
`;

export const SkillContent = styled.div`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  animation: fadeIn 0.3s ease forwards;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  li {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border-radius: 6px;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    width: 100%;
    min-width: 200px;
    height: 40px;
    padding: 0 1rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.02);
    }

    svg {
      font-size: 1.2rem;
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
  }

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
