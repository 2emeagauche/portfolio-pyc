import {motion} from 'framer-motion'

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
  return (
    <div className="">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 157"
        className="portrait-line"
      >
        <motion.path
          d="m 309.502,0.354965 -9.888,9.880235 9.888,9.8803 V 155.982 c -91.464,-0.029 -182.928,-0.013 -274.3916,-0.013 -19.1135,0 -34.608008,-15.482 -34.608008,-34.581 V 58.1545"
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