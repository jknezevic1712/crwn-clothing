import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        height: 100vh;
        width: 100vw;
        background-color: #CFE1F7;
        overflow-x: hidden;
        scroll-behavior: smooth;
        font-size: 14px;
    }
       
    body {
        font-family: "Open Sans Condensed", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        #root {
            height: 100%;
            width: 95%;
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

    @media (min-width: 2560px) {
        html {
            font-size: 20px;
        }
    }
`;
