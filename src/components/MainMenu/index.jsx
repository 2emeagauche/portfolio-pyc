import MenuIcon from "../MenuIcon"
import { resetMenuItem } from "../Utils"

const MainMenu = ({handleClose}) => {

  const handleMenuItemActiveStatus = (e) => {
    resetMenuItem()
    e.target.classList.add('active-menu-item')
  }

  return (
    <>
    {
      handleClose?
      <button className="close-button" onClick={handleClose(false)} aria-label="ferme le menu"><MenuIcon /></button>
      :
      <></>
    }
    <div className="main-menu">
      <ul onClick={handleClose?handleClose(false):null}>
        <li>
          <a className="menu-item" href='#presentation' onClick={(e) => handleMenuItemActiveStatus(e)}>Présentation</a>
        </li>
        <li>
          <a className="menu-item" href='#competences' onClick={(e) => handleMenuItemActiveStatus(e)}>Mes Compétences</a>
        </li>
        <li>
          <a className="menu-item" href='#realisations' onClick={(e) => handleMenuItemActiveStatus(e)}>Mes Réalisations</a>
        </li>
      </ul>
    </div>
    </>
  )
}

export default MainMenu