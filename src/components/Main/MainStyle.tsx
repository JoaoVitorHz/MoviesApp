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
    }
    .movie-container img{
        width: 100%;
        border-radius: 6px;
    }
    .movie-container img:hover{
        transform: scale(1.05);
        transition: 300ms;
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
`;
