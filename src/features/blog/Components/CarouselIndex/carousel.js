import Luffy from '../../../../images/carousel/carousel-luffy.png';
import linux from '../../../../images/carousel/carousel-linux.png';
import react from '../../../../images/carousel/carousel-react.png';
import css from '../../../../images/carousel/carousel-css.png';

const images = [Luffy, linux, react, css];
const imageRoutes = ['luffy', 'articles/linux', 'articles/react', 'articles/css'];

const imageIndex = 0;// 当前图片序号

const carousel = {
  imageRoutes,
  imageIndex,
  images,
};

export default carousel;
