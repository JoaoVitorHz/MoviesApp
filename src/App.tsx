import GlobalStyled from "./GlobalStyled"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Menu } from "./components/Menu/Menu"

function App() {

  return (
    <> 
    <GlobalStyled/>
    <Header/>
    <div className="container-menu-main">
      <Menu/>
      <Main/>
    </div>
 
    </>
  )
}

export default App
