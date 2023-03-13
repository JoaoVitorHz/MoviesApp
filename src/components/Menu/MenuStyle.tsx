import styled from "styled-components";

export const MenuCss = styled.div`
    min-width: 15%;
    height: 100vh;
    position: fixed;
    display: flex;
    justify-content: center;
    padding: 5px;
    .container-menu{
        width: 90%;
        background-color: #222;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .icons-menu{
        display: flex;
        align-items: baseline;
        gap: 20px;
        border-radius: 10px;
        padding: 15px;
        color: #FFF;
        cursor: pointer;
    }
    .icons-menu:hover{
        background-color: #272727;
    }
    .icons-menu span{
        font-size: 14px;
        font-weight: 300;
    }
    .icons-menu a{
        text-decoration: none;
        color: #FFF;
        display: flex;
        align-items: baseline;
        gap: 20px;
    }
    .icons-menu i{
        font-size: 20px;
    }
    .container-menu-session1::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.5);
        margin: 10px 0;
    }
`;