import Banner from "../../components/Banner"
import ChapterDivider from "../../components/ChapterDivider"
import ChapterSection from '../../components/ChapterSection'
import Projet from "../../components/Projet"
import CardMotion from "../../components/CardMotion"
import projets from "../../datas/projets.json"
import skillsFamily from "../../datas/skills.json"

import assetArgentBank from '../../assets/argentbank.jpg'
import assetKasa from '../../assets/kasa.jpg'
import asset724Events from '../../assets/724events.jpg'
import assetNinaCarducci from '../../assets/nina-carducci.jpg'

import iconReact from '../../assets/Icons/iconReact.png'
import iconRouter from '../../assets/Icons/iconRouter.png'
import iconRedux from '../../assets/Icons/iconRedux.png'
import iconJest from '../../assets/Icons/iconJest.png'
import iconApi from '../../assets/Icons/iconApi.png'
import iconAgile from '../../assets/Icons/iconAgile.png'
import iconAlgo from '../../assets/Icons/iconAlgo.png'
import iconCss3 from '../../assets/Icons/iconCss3.png'
import iconGit from '../../assets/Icons/iconGit.png'
import iconHtml5 from '../../assets/Icons/iconHtml5.png'
import iconJs from '../../assets/Icons/iconJs.png'
import iconAnimate from '../../assets/Icons/iconAnimate.png'
import iconIllustrator from '../../assets/Icons/iconIllustrator.png'
import iconInkscape from '../../assets/Icons/iconInkscape.png'
import iconPhotoshop from '../../assets/Icons/iconPhotoshop.png'
import iconEmail from '../../assets/Icons/iconEmail.png'
import iconJira from '../../assets/Icons/iconJira.png'

const Accueil = () => {

  const projetMedias = {
    "ArgentBank":assetArgentBank,
    "Kasa":assetKasa,
    "724Events":asset724Events,
    "NinaCarducci":assetNinaCarducci
  }

  const skillIcons = {
    "iconReact": iconReact,
    "iconRouter": iconRouter,
    "iconRedux": iconRedux,
    "iconJest": iconJest,
    "iconApi": iconApi,
    "iconAgile": iconAgile,
    "iconAlgo": iconAlgo,
    "iconCss3": iconCss3,
    "iconGit": iconGit,
    "iconHtml5": iconHtml5,
    "iconJs": iconJs,
    "iconAnimate": iconAnimate,
    "iconIllustrator": iconIllustrator,
    "iconInkscape": iconInkscape,
    "iconPhotoshop": iconPhotoshop,
    "iconEmail": iconEmail,
    "iconJira": iconJira
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
          {
            skillsFamily.map((skills) =>
              <CardMotion key={skills.id}>
                <h3 className='main-title'>{skills.title}</h3>
                <div className="card">
                  <ul className="two-cols">
                    {
                      skills.list.map((skill) =>
                        <li key={skill.icon}><span className='icon-skill'><img src={skillIcons[`icon${skill.icon}`]} alt={skill.text} /></span><span className='text-skill'>{skill.text}</span></li>
                      )
                    }
                  </ul>
                </div>
              </CardMotion>
            )
          }
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