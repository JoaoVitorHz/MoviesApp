import { useState, useEffect } from "react";
import { MainCss } from "./MainStyle";

type MoviesTypes = {
    avatar: string;
    titulo: string;
}

export function Main() {

    const [movies, setMovies] = useState<MoviesTypes[]>([]);

    useEffect(() => {
        LoadMovies()
    }, []);

    async function LoadMovies (){
        let response = await fetch('https://api.b7web.com.br/cinema/')
        let json = await response.json();
        setMovies(json);
        console.log(movies)
    }

    return(
        <MainCss>
            <main>
                <div className="main-container">
                    {movies.map(movie => {
                        return(
                            <div className="movie-container">
                            <img src={movie.avatar} alt="" />
                            <span>{movie.titulo}</span>
                        </div>
                        )
                    })}
                </div>
            </main>
        </MainCss>
    )
}

