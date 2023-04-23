import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0; margin: 0; border: 0; outline: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }
    body{
        background-color: #050505;
        overflow-x: hidden;
    }
    .container-menu-main{
        display: flex;
        width: 100vw;
    }
    .Overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .Modal {
        width: 1376px;
        height: 50%;
        padding: 20px;

        background-color: #151515;

        position: absolute;
        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        transform: translate(-50%, -50%);
        margin-right: -50%;

        display: flex;
        flex-direction: column;
    }
    .div-modal-header{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;

       & i{
            color: #FFF;
            font-size: 25px;
            cursor: pointer;
       }
       & i:hover{
            color: rgb(255, 96, 28);
       }
    }

    .div-modal-content{
        width: 100%;
        height: 100%;
        display: flex;
        gap: 20px;
    }

    .div-modal-content-left{
        width: 50%;
        height: 100%;

        & img{
            width: 100%;
            border-radius: 10px;
        }
    }
    .div-modal-content-right{
        width: 50%;
        height: 100%;
    }
    .div-modal-content-right h1{
        width: 500px;
        color: #f1dac4;
        margin-bottom: 5px;
    }
    .div-modal-content-right span{
        color: #f1dac4;
    }
    .div-modal-content-subtitle{
        width: 500px;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 30px;
    }
    .div-modal-content-subtitle span{
        font-size: 12px;
    }
    .span-vote-average{
        order: 3;
    }
    .div-modal-content-subtitle::after{
        content: '';
        width: 10px;
        height: 2px;
        background-color: #f1dac4;
    }

    .span-description{
        width: 500px;
        display: block;
    }

`;