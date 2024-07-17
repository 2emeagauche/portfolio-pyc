import Banner from "../../components/Banner"
import ChapterDivider from "../../components/ChapterDivider"
import ChapterSection from '../../components/ChapterSection'
import Projet from "../../components/Projet"
import CardMotion from "../../components/CardMotion"
import projets from "../../datas/projets.json"

import assetArgentBank from '../../assets/argentbank.jpg'
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

  const projetMedias = {
    "ArgentBank":assetArgentBank,
    "Kasa":assetKasa,
    "724Events":asset724Events,
    "NinaCarducci":assetNinaCarducci
}

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
        {
          projets.map((projet) => 
            <CardMotion key={projet.id}>
              <Projet
                projetTitle={projet.title}
                projetResume={projet.exerpt}
                projetGithubHref={projet.gitHubRepo}
                projetDemoHref={projet.projectUrl}
                projetVisuel={projetMedias[projet.media]}
              >
                {projet.description}
              </Projet>
            </CardMotion>
          )
        }
      </ChapterSection>
    </div>
  )
}

export default Accueil