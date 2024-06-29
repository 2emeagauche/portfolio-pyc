import portrait from '../../assets/portrait-start.png'
import mer from '../../assets/mer.png'
import face from '../../assets/face.svg'
import rocherBleu from '../../assets/rocher-bleu.svg'
import rocherRouge from '../../assets/rocher-rouge.svg'
import LineMotion from '../LineMotion';
import { easeOut, motion, MotionConfig, stagger } from 'framer-motion'


const Banner = () => {
  return (
    <div className="banner">
      <div className='portrait'>
        <LineMotion />
        <div className="portrait-image">
          <MotionConfig
            transition={{
              duration:1.5,
              delay:1.8,
              ease:easeOut
            }}
          >
            <img src={mer} alt="" />
            <motion.div
              className='rocher-bleu'
              initial={{
                x: '5%'
              }}
              animate={{
                x: '0%'
              }}
              >
              <img src={rocherBleu} alt="" />
            </motion.div>
            <motion.div
              className='rocher-rouge'
              initial={{
                x: '-10%',
                scale:1.2
              }}
              animate={{
                x: '0%',
                scale:1
              }}
              >
              <img src={rocherRouge} alt="" />
            </motion.div>
            <img className='revealed' src={portrait} alt="" />
            <motion.div
              className='face'
              initial={{
                opacity:1
              }}
              animate={{
                opacity:0
              }}
              >
              <img src={face} alt="" />
            </motion.div>
          </MotionConfig>

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