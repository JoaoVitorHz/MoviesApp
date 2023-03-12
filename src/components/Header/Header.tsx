import { HeaderCss } from "./HeaderStyle"
import resume from "../../resume.pdf"

export function Header() {

    const linkedinLink = "https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/";
    const gitHubLink = "https://github.com/JoaoVitorHz";
    const porfolioLink = "https://statuesque-crepe-cd6310.netlify.app/";

    return(
        <HeaderCss>
            <header>
                <div className="header">
                    <div className="header-left-side">
                        <span>Minhas redes</span>

                        <div className="icon-media">
                            <a href={gitHubLink} title="GitHub" target="_blank" ><i className="fa-brands fa-github"></i></a>
                        </div>

                        <div className="icon-media"> 
                            <a href={linkedinLink} title="Linkedin" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>

                        <div className="icon-media">
                            <a href={porfolioLink} title="Porfolio" target="_blank"><i className="fa-sharp fa-solid fa-laptop-code"></i></a>
                        </div>
                        
                        <div className="icon-media"> 
                            <a href={resume} download="Curriculo João Vitor" title="Curriculo"><i className="fa-sharp fa-solid fa-book"></i></a>
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