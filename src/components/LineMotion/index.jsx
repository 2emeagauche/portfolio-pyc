import {motion} from 'framer-motion'
import { useViewport } from "react-viewport-hooks";

const icon = {
  hidden: {
    opacity: 1,
    pathLength: 0,
    // pathOffset: 1,
    fill: "none"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    // pathOffset: 0,
    fill: "none"
  }
};

const LineMotion = () => {
  const {vw} = useViewport()

  let lineVariant = 'textonright';
  if (vw < 640) {
    lineVariant = 'textonbottom';
  }

  return (
    <div className="">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={lineVariant === 'textonright' ? '0 0 310 157' : '0 0 310 133'}
        className="portrait-line"
      >
        <motion.path
          d={lineVariant === 'textonright' ?
            'm 309.502,0.354965 -9.888,9.880235 9.888,9.8803 V 155.982 c -91.464,-0.029 -182.928,-0.013 -274.3916,-0.013 -19.1135,0 -34.608008,-15.482 -34.608008,-34.581 V 58.1545' :
            'm 0.5,0 v 87.234373 c 0,19.098977 15.495894,34.579167 34.609375,34.580077 l 119.958985,0.0117 10.29883,10.29883 10.29883,-10.29883 133.83398,0.002 V 9.960937"'}
          variants={icon}
          stroke="#E63946"
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 3, ease: "easeInOut", delay: 0.5 }
          }}
        />
      </motion.svg>
    </div>
  )
}

export default LineMotion