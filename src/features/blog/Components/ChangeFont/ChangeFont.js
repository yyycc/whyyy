import React, { Component } from 'react';

/*
 * @name: 字体选择
 * @description: 可增大缩小、显示默认字体
 * @args: 方法：addFontSize, minusFontSize, defaultFontSize
 */

export class ChangeFont extends Component {
  static propTypes = {
  };

  render() {
    const { addFontSize, minusFontSize, defaultFontSize } = this.props.actions;
    return (
      <div className="blog-change-font">
        <ul className="blog-change-font-lists">
          <li onClick={addFontSize} className="blog-change-font-add">A+</li>
          <li onClick={minusFontSize} className="blog-change-font-minus">A-</li>
          <li onClick={defaultFontSize} className="blog-change-font-minus">A</li>
        </ul>
      </div>
    );
  }
}

export default ChangeFont;
