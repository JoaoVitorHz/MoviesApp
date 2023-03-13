import { MenuCss } from "./MenuStyle"
import resume from "../../resume.pdf"

export function Menu() {

    const linkedinLink = "https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/";
    const gitHubLink = "https://github.com/JoaoVitorHz";
    const porfolioLink = "https://statuesque-crepe-cd6310.netlify.app/";

    return(
        <MenuCss>
            <div className="container-menu">
                <div className="container-menu-session1">
                    <div className="icons-menu">
                        <i className="fa-solid fa-house"></i>
                        <span>Inicio</span>
                    </div>
                    <div className="icons-menu">
                        <i className="fa-solid fa-phone"></i>
                        <span>Contato</span>
                    </div>

                    <div className="icons-menu ">
                        <i className="fa-regular fa-star"></i>
                        <span>Recomendação</span>
                    </div>
                </div>
                
                <div className="container-icons-contatos">

                    <div className="icons-menu ">
                        <a href={linkedinLink} title="Linkedin" target="_blank" className="link-icons-menu">
                            <i className="fa-brands fa-linkedin"></i>
                            <span>Linkedin</span>
                        </a>
                    </div>
                    
                    <div className="icons-menu ">
                        <a href={gitHubLink} title="GitHub" target="_blank" >
                            <i className="fa-brands fa-github"></i>
                            <span>GitHub</span>
                        </a>
                    </div>
                    
                    <div className="icons-menu ">
                        <a href={porfolioLink} title="Porfolio" target="_blank">
                            <i className="fa-solid fa-file-circle-exclamation"></i>
                            <span>Portfolio</span>
                        </a>
                    </div>

                    <div className="icons-menu ">
                        <a href={resume} download="Curriculo João Vitor" title="Curriculo">
                            <i className="fa-solid fa-file-arrow-down"></i>
                            <span>Baixar Curriculo</span>
                        </a>
                    </div>
                </div>

            </div>
        </MenuCss>
    )
}
