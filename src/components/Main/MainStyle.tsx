import styled from "styled-components";

export const MainCss = styled.div`
    width: 85%;
    padding: 30px;

    overflow-y: scroll;

    main {
        width: 100%;
    }
    .main-container{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        gap: 30px;
    }
    .movie-container{
        cursor: pointer;
        padding: 20px;
        border-radius: 5px;
        background-color:#202024;
        transition: 200ms;
    }
    .movie-container:hover{
        transform: scale(1.05);
    }
    .movie-container img{
        width: 100%;
        border-radius: 6px;
    }
   
    .movie-container span{
        color: #FFF;
        text-transform: capitalize;
        font-weight: 700;
        font-size: 14px;
    }
    .movie-info{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .movie-info-lower{
        display: flex;
        justify-content: space-between;
    }
    .movie-info-lower span{
        color: #ccc;
        font-size: 12px;
        font-weight: 400;
    }
    .movie-info-lower span i{
        color: #00b37e;
        margin-right: 5px;
    }

    /* MAX WIDTH 1376 PX*/
    @media (max-width: 1376px){
        .main-container{
            grid-template-columns: repeat(3, 1fr);
        }
    }

    /* MAX WIDTH 1024 PX */
    @media (max-width: 1024px){
        .main-container{
            grid-template-columns: repeat(2, 1fr);
        }
    }

    /* MAX WIDHT 800 PX */
    @media (max-width: 800px){
        .main-container{
            grid-template-columns: repeat(2, 1fr);
        }
        .movie-info-lower span{
            font-size: 10px;
        }
    }
`;
