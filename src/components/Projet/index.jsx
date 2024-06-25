import { useState } from "react"
import SimpleDialog from "../../components/SimpleDialog"
import IconButton from '@mui/material/IconButton';
import GithubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import MoreHorizontalIcon from '@mui/icons-material/MoreHoriz';

const Projet = (props) => {
  const {projetTitle, projetResume, projetGithubHref, projetDemoHref, projetVisuel, children} = {...props}
  console.log(children)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const MoreInfo = () => {
    return (
      children && <>
        <IconButton
          sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
          aria-label={`En savoir plus sur ${projetTitle}`}
          title={`En savoir plus sur ${projetTitle}`}
          onClick={handleClickOpen}
        >
          <MoreHorizontalIcon sx={{color:'#1D3557'}} />
        </IconButton>
        <SimpleDialog
          open={open}
          onClose={handleClose}
          dTitle={projetTitle}
        >
          {children}
        </SimpleDialog>
      </>
    )
  }

  return (
    <div className="card projet">
      <div className="projet-texts">
        <h4 className="main-title">{projetTitle}</h4>
        <p>{projetResume}<MoreInfo /></p>
        <p>
          
          <IconButton
            sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
            aria-label={`ouvrir le repo GitHub`}
            title={`ouvrir le repo GitHub`}
            href={projetGithubHref}
            target='_blank'
            >
            <GithubIcon sx={{color:'#1D3557'}} />
          </IconButton>
          {projetDemoHref && <IconButton
            sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
            aria-label={`ouvrir la demo`}
            title={`ouvrir la demo`}
            href={projetDemoHref}
            target='_blank'
          >
            <LaunchIcon sx={{color:'#1D3557'}} />
          </IconButton>}
        </p>
      </div>
      <img className="projet-visuel" src={projetVisuel} alt={`capture d'ecran du projet ${projetTitle}`} />
    </div>
  )
}

export default Projet