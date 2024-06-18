import { useState } from "react"
import Banner from "../../components/Banner"
import Chapter from '../../components/Chapter'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import IconReact from '../../components/Icons/IconReact'
import IconRouter from '../../components/Icons/IconRouter'
import IconRedux from '../../components/Icons/IconRedux'
import IconJest from '../../components/Icons/IconJest'
import IconApi from '../../components/Icons/IconApi'
import IconAgile from '../../components/Icons/IconAgile'
import IconAlgo from '../../components/Icons/IconAlgo'
import IconCss3 from '../../components/Icons/IconCss3'
import IconGit from '../../components/Icons/IconGit'
import IconHtml5 from '../../components/Icons/IconHtml5'
import IconJs from '../../components/Icons/IconJs'
import IconAnimate from '../../components/Icons/IconAnimate'
import IconIllustrator from '../../components/Icons/IconIllustrator'
import IconInkscape from '../../components/Icons/IconInkscape'
import IconPhotoshop from '../../components/Icons/IconPhotoshop'
import IconEmail from '../../components/Icons/IconEmail'
import IconJira from '../../components/Icons/IconJira'

const theme = createTheme({
  components: {
    MuiListItem:{
      styleOverrides: {
        root: {
          padding: '0.4rem 0',
        }
      }
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '3rem',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          margin: 'auto',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 'normal',
        },
      },
    },
  },
});


const IconListItem = ({children, icon}) => {
  return (
    <ListItem>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  )
}

const Accueil = () => {

  return (
    <div className="container">
      <Banner />
      <section className="presentation-block" id="presentation">
        <div className="main-title">
          <h2>
            Présentation
          </h2>
        </div>
        <div className="custom-underline" aria-hidden='true'>
          <span className="custom-underline-line" aria-hidden='true'></span>
          <span className="custom-underline-chevron" aria-hidden='true'></span>
          <span className="custom-underline-line" aria-hidden='true'></span>
        </div>
        <div className="presentation-text">
          <p>J’ai une expérience de <strong>20 ans en agence</strong> de communication en tant qu’intégrateur Web au sein d’une équipe de production de 20 personnes.</p>
          <p>Entre 2023 et 2024, afin de <strong>valider et perfectionner</strong> mes acquis je suis la formation certifiante (BAC+2) <strong>Intégrateur Web d’OpenClassRooms</strong> d’une durée de 9 mois. Celle-ci est principalement axée sur REACT.</p>
        </div>
      </section>
      <Chapter id='competences'>
        <h2 className='main-title'>Mes compétences</h2>
        <ThemeProvider theme={theme}>
          <div className="tabs">
            <div className="tab">
              <h3 className='main-title'>Nouvelles compétences</h3>
              <List className="two-cols">
                <IconListItem icon={<IconReact />}>REACT</IconListItem>
                <IconListItem icon={<IconRouter />}>REACT Router</IconListItem>
                <IconListItem icon={<IconRedux />}>REACT Redux</IconListItem>
                <IconListItem icon={<IconJest />}>Tests unitaires et fonctionnels avec Jest</IconListItem>
                <IconListItem icon={<IconApi />}>API Rest</IconListItem>
              </List>
            </div>
            <div className="tab">
              <h3 className='main-title'>Perfectionnement</h3>
              <List className="two-cols">
                <IconListItem icon={<IconHtml5 />}>HTML 5 (Grid et Flex)</IconListItem>
                <IconListItem icon={<IconCss3 />}>CSS 3 (SASS)</IconListItem>
                <IconListItem icon={<IconJs />}>JS (modules, strict mode)</IconListItem>
                <IconListItem icon={<IconAgile />}>Méthode Agile</IconListItem>
                <IconListItem icon={<IconGit />}>GIT</IconListItem>
                <IconListItem icon={<IconAlgo />}>Algorithmie</IconListItem>
              </List>
            </div>
            <div className="tab">
              <h3 className='main-title'>Compétences annexes</h3>
              <List className="two-cols">
                <IconListItem icon={<IconPhotoshop />}>Adobe Photoshop</IconListItem>
                <IconListItem icon={<IconAnimate />}>Adobe Animate</IconListItem>
                <IconListItem icon={<IconIllustrator />}>Adobe Illustrator</IconListItem>
                <IconListItem icon={<IconInkscape />}>Inkscape</IconListItem>
                <IconListItem icon={<IconEmail />}>Montage d’emails responsive</IconListItem>
                <IconListItem icon={<IconJira />}>Ticketing JIRA</IconListItem>
              </List>
            </div>
          </div>
        </ThemeProvider>
      </Chapter>
      <Chapter id='realisations'>
        <h2 className='main-title'>Mes réalisations</h2>
        <h3 className="main-title">Les projets de la formation OpenClassRooms</h3>
        <div className="projet-container">
          <div className="projet-texts">
            <h4 className="main-title">ArgentBank</h4>
            <p>Mise en œuvre de REACT et REACT REDUX.<br />
            Il s’agit d’une ébauche de site bancaire avec authentification conçu sur la stack MERN (MongoDB, Express, React, Nodejs). Les pages statiques sont fournies ainsi que la base de données et l’API REST.<br/>
            Le but et de faire une single page application en gérant les states de façon global avec REDUX et de requêter la BDD avec l’API REST.<br/>
            De plus on doit proposer de nouveaux endpoints pour l’API REST pour gérer les comptes en banques en concevant une documentation SWAGGER
            </p>
          </div>
        </div>
      </Chapter>
    </div>
  )
}

export default Accueil