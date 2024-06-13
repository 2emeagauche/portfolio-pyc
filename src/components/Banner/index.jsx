import portrait from '../../assets/portrait.jpg'
import portraitLine from '../../assets/portrait-line.svg'

const Banner = () => {
  return (
    <div className="banner">
      <div className='portrait'>
        <img src={portraitLine} alt="" className='portrait-line' />
        <img src={portrait} alt="" className='portrait-image' />
      </div>
      <p>Bonjour,<br />
      je suis Pierre-Yves Chassaigne,<br />
      <strong>Intégrateur Front Web</strong><br />
      Bienvenu sur mon Portfolio</p>
    </div>
  );
};

export default Banner;