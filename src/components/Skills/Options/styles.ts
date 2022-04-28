import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 35vh;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--gray);
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  margin: 10px 20px;
  height: 70px;
  width: 360px;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
  transform: scale(1);

  &:hover {
    transform: scale(1.2);
    z-index: 6;
  }

  @media screen and (max-width: 720px) {
    height: 40px;
    width: 250px;
  }
`;

export const Content = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 1vw;
  font-weight: 500;
  color: var(--blue-light);
  font-family: 500;
  padding: 10px;
  width: 100%;
`;

export const Icon = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: solid 2px var(--gray);
  border-radius: 0 8px 8px 0;
  background-color: gray;

  svg {
    padding: 10px;
    height: 70px;
    width: 80px;
    background-color: var(--blue);
    color: var(--white);
    border-radius: 0 8px 8px 0;

    @media screen and (max-width: 720px) {
      height: 40px;
      width: 40px;
    }
  }
`;
