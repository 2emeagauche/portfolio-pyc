import IconReact from '../../assets/Icons/IconReact'
import IconRouter from '../../assets/Icons/IconRouter'
import IconRedux from '../../assets/Icons/IconRedux'
import IconJest from '../../assets/Icons/IconJest'
import IconApi from '../../assets/Icons/IconApi'
import IconAgile from '../../assets/Icons/IconAgile'
import IconAlgo from '../../assets/Icons/IconAlgo'
import IconCss3 from '../../assets/Icons/IconCss3'
import IconGit from '../../assets/Icons/IconGit'
import IconHtml5 from '../../assets/Icons/IconHtml5'
import IconJs from '../../assets/Icons/IconJs'
import IconAnimate from '../../assets/Icons/IconAnimate'
import IconIllustrator from '../../assets/Icons/IconIllustrator'
import IconInkscape from '../../assets/Icons/IconInkscape'
import IconPhotoshop from '../../assets/Icons/IconPhotoshop'
import IconEmail from '../../assets/Icons/IconEmail'
import IconJira from '../../assets/Icons/IconJira'

const componentMap = {
  IconReact: IconReact,
  IconRouter: IconRouter,
  IconRedux: IconRedux,
  IconJest: IconJest,
  IconApi: IconApi,
  IconAgile: IconAgile,
  IconAlgo: IconAlgo,
  IconCss3: IconCss3,
  IconGit: IconGit,
  IconHtml5: IconHtml5,
  IconJs: IconJs,
  IconAnimate: IconAnimate,
  IconIllustrator: IconIllustrator,
  IconInkscape: IconInkscape,
  IconPhotoshop: IconPhotoshop,
  IconEmail: IconEmail,
  IconJira: IconJira,
};

const DynamicComponentRenderer = ({ componentName, ...props }) => {
  const ComponentToRender = componentMap[componentName];

  if (!ComponentToRender) {
    return <div>Component not found</div>;
  }

  return <ComponentToRender {...props} />;
};

export default DynamicComponentRenderer;
