import Luffy from '../../../../images/index.png';
import linux from '../../../../images/index-linux.jpg';
import javaScript from '../../../../images/index-js.png';

const images = [Luffy, linux, javaScript];
const imageRoutes = ['luffy', 'linux', 'javaScript'];

const imageIndex = 0;// 当前图片序号

const carousel = {
  imageRoutes,
  imageIndex,
  images,
};

export default carousel;
