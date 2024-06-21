import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link'

const MainMenu = ({handleClose}) => {
  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={handleClose(false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Link href='#competences'>Mes Compétences</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>
              <Link href='#realisations'>Mes Réalisations</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}

export default MainMenu