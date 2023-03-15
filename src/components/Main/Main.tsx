import { useState, useEffect } from "react";
import { api } from "../../hooks/useFetch";
import { MainCss } from "./MainStyle";

type MoviesTypes = {
    backdrop_path: string;
    title: string;
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
                            <img src={"https://image.tmdb.org/t/p/original" +  movie.backdrop_path} alt="" />
                            <span>{movie.title}</span>
                        </div>
                        )
                    })
                    }
                </div>
            </main>
        </MainCss>
    )
}

