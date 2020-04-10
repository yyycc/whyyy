import Luffy from '../../../../images/index.png';
import linux from '../../../../images/index-linux.jpg';
import react from '../../../../images/react-1.png';

const images = [Luffy, linux, react];
const imageRoutes = ['luffy', 'linux', 'react'];

const imageIndex = 0;// 当前图片序号

const carousel = {
  imageRoutes,
  imageIndex,
  images,
};

export default carousel;
