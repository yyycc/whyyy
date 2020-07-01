import React, { Component } from 'react';
import Highlight from 'react-highlight';
import ReactClipboard from 'react-clipboardjs-copy';
import PropTypes from 'prop-types';

export class PreFormat extends Component {
  static propTypes = {
    content: PropTypes.object.isRequired, // 加了这个，当你调用的时候，这个属性会自己蹦出来的
  };

  /**
   * @name: 代码
   * @description: 显示代码(灰底)
   * @update: 限定最大高度，超出给滚动条
   * @update: 增加复制按钮
   * @arg1：content  代码内容
   */

  render() {
    const { content, className } = this.props;
    return (
      <div className="blog-pre-format">
        {/*<button onClick={(ref) => copy(ref)}>复制</button>*/}
        <ReactClipboard text={content}>
          <span className="blog-pre-format-copy" title="复制" type="button"/>
        </ReactClipboard>
        <Highlight className={className}>{content}</Highlight>

      </div>
    );
  }
}

export default PreFormat;
