import React, { Component } from 'react';
import img from '../../../images/YY.png';

export default class InlineBlock extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="css-inline-block">
        <div className="css-inline-block-auto">
          <p>他们都不会自动换行，有自己的内在尺寸</p>
          <button>button</button>
          <input placeholder='input'/>
          <select>
            <option value="select1">1</option>
          </select>
          <img alt='img' src={img}/>
          <textarea placeholder='textarea'/>
        </div>
        <br/><br/><br/>
        <div className="css-inline-block-set">
          <p>他们都可以设置宽高(高度不同的话，可以设置vertical-align: top使顶部对齐)</p>
          <button>button</button>
          <input placeholder='input'/>
          <select>
            <option value="select1">1</option>
          </select>
          <img alt='img' src={img}/>
          <textarea placeholder='textarea'/>
        </div>
        <br/><br/>
        <p>vertical-align(行内元素或表格元素的垂直对齐方式)默认值baseLine，表示基线与父元素的基线对其，这边textarea跟其他元素的表现就不一样。</p>
      </div>
    );
  }
}
