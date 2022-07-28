import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    #root {
        width: 100%;
    }
    
    body {
        background-color: #170017;
        background-image: url("https://www.transparenttextures.com/patterns/axiom-pattern.png");
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }
`;
