import React, { Component } from 'react';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

export class CssB extends Component {
  static propTypes = {};

  render() {
    const { codes, link, i } = code;
    return (
      <div className="blog-css-b">
        <p>一个非常好用的icon库。。。</p>
        <p>其实很久之前就用到过，只是当时不知道这个是font-awesome。</p>
        <p>我记得当时就是在样式中写了</p>
        <PreFormat content={codes[0]}/>
        <p>一个小图标就出现了</p>
        <p>真的很神奇</p>

        <h2 id="css-2-1">1. 问题</h2>
        <p>最近又一次用到，但是图标都显示不出来，只显示一个小方块。</p>
        <p>于是，我就去研究了一下，这个font-awesome。</p>

        <h2 id="css-2-2">2. 解决</h2>
        <p>怎么解决呢，很简单，去他的官网<a>https://fontawesome.dashgame.com/</a>下载。</p>
        <p>从下载下来的包找到font-awesome-4.7.0/css/font-awesome.min.css，在你的页面上引入就好啦</p>
        <PreFormat content={link}/>
        <p>还有更简单的写法，你可以在官网上找到你想要的图标，边上有它的名字name，你只要class给fa fa-name就可以啦。(前面的fa 一定要写哦)</p>
        <p>或者，如果你不知道名字，只知道content值，也可以</p>
        <PreFormat content={i}/>

        <h2 id="css-2-3">3. react中使用</h2>
        <p>最后再讲一下react框架下怎么使用</p>
        <p>首先</p>
        <PreFormat content={codes[1]}/>
        <p>然后在你要用的地方，或者是公共的less文件中引入</p>
        <PreFormat content={codes[2]}/>
        <p>页面上使用的写法还是跟上面说的一样一样的。</p>
      </div>
    );
  }
}

export default CssB;
