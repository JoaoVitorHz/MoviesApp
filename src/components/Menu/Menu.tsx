import { MenuCss } from "./MenuStyle"
import { api } from "../../hooks/useFetch"

type Props = {
    clickFn: (data: any) => any;
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
                        const data = await api.getPersonalApi((event.target as HTMLButtonElement).id)
                        clickFn(data)
                    }}>
                        <span id="1">Filmes em Estreias</span>
                        <span id="2">Filmes mais populares</span>
                        <span id="3">Filmes Mais bem Avaliados</span>
                    </div>
                </div>
                <div className="div-menu-filter">
                    <div className="div-menu-filter-title">
                        <h3>Series</h3>
                    </div>
                    <div className="menu-content" onClick={ async(event) => {
                         const data = await api.getPersonalApi((event.target as HTMLButtonElement).id)
                         clickFn(data)
                    }}>
                        <span id="4">Séries de TV</span>
                        <span id="5">Séries mais populares</span>
                        <span id="6">Séries em Exibição hoje</span>
                        <span id="7">Séries Mais bem Avaliados</span>
                    </div>
                </div>
            </div>
        </MenuCss>
    )
}

