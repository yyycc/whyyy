import React, { Component } from 'react';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

export class CssA extends Component {
  static propTypes = {};

  render() {
    const { div, p, flexCenter, flexColumn } = code;
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
      </div>
    );
  }
}

export default CssA;
