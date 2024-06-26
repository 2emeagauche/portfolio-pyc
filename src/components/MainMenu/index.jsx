import { Button } from "@mui/material"
import MenuIcon from "../MenuIcon"

const MainMenu = ({handleClose}) => {
  return (
    <>
    {
      handleClose?
      <button className="close-button" onClick={handleClose(false)}><MenuIcon /></button>
      :
      <></>
    }
    <div className="main-menu">
      <ul onClick={handleClose?handleClose(false):null}>
        <li>
          <a href='#presentation'>Présentation</a>
        </li>
        <li>
          <a href='#competences'>Mes Compétences</a>
        </li>
        <li>
          <a href='#realisations'>Mes Réalisations</a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default MainMenu