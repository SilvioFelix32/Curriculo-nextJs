import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .name {
    padding-top: 15px;
    color: ${(props) => props.theme.colors.textTitle};
    font-size: 42px;
    font-weight: 600;
    text-align: center;
    font-family: 500;

    @media screen and (max-width: 1366px) {
      font-size: 38px;
    }
    @media screen and (max-width: 768px) {
      font-size: 36px;
    }
    @media screen and (max-width: 428px) {
      font-size: 32px;
    }
    @media screen and (max-width: 360px) {
      font-size: 28px;
    }
  }

  .stack {
    color: ${(props) => props.theme.colors.textContent};
    font-size: 32px;
    font-weight: 600;
    font-family: 500;
    text-align: center;

    @media screen and (max-width: 1366px) {
      font-size: 30px;
    }
    @media screen and (max-width: 768px) {
      font-size: 28px;
    }
    @media screen and (max-width: 428px) {
      font-size: 26px;
    }
    @media screen and (max-width: 360px) {
      font-size: 24px;
    }
  }
`;

export const Picture = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .image {
    border-radius: 100%;
    object-fit: cover;

    @media screen and (max-width: 1366px) {
      border-radius: 10%;
    }
    @media screen and (max-width: 768px) {
      border-radius: 8%;
    }
    @media screen and (max-width: 428px) {
      border-radius: 5%;
    }
    @media screen and (max-width: 360px) {
      border-radius: 5%;
    }
  }

  @media screen and (max-width: 1366px) {
    width: 320px;
    height: 320px;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 428px) {
    width: 280px;
    height: 280px;
  }
  @media screen and (max-width: 360px) {
    width: 250px;
    height: 250px;
  }
`;
