import React, { Component } from 'react';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';

export default class ViewTwo extends Component {
  static propTypes = {};

  render() {
      const { support, supportNot, media, codes } = code;
    return (
      <div className="blog-view-two">

          <h2 id="view-1">1. calc, support, media各自的含义及用法</h2>
          <h3 id="view-1-1">1.1. calc</h3>
          <p>calc() 函数用于动态计算长度值</p>
          <PreFormat content={codes[3]}/>
          <h3 id="view-1-2">1.2. @support</h3>
          <p>@support主要是用于检测浏览器是否支持CSS的某个属性</p>
          <p>其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。</p>
          <PreFormat content={support}/>
          <PreFormat content={supportNot}/>
          <p>还支持与(and)或(or)的语法</p>

          <h3 id="view-1-3">1.3. @media</h3>
          <p>@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。</p>
          <p>当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。</p>
          <PreFormat content={media}/>
          <p>重置浏览器查看大小。当浏览器窗口的宽度小于 1000 像素时，背景颜色会变成淡蓝，否则是淡绿色。</p>

          <h2 id="view-2">2. 1rem、1em、1vh、1px各自代表的含义</h2>
          <h2 id="view-3">3. CORS</h2>
          <h2 id="view-4">4. export和export default的区别</h2>
          <h2 id="view-5">5. 数组去重</h2>
          <h3 id="view-5-1">5.1. 方法一</h3>
          <p>对于数组a，新建一个临时数组，循环遍历a，判断每一个元素在a中是否存在，不存在就push进临时数组</p>
          <h3 id="view-5-2">5.2. 方法二</h3>
          <>
              <h3 id="view-5-3">5.3. 方法三</h3>

              <h2 id="view-6">6. get、post的区别</h2>
              <h2 id="view-7">7. http的响应码及含义</h2>
              <h2 id="view-8">8. HTML5的新特性</h2>
              <h2 id="view-9">9. JS的类型</h2>
              <h2 id="view-10">10. JS中如何复制一个值</h2>

              <p>下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度</p>
              <p>onload</p>

              {/*function Foo() {
        var i = 0;
        return function() {
        console.log(i++);
      }
      }

        var f1 = Foo(),
        f2 = Foo();
        f1();
        f1();
        f2();


        var bb = 1;
        function aa(bb) {
        bb = 2;
        alert(bb);
      };
        aa(bb);
        alert(bb);*/}
              <p>https://www.cnblogs.com/sunyan-blog/p/10885982.html</p>
      </div>
    );
  }
}
