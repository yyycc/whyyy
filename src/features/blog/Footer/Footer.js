import React, { Component } from 'react';

export default class Footer extends Component {
  static propTypes = {

  };

  /*
   * @name: 页脚
   * @description: 版权
   * @description: 当未内容超出可视页面，添加class:blog-footer-fix,将页脚固定
   */
  render() {
    return (
      <footer className="blog-footer">
        Copyright © 2020 yyycc
      </footer>
    );
  }
}
