import React, { Component } from 'react';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

export class CssA extends Component {
  static propTypes = {};

  render() {
    const { div, p, flexCenter, flexColumn, codes } = code;
    return (
      <div className="blog-css-a">
        <p>今天画blog的时候遇见了一个小问题，记录一下。。。</p>

        <h2 id="css-1-1">1. 问题</h2>
        <p>img标签如何在父div中居中显示</p>

        <h2 id="css-1-2">2. 解决办法一</h2>
        <PreFormat content={div}/>
        <p>这就轻松解决了呀。。。还要啥plan B呀。</p>

        <h2 id="css-1-3">3. 解决办法二</h2>
        <p>利用p标签</p>
        <PreFormat content={p}/>
        <p>这种方法真的很有意思</p>

        <h2 id="css-1-4">4. 解决办法三</h2>
        <p>flex布局</p>

        <PreFormat content={flexCenter}/>
        <p>或者</p>
        <PreFormat content={flexColumn}/>

        <a href='/css/center' target="_blank" rel="noopener norefferrer">看具体效果请戳这里<i className='fa fa-arrow-left'> </i></a>

        <h2 id="css-1-5">5. 居中</h2>
        <p>这边的居中都是在父div上居中，而不是在可视屏上居中，比如你给父div一个宽度就会发现图片位置会改变</p>
        <p>如果你要实现img在可视屏上居中，那么就得先让父div居中，一般</p>
        <PreFormat content={codes[4]}/>
        <p>就可以实现</p>

      </div>
    );
  }
}

export default CssA;
