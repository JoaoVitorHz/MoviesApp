import { HeaderCss } from "./HeaderStyle"
import resume from '../../assets/resume.pdf'

export function Header() {

    const linkedinUrl = "https://www.linkedin.com/in/jo%C3%A3o-vitor-araujo-96a78522b/";
    const gitHubUrl = "https://github.com/JoaoVitorHz";
    const porfolioUrl = "https://statuesque-crepe-cd6310.netlify.app/";
    
    return(
        <HeaderCss>
            <header>
                <div className="header">
                    <div className="header-left-side">
                        <span>MOVIE FX</span>
                    </div>
                    <div className="header-right-side">
                        <a href={linkedinUrl} title="Linkedin" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        <a href={gitHubUrl}  title="GitHub" target="_blank" ><i className="fa-brands fa-github"></i></a>
                        <a href={porfolioUrl}  title="Portfolio" target="_blank"><i className="fa-solid fa-laptop-code"></i></a>
                        <a href={resume} download="Curriculo João Vitor"  title="Curriculo" target="_blank"><i className="fa-regular fa-file-lines"></i></a>
                    </div>
                </div>
            </header>
        </HeaderCss>
    )
}