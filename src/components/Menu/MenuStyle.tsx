import styled from "styled-components";

export const MenuCss = styled.div`
    min-width: 15%;
    height: 100vh;
    
    padding: 5px;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    background-color: #121214;

    .container-menu{
        width: 100%;

        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .div-menu-filter-title{
        width: 100%;
        margin-bottom: 5px;

        display: flex;
        justify-content: center;
    }   
    .div-menu-filter-title h3{
        color: #00b37e;
    }
    
    .menu-content{
        width: 100%;
        height: 90%;
        padding: 50px 30px;
        
        display: flex;
        flex-direction: column;
        gap: 15px;

        border-radius: 5px;
        background-color: #202024;
    }
    .menu-content span{ 
        display: flex;
        align-items: center;
        gap: 10px;

        cursor: pointer;
        font-weight: 400;
        font-size: 14px;

        color: #FFF;
        background-color: #121214;

        height: 50px;
        padding: 20px;
        border-radius: 5px;
        transition: 300ms;
    }
    .menu-content span:hover{ 
        background-color: #2d2d2e;
    }
    .menu-content i{ 
        color: #00b37e;
        font-size: 20px;
    }
`;