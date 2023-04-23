import styled from "styled-components";

export const MenuCss = styled.div`
    min-width: 15%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding: 5px;
    background-color: #050505;
    margin-top: 20px;


    .container-menu{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
    .div-menu-filter-title{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
    }   
    .div-menu-filter-title h3{
        color: rgb(255, 96, 28);
    }

    .menu-content{
        width: 100%;
        height: 90%;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255, 0.1);
        display: flex;
        flex-direction: column;
        padding: 50px 30px 50px 30px;
        gap: 15px;
        overflow-y: hidden;
    }

    .menu-content span{ 
        color: #f1dac4;
        text-decoration: none;
        font-weight: 500;
        cursor: pointer;

        &:hover{
            color: #f1dac4bc;
        }
    }


`;