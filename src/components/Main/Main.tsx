import Modal from 'react-modal';
import { MainCss } from "./MainStyle";

import { useState, useEffect } from "react";
import { request } from "../../hooks/useFetch";
import { MoviesType } from "../../types/Movie";


export function Main(data: any) {
    useEffect(() => {
        loadMovies()
    }, [])
    
    useEffect(() => {
        if(data['data'] != undefined)
            setMovie(data['data'].results)
            
    }, [data])
    
    const loadMovies = async () => {
        let json = await request.getData();
        setMovie(json.results)
    }
    
    const [movie, setMovie] = useState<MoviesType []>([]);

    const [modalData, setModalData] = useState<MoviesType>();
    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    return(
        <MainCss>
            <main>
                <div className="main-container">
                    {
                        movie.map((elementData) => {
                        return(
                            <div className="movie-container">
                                <img src={elementData.backdrop_path}  onClick={ () => {
                                    setModalData(elementData)
                                    setIsOpen(true)
                                }}/>

                                <div className="movie-info">
                                    <div className="movie-info-upper">
                                        <span>{elementData.title}</span>
                                    </div>

                                    <div className="movie-info-lower">
                                        <span>
                                            <i className="fa-solid fa-calendar-day"></i>
                                            Lançamento: {elementData.release_date}
                                        </span>
                                        <span>
                                            <i className="fa-regular fa-circle-check"></i> 
                                            Nota Geral: {elementData.vote_average }
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </main>
             
            <Modal
            isOpen={modalIsOpen}
            overlayClassName="Overlay"
            contentLabel="onRequestClose Example"
            className="Modal"
            >
                <div className="div-modal-header">
                    <i className="fa-solid fa-xmark" onClick={closeModal}></i>
                </div>
                <div className="div-modal-content">
                    <div className="div-modal-content-left">
                        <img src={modalData?.backdrop_path} alt="" />
                    </div>
                    <div className="div-modal-content-right">
                        <h1>{modalData?.title}</h1>
                        <div className="div-modal-content-subtitle">
                            <span>{modalData?.release_date}</span>
                            <span className="span-vote-average"> Nota Geral: {modalData?.vote_average}</span>
                        </div>
                        <span className="span-description">{modalData?.overview}</span>
                    </div>
                </div>
            </Modal> 
        </MainCss>
    )
}

