import styled from "styled-components";

export const HeaderCss = styled.div`
    
    header{
        width: 100vw;
        height: 60px;

        display: flex;
        justify-content: center;

        background-color: #121214;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .header{
        width: 1200px;
        display: flex;
        justify-content: space-between;
    }
    .header-left-side{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .header-left-side h1{
        color: #00b37e;

        margin-right: 15px;

        font-size: 25px;
        font-weight: 600;
    }
    
    .header-left-side span{
        color: #FFF;

        margin-right: 15px;

        font-size: 13px;
        font-weight: 500;
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
        gap: 40px;
    }
    .header-right-side a{
        height: 100%;
        display: flex;
        align-items: inherit;
        
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;

        color: #A8A8B3;
        border-bottom: 2px solid transparent;
    }
    .header-right-side a:hover{
        color: #00b37e;
        border-bottom: 2.5px solid #00b37e;
    }
    .header-right-side i{
        font-size: 22px;
        margin-right: 5px;
    }
`;