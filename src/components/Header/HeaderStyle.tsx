import styled from "styled-components";

export const HeaderCss = styled.div`
    color: White;
    header{
        width: 100vw;
        height: 60px;
        display: flex;
        justify-content: center;
        background-color: #151515e6;
    }
    .header{
        width: 90%;
        display: flex;
        justify-content: space-between;
    }
    .header-left-side{
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .header-left-side i{
        font-size: 22px;
        color: #BF2449;
    }
    .header-left-side span{
        text-transform: capitalize;
        font-weight: 600;
        font-size: 30px;
        margin-right: 15px;
        font-family: 'Teko', sans-serif;
        color: rgb(255, 96, 28);
    }
    .icon-media:hover{
        transform: scale(1.2);
        transition: 400ms;
    }
    .icon-media a{
        color: white;
        text-decoration: none;
    }

    .header-right-side{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .header-right-side a{
        text-decoration: none;
        color: #FFF;
        font-size: 25px;
    }
`;