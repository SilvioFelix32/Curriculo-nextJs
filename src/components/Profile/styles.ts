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
    padding-top: 10px;
    color: ${(props) => props.theme.colors.textTitle};
    font-size: 2rem;
    font-weight: 600;
    text-align: center;

    @media screen and (max-width: 768px) {
      margin-top: 30px;
    }
  }

  .stack {
    color: ${(props) => props.theme.colors.textContent};
    font-size: 1.6rem;
    font-weight: 600;
    text-align: center;
  }
`;

export const Picture = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .image {
    border-radius: 50%;
    object-fit: cover;
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
    height: 280px;

    .image {
      border-radius: 8px;
    }
  }
  @media screen and (max-width: 360px) {
    height: 250px;

    .image {
      margin-top: 20px;
      border-radius: 8px;
    }
  }
`;
