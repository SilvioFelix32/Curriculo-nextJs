import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 15px 0;

  @media screen and (max-width: 428px) {
    margin-top: 12px;
  }
  @media screen and (max-width: 360px) {
    margin-top: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  font-family: 500;
  color: ${(props) => props.theme.colors.textTitle};

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 428px) {
    font-size: 26px;
  }
  @media screen and (max-width: 360px) {
    font-size: 22px;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  padding: 0 12px;
  font-size: 28px;
  font-weight: 300;
  font-family: 500;
  color: ${(props) => props.theme.colors.textTitle};
  letter-spacing: 0.1rem;

  @media screen and (max-width: 1400px) {
    font-size: 24px;
    padding: 0 10px;
    gap: 12px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 0 10px;
    gap: 10px;
  }
  @media screen and (max-width: 428px) {
    font-size: 14px;
    padding: 0 8px;
    gap: 0;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
    padding: 0 6px;
    gap: 0;
  }

  &.title {
    font-weight: 600;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and (max-width: 768px) {
    gap: 12px;
  }
  @media screen and (max-width: 428px) {
    gap: 10px;
  }
  @media screen and (max-width: 360px) {
    gap: 0;
  }
`;

export const HoverText = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 10;
  color: ${(props) => props.theme.colors.textContent};
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  font-family: 500;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
  @media screen and (max-width: 360px) {
    font-size: 10px;
  }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
`;

export const Button = styled.button<{ $actualWiggle: boolean }>`
  cursor: pointer;
  height: 48px;
  width: 48px;
  margin-right: 4px;
  font-family: 500;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  animation-name: ${wiggle};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: ${(props) => props.$actualWiggle && "3s"};

  svg {
    height: 100%;
    width: 100%;
    color: ${(props) => props.theme.colors.textTitle};
    transform: scale(1);

    &:hover {
      color: ${(props) => props.theme.colors.secundary};
      fill: ${(props) => props.theme.colors.background};
      transform: scale(1.2);
    }

    /* Keyframes */
    @keyframes wiggle {
      0%,
      7% {
        transform: rotateZ(0) scale(1);
      }
      15% {
        transform: rotateZ(-15deg) scale(1);
      }
      20% {
        transform: rotateZ(10deg) scale(1);
      }
      25% {
        transform: rotateZ(-10deg) scale(1);
      }
      30% {
        transform: rotateZ(6deg) scale(1);
      }
      35% {
        transform: rotateZ(-4deg) scale(1);
      }
      40%,
      100% {
        transform: rotateZ(0);
      }
    }
  }

  @media screen and (max-width: 1366px) {
    height: 46px;
    width: 46px;
    padding: 3px;
  }
  @media screen and (max-width: 768px) {
    height: 46px;
    width: 46px;
    padding: 3px;
  }
  @media screen and (max-width: 428px) {
    height: 32px;
    width: 32px;
    padding: 3px;
  }
  @media screen and (max-width: 360px) {
    height: 28px;
    width: 28px;
    padding: 3px;
  }
`;
