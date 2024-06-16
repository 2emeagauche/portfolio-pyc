import Banner from "../../components/Banner"
import Chapter from '../../components/Chapter'

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
        <div className="tabs">
          <div className="tab">
            <h3>Nouvelles compétences</h3>
            <ul>
              <li>REACT</li>
              <li>REACT Router</li>
              <li>REACT REDUX</li>
              <li>Tests unitaires</li>
              <li>Tests fonctionnels</li>
              <li>API REST</li>
            </ul>
          </div>
          <div className="tab">
            <h3>Perfectionnement</h3>
            <ul>
              <li>HTML 5 (Grid et Flex)</li>
              <li>CSS 3 (SASS)</li>
              <li>JS (modules, strict mode)</li>
              <li>Méthode Agile</li>
              <li>GIT</li>
              <li>Algorithmie</li>
            </ul>
          </div>
          <div className="tab">
            <h3>Compétences annexes</h3>
            <ul>
              <li>Adobe Photoshop</li>
              <li>Adobe Animate</li>
              <li>Adobe Illustrator</li>
              <li>Inkscape</li>
              <li>Montage d’emails responsive</li>
              <li>Ticketing JIRA</li>
            </ul>
          </div>
        </div>
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