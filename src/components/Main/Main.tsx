import { useState, useEffect } from "react";
import { api } from "../../hooks/useFetch";
import { MainCss } from "./MainStyle";
import Modal from 'react-modal';


type MoviesTypes = {
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
}


export function Main(data: any) {
    const [movie, setMovie] = useState<MoviesTypes []>([]);

    useEffect(() => {
        loadMovies()
    }, [])

    useEffect(() => {
        console.log(data['data'])

        if(data['data'] != undefined){
            setMovie(data['data'].results)

            console.log(data['data'].results)
        }
    }, [data])

    const loadMovies = async () => {
        let json = await api.getPersonalApi();
        setMovie(json.results)
    }

    const [modalData, setModalData] = useState<MoviesTypes>();
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
                                    console.log(elementData)
                                }}/>

                                <div className="movie-info">
                                    <div className="movie-info-upper">
                                        <span>{elementData.title}</span>

                                    </div>

                                    <div className="movie-info-lower">
                                        <span>Lançamento: {elementData.release_date}</span>
                                        <span>Nota Geral: {elementData.vote_average }</span>
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

