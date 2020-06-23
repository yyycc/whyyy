import React, { Component } from 'react';
import Highlight from 'react-highlight';

export class PreFormat extends Component {
  static propTypes = {};

  /**
   * @name: 代码
   * @description: 显示代码(灰底)
   * @arg1：content  代码内容
   */

  render() {
    const { content, className } = this.props;
    return (
      <div className="blog-pre-format">
        <Highlight className={className}>{content}</Highlight>
      </div>
    );
  }
}

export default PreFormat;
