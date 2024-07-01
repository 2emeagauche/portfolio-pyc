import divider from '../../assets/chapter-divider.svg'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const ChapterDivider = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '0 0']
  })
  const paddingProgress = useTransform(scrollYProgress, [0, 1], ['2.5rem', '0rem'])

  return (
    
    <motion.div
      ref={ref}
      className='chapter-divider'
      style={{
        paddingTop: paddingProgress,
        paddingBottom: paddingProgress
      }}
    >
      <img src={divider} alt="" aria-hidden='true' />
    </motion.div>
  )
}

export default ChapterDivider