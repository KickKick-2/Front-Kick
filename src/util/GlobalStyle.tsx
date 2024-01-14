import { createGlobalStyle } from 'styled-components';
import { generateMedia } from 'styled-media-query';
import reset from 'styled-reset';

export const customMedia = generateMedia({
  desktop: '78em',
  tablet: '60em',
  mobile: '46em',
});

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    @font-face {
    font-family: "Line";
    font-weight: 50;
    src: url( "/fonts/NanumBarunGothicBold.ttf") format("truetype");
    }
    #root {
        overflow: hidden;
    }
  }
  
  body{
    margin:0;
    padding:0;
  }

  /* @media only screen and (min-width: 768px) {
  body {
    font-family: "Line", sans-serif;

  }
  body.no-header {
      max-width: 2000px;
      margin: 0 auto;
      padding: 0 10px;;
    }
} */
`;

export default GlobalStyle;
