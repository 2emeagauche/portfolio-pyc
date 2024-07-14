import { useState } from "react"
import MenuIcon from "../MenuIcon"
import MainMenu from "../MainMenu"
import AppBar from '@mui/material/AppBar'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { useViewport } from "react-viewport-hooks"
import { resetMenuItem } from "../Utils"
import { Button as RSButton } from "react-scroll"

const Header = () => {
  const {vw} = useViewport()

  let mobile = vw < 640
    
  const [open, setOpen] = useState(false);
  
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position='sticky' color='inherit' elevation={0}>
      <div className="main-header">
        <h1 className="main-title"><RSButton to="top" smooth={true} duration={500} offset={-70} onClick={resetMenuItem}>Portfolio</RSButton></h1>
        
        <nav>
          {
            mobile ?
              <>
                <Button sx={{all:'initial'}} onClick={toggleDrawer(true)}><MenuIcon /></Button>
                <Drawer open={open} onClose={toggleDrawer(false)} anchor='right' container={() => document.querySelector('#root')} className="menu-drawer">
                  <MainMenu handleClose={toggleDrawer} mobile={true} />
                </Drawer>
              </>
            :
            <MainMenu />
          }
          
        </nav>
      </div>
    </AppBar>
  )
}

export default Header