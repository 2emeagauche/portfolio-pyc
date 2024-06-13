import MenuIcon from "../MenuIcon";
// import MenuIcon from '../../assets/menu-icon.svg'

const Header = () => {
  return (
    <div className="main-header">
      <h1 className="main-title">PORTFOLIO</h1>
      <nav>
        <MenuIcon />
        {/* <img src={MenuIcon} alt="menu" /> */}
      </nav>
    </div>
  )
}

export default Header