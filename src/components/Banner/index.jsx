import portrait from '../../assets/portrait-start.webp'
import mer from '../../assets/mer.png'
import face from '../../assets/face.png'
import rocherBleu from '../../assets/rocher-bleu.png'
import rocherRouge from '../../assets/rocher-rouge.png'
import LineBanner from '../LineBanner'
import { useEffect } from 'react'
import { easeInOut, useAnimate, useInView } from 'framer-motion'

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
            delay:0.2,
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
            at:"-1",
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
            at:"-2",
            ease: easeInOut,
          }
        ],
        [
          ".revealed img",
          {
            opacity:isInView?[0, 1]:[1, 0]
          },
          {
            duration:0.3,
            at:"-0.5",
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
            at:"-0.5",
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
            <div className='revealed'>
              <img src={portrait} style={{opacity:0}} alt="" />
            </div>
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