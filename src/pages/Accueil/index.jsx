import Banner from "../../components/Banner"
import ChapterDivider from "../../components/ChapterDivider"
import ChapterSection from '../../components/ChapterSection'
import Projet from "../../components/Projet"
import CardMotion from "../../components/CardMotion"

import assetArgentbank from '../../assets/argentbank.jpg'
import assetKasa from '../../assets/kasa.jpg'
import asset724Events from '../../assets/724events.jpg'
import assetNinaCarducci from '../../assets/nina-carducci.jpg'
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

const Accueil = () => {

  return (
    <div className="container" id="top">
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
      <ChapterDivider />
      <ChapterSection classValue='chapter' id='competences'>
        <h2 className='main-title'>Mes compétences</h2>
          <CardMotion>
            <h3 className='main-title'>Nouvelles compétences</h3>
            <div className="card">
              <ul className="two-cols">
                <li><span className='icon-skill'><IconReact /></span><span className='text-skill'>REACT</span></li>
                <li><span className='icon-skill'><IconRouter /></span><span className='text-skill'>REACT Router</span></li>
                <li><span className='icon-skill'><IconRedux /></span><span className='text-skill'>REACT Redux</span></li>
                <li><span className='icon-skill'><IconJest /></span><span className='text-skill'>Tests unitaires et fonctionnels avec Jest</span></li>
                <li><span className='icon-skill'><IconApi /></span><span className='text-skill'>API Rest</span></li>
              </ul>
            </div>
          </CardMotion>
          <CardMotion>
            <h3 className='main-title'>Perfectionnement</h3>
            <div className="card">
              <ul className="two-cols">
                <li><span className='icon-skill'><IconHtml5 /></span><span className='text-skill'>HTML 5 (Grid et Flex)</span></li>
                <li><span className='icon-skill'><IconCss3 /></span><span className='text-skill'>CSS 3 (SASS)</span></li>
                <li><span className='icon-skill'><IconJs /></span><span className='text-skill'>JS (modules, strict mode)</span></li>
                <li><span className='icon-skill'><IconAgile /></span><span className='text-skill'>Méthode Agile</span></li>
                <li><span className='icon-skill'><IconGit /></span><span className='text-skill'>GIT</span></li>
                <li><span className='icon-skill'><IconAlgo /></span><span className='text-skill'>Algorithmie</span></li>
              </ul>
            </div>
          </CardMotion>
          <CardMotion>
            <h3 className='main-title'>Compétences annexes</h3>
            <div className="card">
              <ul className="two-cols">
                <li><span className='icon-skill'><IconPhotoshop /></span><span className='text-skill'>Adobe Photoshop</span></li>
                <li><span className='icon-skill'><IconAnimate /></span><span className='text-skill'>Adobe Animate</span></li>
                <li><span className='icon-skill'><IconIllustrator /></span><span className='text-skill'>Adobe Illustrator</span></li>
                <li><span className='icon-skill'><IconInkscape /></span><span className='text-skill'>Inkscape</span></li>
                <li><span className='icon-skill'><IconEmail /></span><span className='text-skill'>Montage d’emails responsive</span></li>
                <li><span className='icon-skill'><IconJira /></span><span className='text-skill'>Ticketing JIRA</span></li>
              </ul>
            </div>
          </CardMotion>
      </ChapterSection>
      <ChapterDivider />
      <ChapterSection classValue='chapter' id='realisations'>
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
            projetResume="Débugger le site d’une agence d’événementiels"
            projetGithubHref='https://github.com/2emeagauche/OCR_Debuggez-une-application-React.JS_P10'
            projetDemoHref=''
            projetVisuel={asset724Events}
            >
            <p>Le site d’une agence d’événementiels comporte plusieurs bugs. Il s’agit d’établir un cahier de recette afin de résoudre tous les bugs. On conçoit des tests unitaires et fonctionnels avec JEST et on utilise les outils de développement des navigateurs Firefox et Chrome afin d’identifier et résoudre les bugs.</p>
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
                La mise en place des bonnes pratiques pour répondre à l’accessibilité. Notamment avec les attributs aria.
              </li>
              <li>
                L’ajout de Rich Snippet pour améliorer le référencement par les moteurs de recherche.
              </li>
            </ul>
          </Projet>
        </CardMotion>
      </ChapterSection>
    </div>
  )
}

export default Accueil