import React, { Component } from 'react';

/*
 * @name: 图片
 * @description: 自动轮播图片
 * @arg1: tests   [{route:'', content: ''}] {跳转路由,公告内容}
 * @arg2: animate: 动画class
 */

export class CarouselIndex extends Component {

  componentDidMount() {
    this.interval = setInterval((props) => {
      props.actions.autoChangeImages(props.blog.images.length);
    }, 5000, this.props);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  mount() {
    clearInterval(this.interval);
  }

  unMount() {
    this.interval = setInterval((props) => {
      props.actions.autoChangeImages(props.blog.images.length);
    }, 5000, this.props);
  }

  render() {
    const jump = (history, route) => history.push('/blog/' + route);
    const { imageIndex, images, imageRoutes } = this.props.blog;
    const { changeImage } = this.props.actions;
    const src = images[imageIndex];
    let translate = 'translate3d(-' + 100 * imageIndex / images.length + '%, 0px, 0px)'; // 每次移动一张图片宽度的距离
    let width = 100 * images.length;  // 几张图片就多少100%宽度
    return (
      <div className="blog-carousel-index">
        <div className="blog-carousel-index-images">
          <div style={{ transform: `${translate}`, width: `${width}%` }}
               className="blog-carousel-index-images-overflow">
            {images.map((ele, i) => {
              return <img key={i} className="blog-carousel-index-img" src={images[i]} alt='pictures'
                          onClick={() => jump(this.props.history, imageRoutes[imageIndex])}
                          onMouseOver={() => this.mount()}
                          onMouseOut={() => this.unMount()}/>;
            })}
          </div>
        </div>
        <div className="blog-carousel-index-other">
          <ul className="blog-carousel-index-dots">
            {images.map((ele, index) => {
              const className = ele === src ? 'blog-carousel-index-dots-active' : '';
              return <li key={index} className={className}>
                <button onMouseOver={() => changeImage(index)}>{index}</button>
              </li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default CarouselIndex;
