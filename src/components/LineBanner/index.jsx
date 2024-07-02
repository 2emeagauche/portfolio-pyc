import { useViewport } from "react-viewport-hooks";


const LineBanner = () => {
  const {vw} = useViewport()

  let lineVariant = 'textonright';
  if (vw < 640) {
    lineVariant = 'textonbottom';
  }

  return (
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={lineVariant === 'textonright' ? '0 0 310 157' : '0 0 310 133'}
        className="portrait-line"
      >
        <path
          d={lineVariant === 'textonright' ?
            'm 309.502,0.354965 -9.888,9.880235 9.888,9.8803 V 155.982 c -91.464,-0.029 -182.928,-0.013 -274.3916,-0.013 -19.1135,0 -34.608008,-15.482 -34.608008,-34.581 V 58.1545'
            :
            'm0.5 0v87.234c0 19.099 15.496 34.579 34.609 34.58l109.96 0.0117 10.299 10.299 10.299-10.299 143.83 2e-3v-111.87'}
          fill="none"
          stroke="#E63946"
        />
      </svg>
    </div>
  )
}

export default LineBanner