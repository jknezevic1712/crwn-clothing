import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    html {
        height: 110vh;
        width: 100vw;
        background-color: #CFE1F7;
        overflow-x: hidden;
    }
       
    body {
        font-family: "Open Sans Condensed", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        #root {
            height: 100%;
            width: 80%;
            display: grid;
            grid-template-rows: 10% 90%;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }

    button {
        border-radius: 5px;
    }

    @media only screen and (min-width: 2560px) {
        body {
          font-size: 1.4em;
        }
    }
    
`;
