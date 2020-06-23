import React, { Component } from 'react';

/*
 * @name: 页面定位
 * @description: 滑至顶部/底部
 */

export default class Scroll extends Component {

  render() {
    const scroll = top => {
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    };
    return (
      <div className="blog-scroll">
        <a className="scroll-top" onClick={scroll(0)}>
          <i className="fa fa-angle-up"/>
        </a>
        <a className="scroll-bottom" onClick={scroll(99999)}>
          <i className="fa fa-angle-down"/>
        </a>
      </div>
    );
  }
}
