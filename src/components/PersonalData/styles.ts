import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: auto;
  min-width: 50%;

  @media screen and (max-width: 1366px) {
    min-width: 70%;
  }
  @media screen and (max-width: 768px) {
    min-width: 60%;
  }
  @media screen and (max-width: 428px) {
    min-width: 60%;
  }
  @media screen and (max-width: 360px) {
    min-width: 60%;
  }
`;

export const Title = styled.h1`
  margin-top: 12px;
  text-align: center;
  font-size: 42px;
  font-weight: 600;
  font-family: 500;
  color: var(--blue);

  @media screen and (max-width: 1366px) {
    font-size: 32px;
  }
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
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  padding: 0 25px;
  font-size: 32px;
  font-weight: 500;
  font-family: 500;
  color: var(--blue);
  letter-spacing: 0.1rem;

  @media screen and (max-width: 1366px) {
    font-size: 26px;
    padding: 0 22px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
    padding: 0 18px;
  }
  @media screen and (max-width: 428px) {
    font-size: 16px;
    padding: 0 16px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
    padding: 0 12px;
  }

  &.title {
    font-weight: 600;
  }
`;

export const SocialMedia = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 62px;
  width: 62px;
  padding: 5px;
  font-family: 500;
  background-color: var(--white);
  border-top: solid 1px var(--gray);
  border-right: none;
  border-left: solid 1px var(--gray);
  border-bottom: solid 1px var(--gray);

  svg {
    height: 100%;
    width: 100%;
    color: var(--blue);
    transform: scale(1);

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.2);
      animation: wiggle 2s linear infinite;
    }

    /* Keyframes */
    @keyframes wiggle {
      0%,
      7% {
        transform: rotateZ(0) scale(1.2);
      }
      15% {
        transform: rotateZ(-15deg) scale(1.2);
      }
      20% {
        transform: rotateZ(10deg) scale(1.2);
      }
      25% {
        transform: rotateZ(-10deg) scale(1.2);
      }
      30% {
        transform: rotateZ(6deg) scale(1.2);
      }
      35% {
        transform: rotateZ(-4deg) scale(1.2);
      }
      40%,
      100% {
        transform: rotateZ(0);
      }
    }
  }
`;