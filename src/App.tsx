import { useState } from "react";
import GlobalStyled from "./GlobalStyled"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Menu } from "./components/Menu/Menu"
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {

  const [dados, setA] = useState()

  const eventMain = (data: any) => {
    setA(data)
  }

  return (
    <> 
    <GlobalStyled/>
    <Header/>
    <div className="container-menu-main">
      <Menu clickFn={eventMain}/>
      <Main data={dados}/>
    </div>
 
    </>
  )
}

export default App
