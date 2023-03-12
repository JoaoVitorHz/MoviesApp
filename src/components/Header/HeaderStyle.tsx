import styled from "styled-components";

export const HeaderCss = styled.div`
    color: White;
    header{
        width: 100vw;
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
    }
    .header-left-side span{
        text-transform: uppercase;
        font-weight: 600;
        font-size: 12px;
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
    .icon-media i{
        margin: 0 15px;
        font-size: 18px;
        height: 40px;
        line-height: 40px;
        cursor: pointer;
    }

    .header-right-side{
        display: flex;
        align-items: center;
    }
`;