import { useRef } from 'react'
import { motion, useScroll, useTransform, easeInOut } from "framer-motion";

const CardMotion = ({children}) => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1], { ease: easeInOut })
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        marginBottom: '2.7rem',
        position: 'relative',
      }}
    >
      {children}
    </motion.div>
  )
}

export default CardMotion