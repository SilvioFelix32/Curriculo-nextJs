import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: auto;
  min-width: 50%;

  @media screen and (max-width: 720px) {
    min-width: 70%;
  }
`;

export const Title = styled.h1`
  margin-top: 15px;
  text-align: center;
  font-size: 2.2vw;
  font-weight: 600;
  font-family: 500;
  color: var(--blue);
`;

export const Box = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Text = styled.p`
  padding: 0 25px;
  font-size: 1.5vw;
  font-weight: 500;
  font-family: 500;
  color: var(--blue);
  letter-spacing: 0.1rem;
`;

export const SocialMedia = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 5px;
  font-family: 500;
  background-color: var(--white);
  border-top: solid 1px var(--gray);
  border-right: none;
  border-left: solid 1px var(--gray);
  border-bottom: solid 1px var(--gray);

  svg {
    height: 50px;
    width: 50px;
    color: var(--blue);
    transform: scale(1);

    &:hover {
      filter: brightness(0.9);
      transform: scale(1.2);
      animation: wiggle 2s linear infinite;
    }

    @media screen and (max-width: 720px) {
      height: 25px;
      width: 25px;
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
