import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      --white: #FFF;
      --blue-200: #71A5FF;
      --blue-400: #3680FF;
      --blue-600: #1D2366;

      --gray-200: #D9D9D9;

      font-size: ${px2vw(24)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    background: var(--blue-400);
    color: var(--gray-200);
    -webkit-font-smoothing: antialiased;
  }
`;

export default Global;