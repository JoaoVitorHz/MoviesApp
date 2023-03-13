import styled from "styled-components";

export const HeaderCss = styled.div`
    color: White;
    header{
        width: 100vw;
        height: 40px;
        display: flex;
        justify-content: center;
        background-color: #444;
    }
    .header{
        width: 60%;
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
        font-size: 16px;
        margin-right: 15px;
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
    }
`;