import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const ChapterSection = ({classValue, id, children}) => {
  let offset1 = id === 'competences' ? ['0.1 0', '0.7 0'] : ['0 1', '0.5 1']
  let transformParams = id === 'competences' ? [40, 0] : [-40, 0]
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset1
  })
  const translateProgress = useTransform(scrollYProgress, [0, 1], transformParams)

  return (
    <motion.section
      className={classValue}
      id={id}
      ref={ref}
      style={{
        translateY: translateProgress
      }}
    >
      <div className="chapter-block">
        <span className="top-indent" aria-hidden="true"></span>
        <div className="chapter-content">
          {children}
        </div>
        <span className="bottom-indent" aria-hidden="true"></span>
      </div>
    </motion.section>
  )
}

export default ChapterSection