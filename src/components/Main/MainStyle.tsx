import styled from "styled-components";

export const MainCss = styled.div`
    main {
        width: 100vw;
        display: flex;
        justify-content: center;
    }
    .main-container{
        width: 60%;
        margin-top: 20px;

        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
    }
    .movie-container{
        width: 230px;
        margin: 15px;
        cursor: pointer;
    }
    .movie-container:hover{
        transform: scale(1.1);
        transition: 300ms;
    }
    .movie-container img{
        width: 100%;
        border-radius: 6px;
    }
    .movie-container span{
        color: #FFF;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 14px;
    }
`;