import portrait from '../../assets/portrait.jpg'
import mer from '../../assets/mer.png'
import face from '../../assets/face.svg'
import rocherBleu from '../../assets/rocher-bleu.svg'
import rocherRouge from '../../assets/rocher-rouge.svg'
import LineMotion from '../LineMotion';


const Banner = () => {
  return (
    <div className="banner">
      <div className='portrait'>
        <LineMotion />
        <div className="portrait-image">
          <img src={portrait} alt="" />
          {/* <img className='rocher-bleu' src={rocherBleu} alt="" />
          <img className='rocher-rouge' src={rocherRouge} alt="" />
          <img className='revealed' src={portrait} alt="" />
          <img className='face' src={face} alt="" /> */}

        </div>
      </div>
      <p>Bonjour, bienvenu<br />
      sur le portfolio de<br />
      Pierre-Yves Chassaigne,<br/>
      <strong>Intégrateur Front Web</strong></p>
    </div>
  );
};

export default Banner;