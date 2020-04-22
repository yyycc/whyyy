import React, { Component } from 'react';

/*
 * @name: 图片
 * @description: 自动轮播图片
 * @arg1: tests   [{route:'', content: ''}] {跳转路由,公告内容}
 * @arg2: animate: 动画class
 */

export class CarouselIndex extends Component {
  static propTypes = {};

  jump(e, route) {
    e.props.history.push('/blog/' + route);
  }

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
    const { imageIndex, images, imageRoutes } = this.props.blog;
    const src = images[imageIndex];
    let translate = 'translate3d(-' + 800 * imageIndex + 'px, 0px, 0px)';
    let width = 800 * images.length;
    const { changeImage } = this.props.actions;
    return (
      <div className="blog-carousel-index">
        <div className="blog-carousel-index-images">
          <div style={{ transform: `${translate}`, width: `${width}px` }}
               className="blog-carousel-index-images-overflow">
            {images.map((ele, i) => {
              return <img key={i} className="blog-carousel-index-img" src={images[i]} alt='pictures'
                          onClick={() => this.jump(this.props, imageRoutes[imageIndex])}
                          onMouseOver={() => this.mount()}
                          onMouseOut={() => this.unMount()}/>;
            })}
          </div>
        </div>
        <ul className="blog-carousel-index-dots">
          {images.map((ele, index) => {
            const className = ele === src ? 'blog-carousel-index-dots-active' : '';
            return <li key={index} className={className}>
              <button onMouseOver={() => changeImage(index)}>{index}</button>
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default CarouselIndex;
