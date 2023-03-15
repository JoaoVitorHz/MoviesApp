import { useState, useEffect } from "react";
import { api } from "../../hooks/useFetch";
import { MainCss } from "./MainStyle";

type MoviesTypes = {
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: string;
}

export function Main() {

    useEffect(() => {
        loadMovies();
    }, [])

    const [movie, setMovie] = useState<MoviesTypes[]>([]);

    const loadMovies = async () => {
        let json = await api.getAll();
        setMovie(json.results)
    }

    return(
        <MainCss>
            <main>
                <div className="main-container">
                    {
                        movie.map((movie) => {
                        return(
                            <div className="movie-container">
                                <img src={movie.backdrop_path} alt="" />

                                <div className="movie-info">
                                    <div className="movie-info-upper">
                                        <span>{movie.title}</span>

                                    </div>

                                    <div className="movie-info-lower">
                                        <span>Lançamento: {movie.release_date}</span>
                                        <span>Nota Geral: {movie.vote_average }</span>
                                    </div>
                                </div>

                            </div>
                        )})
                    }
                </div>
            </main>
        </MainCss>
    )
}

