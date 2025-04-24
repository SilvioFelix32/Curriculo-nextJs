import styled, { keyframes } from "styled-components";

export const PersonalDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 6px;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const PersonalDataTitle = styled.h1`
  font-size: 26px;
  font-weight: 600;
  font-family: 500;
  color: ${(props) => props.theme.colors.textTitle};
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 428px) {
    font-size: 20px;
  }
  @media screen and (max-width: 360px) {
    font-size: 16px;
  }
`;

export const PersonalDataContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
`;

export const PersonalDataText = styled.p`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  padding-left: 0.5rem;
  font-weight: 500;

  @media screen and (max-width: 1400px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
  @media screen and (max-width: 360px) {
    font-size: 10px;
  }
`;

export const PersonalDataLabel = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textTitle};
  letter-spacing: 0.05rem;

  @media screen and (max-width: 1400px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  @media screen and (max-width: 428px) {
    font-size: 14px;
  }
  @media screen and (max-width: 360px) {
    font-size: 12px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

export const SocialMediaTooltip = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 10;
  color: ${(props) => props.theme.colors.textContent};
  border-radius: 6px;
  padding: 0.8rem;
  font-size: 14px;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
  @media screen and (max-width: 428px) {
    font-size: 12px;
  }
  @media screen and (max-width: 360px) {
    font-size: 11px;
  }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); background-color: #52D1C5; }
`;

export const SocialMediaButton = styled.button<{ $actualWiggle: boolean }>`
  cursor: pointer;
  height: 48px;
  width: 48px;
  margin-right: 0.5rem;
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
  }

  @media screen and (max-width: 1366px) {
    height: 42px;
    width: 42px;
  }
  @media screen and (max-width: 768px) {
    height: 38px;
    width: 38px;
  }
  @media screen and (max-width: 428px) {
    height: 32px;
    width: 32px;
  }
  @media screen and (max-width: 360px) {
    height: 28px;
    width: 28px;
  }
`;
