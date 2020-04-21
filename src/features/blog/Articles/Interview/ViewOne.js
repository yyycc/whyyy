import React, { Component } from 'react';

export default class ViewOne extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="blog-view-one">
        <h2 id="css-1-1">1. link和@import的区别</h2>
        <p>link和@import主要都是为了引入css</p>
        <h3 id="css-1-1-1">1.1. 来源</h3>
        <p>link是html提供的标签，除了加载css还可以定义RSS(?)，定义ref链接属性等。</p>
        <p>而@import只能引入css。</p>
        <h3 id="css-1-1-2">1.2. 加载顺序</h3>
        <p>link引用的css会在页面加载的时候同步加载</p>
        <p>而@import引入的css要等页面全部加载完再加载</p>
        <h3 id="css-1-1-3">1.3. 兼容性</h3>
        <p>@import只有IE5以上才支持</p>
        <p>link不存在兼容性问题</p>
        <h3 id="css-1-1-4">1.4. 操作dom</h3>
        <p>link可以通过js插入操作dom，@import 不可以！</p>

        <h2 id="css-2">2. js的原型链</h2>
        <h2 id="css-3">3. 怎么理解js中的内存泄露</h2>
        <h2 id="css-4">4. 闭包</h2>

      </div>
    );
  }
}
