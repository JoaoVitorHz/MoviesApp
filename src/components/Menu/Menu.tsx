import { MenuCss } from "./MenuStyle";
import { request } from "../../hooks/useFetch";

import { MoviesType } from "../../types/Movie";

type Props = {
    clickFn: (data: MoviesType) => any;
}

export function Menu({clickFn}: Props) {
    return(
        <MenuCss>
            <div className="container-menu">
                <div className="div-menu-filter">
                    <div className="div-menu-filter-title">
                        <h3>Filmes</h3>
                    </div>
                    <div className="menu-content" onClick={ async (event) => {
                        const data = await request.getData((event.target as HTMLButtonElement).id)
                        clickFn(data)
                    }}>
                        <span id="1">
                            <i className="fa-solid fa-font-awesome"></i>
                            Filmes em Estreias
                        </span>
                        <span id="2">
                            <i className="fa-solid fa-fire"></i>
                            Filmes mais populares
                        </span>
                        <span id="3">
                            <i className="fa-regular fa-circle-check"></i>
                            Filmes melhores avaliados
                        </span>
                    </div>
                </div>
                <div className="div-menu-filter">
                    <div className="div-menu-filter-title">
                        <h3>Series</h3>
                    </div>
                    <div className="menu-content" onClick={ async(event) => {
                         const data = await request.getData((event.target as HTMLButtonElement).id)
                         clickFn(data)
                    }}>
                        <span id="4">
                            <i className="fa-solid fa-tv"></i>
                            Séries de TV
                        </span>
                        <span id="5">
                            <i className="fa-solid fa-fire"></i>
                            Séries mais populares
                        </span>
                        <span id="6">
                            <i className="fa-solid fa-calendar-day"></i>
                            Séries em Exibição hoje
                        </span>
                        <span id="7">
                            <i className="fa-regular fa-circle-check"></i>
                            Séries Mais bem Avaliados
                        </span>
                    </div>
                </div>
            </div>
        </MenuCss>
    )
}

