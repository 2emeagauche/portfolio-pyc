import { useState } from "react";
import MenuIcon from "../MenuIcon";
import MainMenu from "../MainMenu";
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar position='sticky' color='inherit' elevation={0}>
      <div className="main-header">
        <h1 className="main-title">Portfolio</h1>
        
        <nav>
          <Button sx={{all:'initial'}} onClick={toggleDrawer(true)}><MenuIcon /></Button>
          <Drawer open={open} onClose={toggleDrawer(false)} anchor='right' container={() => document.querySelector('#root')}>
            <MainMenu handleClose={toggleDrawer} />
          </Drawer>
          
        </nav>
      </div>
    </AppBar>
  )
}

export default Header