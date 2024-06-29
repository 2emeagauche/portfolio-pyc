import portrait from '../../assets/portrait-start.png'
import mer from '../../assets/mer.png'
import face from '../../assets/face.svg'
import rocherBleu from '../../assets/rocher-bleu.svg'
import rocherRouge from '../../assets/rocher-rouge.svg'
import LineBanner from '../LineBanner'
import { useEffect } from 'react'
import { easeOut, easeInOut, useAnimate, useInView } from 'framer-motion'

const useBannerVisualAnimation = () => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    animate(
      [
        [
          "path",
          {
            pathLength:isInView?[0,1]:[1,0]
          },
          {
            duration:2,
            ease: easeInOut,
          }
        ],
        [
          ".rocher-bleu",
          {
            x:isInView?["15%", "0%"]:["0%", "15%"]
          },
          {
            duration:2,
            at:"-2",
            ease: easeInOut,
          }
        ],
        [
          ".rocher-rouge",
          {
            x:isInView?["-10%", "0%"]:["0%", "-10%"],
            scale:isInView?[1.2, 1]:[1, 1.2]
          },
          {
            duration:2,
            at:"-1.95",
            ease: easeInOut,
          }
        ],
        [
          ".face",
          {
            scale:isInView?[1.02, 1]:[1, 1.02]
          },
          {
            duration:1.5,
            at:"-1.7",
            ease: easeInOut,
          }
        ],
        [
          ".face",
          {
            opacity:isInView?[1, 0]:[0, 1],
          },
          {
            duration:0.8,
            at:"-1.2",
            ease: easeInOut,
          }
        ]
      ]
    )
  }, [isInView])

  return scope
}

const Banner = () => {
  const scope = useBannerVisualAnimation()
  
  return (
    <div className="banner">
      <div className='portrait' ref={scope}>
        <LineBanner />
        <div className="portrait-image">
          {/* <MotionConfig
            transition={{
              duration:1.5,
              delay:1.8,
              ease:easeOut
            }}
          > */}
            <img src={mer} alt="" />
            <div className='rocher-bleu'>
              <img src={rocherBleu} alt="" />
            </div>
            <div
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
            </div>
            <img className='revealed' src={portrait} alt="" />
            <div
              className='face'
              initial={{
                opacity:1
              }}
              animate={{
                opacity:0
              }}
              >
              <img src={face} alt="" />
            </div>
          {/* </MotionConfig> */}

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