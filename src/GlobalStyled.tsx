import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0; margin: 0; border: 0; outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body{
        background-color: #222;
        overflow-x: hidden;
    }
    .container-menu-main{
        display: flex;
        width: 100vw;
    }
`;