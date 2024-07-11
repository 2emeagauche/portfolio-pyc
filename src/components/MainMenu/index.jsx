import MenuIcon from "../MenuIcon"
import { Link } from "react-scroll"

const MainMenu = ({handleClose, mobile}) => {


  return (
    <>
    {
      handleClose?
      <button className="close-button" onClick={handleClose(false)} aria-label="ferme le menu"><MenuIcon /></button>
      :
      <></>
    }
    <div className="main-menu">
      <ul>
        <li>
          <Link className="menu-item" activeClass="active-menu-item" spy={true} to="presentation" onClick={handleClose?handleClose(false):null} smooth={true} duration={500} offset={mobile ? -70 : -100} isDynamic={true}>Présentation</Link>
        </li>
        <li>
          <Link className="menu-item" activeClass="active-menu-item" spy={true} to='competences' onClick={handleClose?handleClose(false):null} smooth={true} duration={500} offset={mobile ? -130 : -92} isDynamic={true}>Mes Compétences</Link>
        </li>
        <li>
          <Link className="menu-item" activeClass="active-menu-item" spy={true} to='realisations' onClick={handleClose?handleClose(false):null} smooth={true} duration={500} offset={mobile ? -210 : -152} isDynamic={true}>Mes Réalisations</Link>
        </li>
      </ul>
    </div>
    </>
  )
}

export default MainMenu