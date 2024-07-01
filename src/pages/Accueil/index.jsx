import { ThemeProvider, createTheme } from '@mui/material/styles';
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

import Banner from "../../components/Banner"
import ChapterSection from '../../components/ChapterSection'
import Projet from "../../components/Projet"
import CardMotion from "../../components/CardMotion"

import assetArgentbank from '../../assets/argentbank.png'
import assetKasa from '../../assets/kasa.png'
import asset724Events from '../../assets/724events.png'
import assetNinaCarducci from '../../assets/nina-carducci.png'
import divider from '../../assets/chapter-divider.svg'
import IconReact from '../../assets/Icons/IconReact'
import IconRouter from '../../assets/Icons/IconRouter'
import IconRedux from '../../assets/Icons/IconRedux'
import IconJest from '../../assets/Icons/IconJest'
import IconApi from '../../assets/Icons/IconApi'
import IconAgile from '../../assets/Icons/IconAgile'
import IconAlgo from '../../assets/Icons/IconAlgo'
import IconCss3 from '../../assets/Icons/IconCss3'
import IconGit from '../../assets/Icons/IconGit'
import IconHtml5 from '../../assets/Icons/IconHtml5'
import IconJs from '../../assets/Icons/IconJs'
import IconAnimate from '../../assets/Icons/IconAnimate'
import IconIllustrator from '../../assets/Icons/IconIllustrator'
import IconInkscape from '../../assets/Icons/IconInkscape'
import IconPhotoshop from '../../assets/Icons/IconPhotoshop'
import IconEmail from '../../assets/Icons/IconEmail'
import IconJira from '../../assets/Icons/IconJira'

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
      <section className='presentation-block' id='presentation'>
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
      <div className='chapter-divider'>
        <img src={divider} alt="" aria-hidden='true' />
      </div>
      <ChapterSection classValue='chapter' id='competences'>
        <h2 className='main-title'>Mes compétences</h2>
        <ThemeProvider theme={theme}>
          <CardMotion>
            <h3 className='main-title'>Nouvelles compétences</h3>
            <div className="card">
              <List className="two-cols">
                <IconListItem icon={<IconReact />}>REACT</IconListItem>
                <IconListItem icon={<IconRouter />}>REACT Router</IconListItem>
                <IconListItem icon={<IconRedux />}>REACT Redux</IconListItem>
                <IconListItem icon={<IconJest />}>Tests unitaires et fonctionnels avec Jest</IconListItem>
                <IconListItem icon={<IconApi />}>API Rest</IconListItem>
              </List>
            </div>
          </CardMotion>
          <CardMotion>
            <h3 className='main-title'>Perfectionnement</h3>
            <div className="card">
              <List className="two-cols">
                <IconListItem icon={<IconHtml5 />}>HTML 5 (Grid et Flex)</IconListItem>
                <IconListItem icon={<IconCss3 />}>CSS 3 (SASS)</IconListItem>
                <IconListItem icon={<IconJs />}>JS (modules, strict mode)</IconListItem>
                <IconListItem icon={<IconAgile />}>Méthode Agile</IconListItem>
                <IconListItem icon={<IconGit />}>GIT</IconListItem>
                <IconListItem icon={<IconAlgo />}>Algorithmie</IconListItem>
              </List>
            </div>
          </CardMotion>
          <CardMotion>
            <h3 className='main-title'>Compétences annexes</h3>
            <div className="card">
              <List className="two-cols">
                <IconListItem icon={<IconPhotoshop />}>Adobe Photoshop</IconListItem>
                <IconListItem icon={<IconAnimate />}>Adobe Animate</IconListItem>
                <IconListItem icon={<IconIllustrator />}>Adobe Illustrator</IconListItem>
                <IconListItem icon={<IconInkscape />}>Inkscape</IconListItem>
                <IconListItem icon={<IconEmail />}>Montage d’emails responsive</IconListItem>
                <IconListItem icon={<IconJira />}>Ticketing JIRA</IconListItem>
              </List>
            </div>
          </CardMotion>
        </ThemeProvider>
      </ChapterSection>
      <div className='chapter-divider'>
        <img src={divider} alt="" aria-hidden='true' />
      </div>
      <ChapterSection
        classValue='chapter'
        id='realisations'
      >
        <h2 className='main-title'>Mes réalisations</h2>
        <h3 className="main-title" id='ocr'>Les projets de la formation OpenClassRooms</h3>
        <CardMotion>
          <Projet
            projetTitle='ArgentBank'
            projetResume='Projet REACT et REACT REDUX dans une stack MERN'
            projetGithubHref='https://github.com/2emeagauche/OCR_ArgentBank_ReactRedux_P11/tree/main/argent-bank'
            projetDemoHref=''
            projetVisuel={assetArgentbank}
            >
            <p>Mise en œuvre de REACT et REACT REDUX.<br/>
            Il s’agit d’une ébauche de site bancaire avec authentification conçu sur la stack MERN (MongoDB, Express, React, Nodejs).<br/>
            Les pages statiques sont fournies ainsi que la base de données et l’API REST.<br/>
            Le but et de faire une single page application en gérant les states de façon global avec REDUX et de requêter la BDD avec l’API REST.<br/>
            De plus on doit proposer de nouveaux endpoints pour l’API REST pour gérer les comptes en banques en concevant une documentation SWAGGER.
            </p>
          </Projet>
        </CardMotion>
        <CardMotion>
          <Projet
            projetTitle='KASA'
            projetResume='Projet en REACT et données json'
            projetGithubHref='https://github.com/2emeagauche/OCR_KASA_P8'
            projetDemoHref='https://2emeagauche.github.io/OCR_KASA_P8'
            projetVisuel={assetKasa}
            >
            <p>Projet REACT.
            Il s’agit d’un mini site de location de vacances comportant une page d’accueil une page « à propos », les pages de détails des logements ainsi qu’une page d’erreur.<br/>
            On doit concevoir une single page application avec REACT et REACT Router, concevoir les styles CSS et le responsive d’après les maquettes Figma. Les données proviennent de l’exploitation d’un fichier JSON.
            </p>
          </Projet>
        </CardMotion>
        <CardMotion>
          <Projet
            projetTitle='724 Events'
            projetResume='Il s’agit de débugger un site en concevant et en utilisant les tests unitaires et fonctionnels avec JEST'
            projetGithubHref='https://github.com/2emeagauche/OCR_Debuggez-une-application-React.JS_P10'
            projetDemoHref=''
            projetVisuel={asset724Events}
            >
          </Projet>
        </CardMotion>
        <CardMotion>
          <Projet
            projetTitle='Nina Carducci'
            projetResume='Optimisation SEO'
            projetGithubHref='https://github.com/2emeagauche/OCR_ArgentBank_ReactRedux_P11/tree/main/argent-bank'
            projetDemoHref='https://2emeagauche.github.io/OCR_ninacarducci_P9.github.io/'
            projetVisuel={assetNinaCarducci}
          >
            <p>Optimisation SEO de la page d’un portfolio de photographe. Le score Lighthouse initiale est de 43. Il a été amélioré à 91 par</p>
            <ul>
              <li>
                L’optimisation des images, du CSS et du Javascript
              </li>
              <li>
                L’accessibilité
              </li>
              <li>
                L’ajout de Rich Snippet
              </li>
            </ul>
          </Projet>
        </CardMotion>
      </ChapterSection>
    </div>
  )
}

export default Accueil