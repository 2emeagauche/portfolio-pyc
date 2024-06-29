import { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";

const ChapterSection = ({classValue, id, children}) => {
  let offset1 = id === 'competences' ? ['0 0', '0.7 0'] : ['0 1', '0.7 1']
  let paddingBottomParams = id === 'competences' ? ['0rem', '2rem'] : ['0rem', '0rem']
  let paddingTopParams = id === 'competences' ? ['0rem', '0rem'] : ['0rem', '2rem']
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset1
  })
  const paddingBottomProgress = useTransform(scrollYProgress, [0, 1], paddingBottomParams)
  const paddingTopProgress = useTransform(scrollYProgress, [0, 1], paddingTopParams)

  return (
    <motion.section
      className={classValue}
      id={id}
      ref={ref}
      style={{
        paddingTop: paddingTopProgress,
        paddingBottom: paddingBottomProgress
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