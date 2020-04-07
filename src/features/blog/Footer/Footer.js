import React, { Component } from 'react';

/*
 * @name: 页脚
 * @description: 版权
 */

export default class Footer extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <footer className="blog-footer">
          Copyright © 2020 yyycc
        </footer>
      </div>
    );
  }
}
