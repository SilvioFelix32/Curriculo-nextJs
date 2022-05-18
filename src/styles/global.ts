import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1000px) {
            font-size: 93.75%;  
        }

        @media (max-width: 720px) {
            font-size: 87.5%;  
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
       background: ${(props) => props.theme.colors.primary};
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .handler {
        height: 100%;
        width: 100%;

    svg{
        color: yellow;
        background-color: #0B1222;
        border-radius: 50%;
        padding: 5px;
        height:100%;
        width: 100%;
    }


  @media screen and (max-width: 1366px) {
    height: 20px;
  }
  @media screen and (max-width: 768px) {
    height: 20px;
  }
  @media screen and (max-width: 428px) {
    height: 20px;
  }
  @media screen and (max-width: 360px) {
    height: 20px;
  }
  }

    .react-multiple-carousel__arrow--right {
    right: 0;
  }

  .react-multiple-carousel__arrow--left {
    left: 0;
  }
`;
