import React, { Component } from 'react';
import urls from './urls';
import { Link } from 'react-router-dom';

export default class ViewThree extends Component {
  static propTypes = {};

  render() {
    const { urlStates } = urls;
    let leaveConfirm = true;
    return (
      <div className="blog-view-three">
        <h2 id="view-1">1. 下列哪个样式定义后,内联(非块状)元素可以定义宽度和高度</h2>
        <h2 id="view-1">1. BFC</h2>
        <p>创建 块格式化上下文 BFC 的方式：</p>
        <p>根元素(html)</p>
        <p>浮动元素（元素的 float 不是 none）</p>
        <p>绝对定位元素（元素的 position 为 absolute 或 fixed）</p>
        <p>行内块元素（元素的 display 为 inline-block）</p>
        <p>表格单元格（元素的 display为 table-cell，HTML表格单元格默认为该值）</p>
        <p>表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）</p>
        <p>匿名表格单元格元素（元素的 display为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML
          table、row、tbody、thead、tfoot的默认属性）或 inline-table）</p>
        <p>overflow 值不为 visible 的块元素</p>
        <p>display 值为 flow-root 的元素</p>
        <p>contain 值为 layout、content或 paint 的元素</p>
        <p>弹性元素（display为 flex 或 inline-flex元素的直接子元素）</p>
        <p>网格元素（display为 grid 或 inline-grid 元素的直接子元素）</p>
        <p>多列容器（元素的 column-count 或 column-width 不为 auto，包括 column-count 为 1）</p>
        <p>column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。</p>


        <h2 id="view-2">2. bootstrap栅栏系统css中的col-</h2>
        <p>.col-xs- 超小屏幕 手机 (小于768px)</p>
        <p>.col-sm- 小屏幕 平板 (≥768px)</p>
        <p>.col-md- 中等屏幕 桌面显示器 (≥992px)</p>
        <p>.col-lg- 大屏幕 大桌面显示器 (≥1200px)</p>


        <h2 id="view-3">3. reflow和repaint</h2>
        <p>https://blog.csdn.net/HU_YEWEN/article/details/84790690</p>

        
        <h2 id="view-4">4. html5语义化标签</h2>
        <p>https://www.cnblogs.com/freeyiyi1993/p/3615179.html</p>
        <p>article、header、footer、section、aside、nav、</p>
        <p>1、什么是HTML语义化？
          基本上都是围绕着几个主要的标签，像标题（H1~H6）、列表（li）、强调（strong em）等等
          根据内容的结构化（内容语义化），选择合适的标签（代码语义化）便于开发者阅读和写出更优雅的代码的同时让浏览器的爬虫和机器很好地解析。
          2、为什么要语义化？ 为了在没有CSS的情况下，页面也能呈现出很好地内容结构、代码结构:为了裸奔时好看； 用户体验：
          例如title、alt用于解释名词或解释图片信息、label标签的活用； 有利于SEO ：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：
          爬虫依赖于标签来确定上下文和各个关键字的权重； 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
          便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
          3、写HTML代码时应注意什么？ 尽可能少的使用无语义的标签div和span； 在语义不明显时，既可以使用div或者p时，尽量用p,
          因为p在默认情况下有上下间距，对兼容特殊终端有利； 不要使用纯样式标签，如：b、font、u等，改用css设置。
          需要强调的文本，可以包含在strong或者em标签中（浏览器预设样式，能用CSS指定就不用他们），strong默认样式是加粗（不要用b），em是斜体（不用i）；
          使用表格时，标题要用caption，表头用thead，主体部分用tbody包围，尾部用tfoot包围。表头和一般单元格要区分开，表头用th，单元格用td；
          表单域要用fieldset标签包起来，并用legend标签说明表单的用途； 每个input标签对应的说明文本都需要使用label标签，并且通过为input设置id属性，
          在lable标签中设置for=someld来让说明文本和相对应的input关联起来。 http://www.cnblogs.com/freeyiyi1993/p/3615179.html
        </p>
        <h2 id="view-5">5. 浏览器内核</h2>
        <p>主流浏览器：chrome、safari、Firefox、IE、Opera</p>
        <p>内核</p>
        <p>IE：trident内核(IE内核)</p>
        <p>chrome、opera：webkit内核 -> blink内核</p>
        <p>safari：webkit内核</p>
        <p>FirefoxFirefox：Gecko内核(Firefox内核)</p>
        <h2 id="view-6">6. commonJS</h2>
        <h2 id="view-7">7. 变量提升</h2>
        <h2 id="view-8">8. bind、call、apply</h2>
        <h2 id="view-9">9. 如何实现一个左右固定，中间自适应的三栏布局</h2>
        <h2 id="view-10">10. Babel原理</h2>

        <p>https://www.cnblogs.com/sunyan-blog/p/10885982.html</p>
        <p>https://www.cnblogs.com/sdusrz/p/7170564.html</p>
        <p>原生具备 Iterator 接口的数据结构如下。</p>
        <p>Array</p>
        <p>Map</p>
        <p>Set</p>
        <p>String</p>
        <p>TypedArray</p>
        <p>函数的 arguments 对象</p>
        <p>NodeList 对象</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. 块格式化上下文</Link><br/>
          <Link to={urlStates[1]}>2. 清除浮动的最常用的四种方法，以及优缺点</Link><br/>
          <Link to={urlStates[2]}>3. 2020前端面试(一面面试题）</Link><br/>
          <Link to={urlStates[3]}>4. JS中的事件委托（事件代理）</Link><br/>
          <Link to={urlStates[4]}>5. 简述JS中的事件委托和事件代理</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context" target="_blank"
             rel="noopener noreferrer">
            1. 块格式化上下文</a><br/>
          <a href="https://blog.csdn.net/h_qingyi/article/details/81269667" target="_blank"
             rel="noopener noreferrer">
            2. 清除浮动的最常用的四种方法，以及优缺点</a><br/>
          <a href="https://blog.csdn.net/h_qingyi/article/details/81269667" target="_blank"
             rel="noopener noreferrer">
            3. 2020前端面试(一面面试题）</a><br/>
          <a href="https://www.cnblogs.com/html55/p/10164914.html" target="_blank" rel="noopener noreferrer">
            4. JS中的事件委托（事件代理）</a><br/>
          <a href="https://www.jianshu.com/p/a77d8928c5c9" target="_blank" rel="noopener noreferrer">
            5. 简述JS中的事件委托和事件代理</a><br/>
        </p>
        }
      </div>
    );
  }
}
