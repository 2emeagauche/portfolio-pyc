import IconButton from '@mui/material/IconButton';
import GithubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="social-list">
        <p>Retrouvez moi sur :</p>
        <ul>
          <li>
            <IconButton
                sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                aria-label={`ouvrir le depo GitHub`}
                title={`ouvrir le depo GitHub`}
                href='https://github.com/2emeagauche'
                target='_blank'
                >
                <GithubIcon sx={{color:'#1D3557'}} />
              </IconButton>
          </li>
          <li>
            <IconButton
                sx={{ color: 'rgba(0, 0, 0, 0.54)' }}
                aria-label={`ouvrir le profile LinkedIn`}
                title={`ouvrir le profile LinkedIn`}
                href='https://www.linkedin.com/in/pierre-yves-chassaigne-05992a17b/'
                target='_blank'
                >
                <LinkedInIcon sx={{color:'#1D3557'}} />
              </IconButton>
          </li>
        </ul>
      </div>
      <p>© 2024</p>

    </div>
  )
}

export default Footer