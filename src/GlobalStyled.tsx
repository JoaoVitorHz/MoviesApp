import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        padding: 0; margin: 0; border: 0; outline: 0;
        box-sizing: border-box;
        /* font-family: 'Sora', sans-serif; */
        font-family: 'Roboto', sans-serif;
    }
    body{
        background-color: #121214;
        overflow-x: hidden;
    }
    .container-menu-main{
        display: flex;
        width: 100vw;
    }

    /* STYLES MOVIES DETAIL MODAL */
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
        height: auto;
        padding: 20px;

        background-color: #151515;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .div-modal-header{
        width: 100%;
        height: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .div-modal-header i{
        color: #FFF;
        font-size: 25px;
        cursor: pointer;
    }
    .div-modal-header i:hover{
        color: rgb(255, 96, 28);
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
    }
    .div-modal-content-left img{
        width: 100%;
        border-radius: 10px;
        border: 3px solid #00b37e;
    }

    .div-modal-content-right{
        width: 50%;
        height: 100%;
    }
    .div-modal-content-right h1{
        width: 500px;
        margin-bottom: 5px;
        color: #FFF;
    }
    .div-modal-content-right span{
        color: #FFF;
    }
    .div-modal-content-subtitle{
        width: 500px;
        margin-bottom: 30px;

        display: flex;
        align-items: center;
        gap: 10px;
    }
    .div-modal-content-subtitle span{
        font-size: 12px;
    }
    .div-modal-content-subtitle span i{
        color: #00b37e;
        font-size: 16px;
        margin-right: 5px;
    }
    .span-vote-average{
        order: 3;
    }
    .div-modal-content-subtitle::after{
        content: '';
        width: 10px;
        height: 2px;
        background-color: #FFF;
    }
    .span-description{
        width: 500px;
        display: block;
    }

    /* MAX WIDTH 1440 PX */
    @media (max-width: 1440px){
        .Modal {
            width: 1080px;
        }
    }

    /* MAX WIDTH 1376 PX */
    @media (max-width: 1376px){
        .Modal {
            width: 1080px;
        }
    }

    /* MAX WIDTH 1280 PX */
    @media (max-width: 1280px){
        .Modal {
            width: 1080px;
        }
    }

    /* MAX WIDTH 1024 PX */
    @media (max-width: 1024px){
        .Modal {
            width: 800px;
        }
        .div-modal-content-right h1{
            width: 100%;
        }
        .span-description{
            width: 100%;
        }
    }

    /* MAX WIDTH 800 PX */
    @media (max-width: 800px) and (max-height: 600px){
        .Modal {
            width: 600px;
        }
    }
`;