import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 100%;
  padding: 2rem 0;

  .image {
    object-fit: contain;
  }

  @media screen and (max-width: 1276px) {
    padding: 0 0 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export const ProfileName = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-top: 1rem;
  padding-left: 3rem;

  @media screen and (max-width: 1276px) {
    padding-left: 0;
  }
`;

export const ProfileRole = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  padding-left: 1rem;

  @media screen and (max-width: 1276px) {
    padding-left: 0;
  }
`;
