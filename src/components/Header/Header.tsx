import { HeaderCss } from "./HeaderStyle"

export function Header() {

    return(
        <HeaderCss>
            <header>
                <div className="header">
                    <div className="header-left-side">
                        <i className="fa-solid fa-video"></i>
                        <span>Minhas redes</span>
                    </div>
                    <div className="header-right-side">
                        <span>Esse é um sistema de teste criador por João Vitor</span>
                    </div>
                </div>
            </header>
        </HeaderCss>
    )
}