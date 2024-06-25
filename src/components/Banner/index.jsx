import portrait from '../../assets/portrait.jpg'
// import portraitLine from '../../assets/portrait-line.svg'
import LineMotion from '../LineMotion';


const Banner = () => {
  return (
    <div className="banner">
      <div className='portrait'>
        <LineMotion />
        <img src={portrait} alt="" className='portrait-image' />
      </div>
      <p>Bonjour, bienvenu<br />
      sur le portfolio de<br />
      Pierre-Yves Chassaigne,<br/>
      <strong>Intégrateur Front Web</strong></p>
    </div>
  );
};

export default Banner;