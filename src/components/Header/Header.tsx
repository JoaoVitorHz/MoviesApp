import { HeaderCss } from "./HeaderStyle"

export function Header() {
    return(
        <HeaderCss>
            <header>
                <div className="header">
                    <div className="header-left-side">
                        <span>Minhas redes</span>

                        <div className="icon-media">
                            <a href="" title="GitHub"><i className="fa-brands fa-github"></i></a>
                        </div>

                        <div className="icon-media"> 
                            <a href="" title="Linkedin"><i className="fa-brands fa-linkedin"></i></a>
                        </div>

                        <div className="icon-media">
                            <a href="" title="Porfolio"><i className="fa-sharp fa-solid fa-laptop-code"></i></a>
                        </div>
                        
                        <div className="icon-media"> 
                           
                            <a href="" title="Curriculo"><i className="fa-sharp fa-solid fa-book"></i></a>
                        </div>
                    </div>
                    <div className="header-right-side">
                        <span>Esse é um sistema de teste criador por João Vitor</span>
                    </div>
                </div>
            </header>
        </HeaderCss>
    )
}