import GlobalStyled from "./GlobalStyled"

import Modal from "react-modal";
import { useState } from "react";
import { MoviesType } from "./types/Movie";

import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { Menu } from "./components/Menu/Menu"

Modal.setAppElement('#root');

function App() {

  const [movies, setMovies] = useState<MoviesType>()

  const getMovie = (data: MoviesType) => {
    setMovies(data)
  }

  return (
    <> 
      <GlobalStyled/>
      <Header/>
      <div className="container-menu-main">
        <Menu clickFn={getMovie}/>
        <Main data={movies}/>
      </div>
    </>
  )
}

export default App
