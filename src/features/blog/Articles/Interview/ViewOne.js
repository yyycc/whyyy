import React, { Component } from 'react';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';
import urls from './urls';
import { Link } from 'react-router-dom';

export default class ViewOne extends Component {
  static propTypes = {};

  render() {
    const { urlStates } = urls;
    const { border, square, borderBox, content, codes, after, bfc, flex, left, flexItem, top } = code;
    let leaveConfirm = true;
    return (
      <div className="blog-view-one">
        <h2 id="view-1">1. js的原型链</h2>
        <h2 id="view-2">2. 怎么理解js中的内存泄露</h2>
        <p>什么是内存泄漏？</p>
        <p>当应用程序不需要再占用内存的时候，由于某些原因，内存没有被回收。</p>
        <p>javaSript是有垃圾回收机制的，他会去判断内存将来是否会再使用，如果不用就回收</p>
        <p>而不需要的引用就导致了内存泄漏</p>
        <h3 id="view-2-1">2.1. 意外的全局变量</h3>
          <p>比如说，你在方法a里定义了一个变量aa，但是你声明的的时候忘记了关键词var，就导致这个变量成为了全局变量。</p>
          <p>本来在方法调用结束后接回自动回收这个变量aa，但是现在它变成了全局变量，就不会回收了。</p>
          <h3 id="view-2-2">2.2. 计数器、监听</h3>
          <p>计数器要在不用的时候clear，监听要在不用的时候remove</p>
          <p>比如react中，我在componentDidMount中写了计时器以及监听，那么就一定要在componentWillUnmount中clear计时器，remove监听。</p>
          <p>不然就会造成内存泄漏，而且可以直观的看到，如果你在第一个页面绑定了scroll监听，如果在卸载的时候不remove，那么到了另一个页面</p>
          <p>还是会继续触发监听函数，就造成了不必要的浪费。</p>
        <h3 id="view-2-3">2.3. 脱离dom的引用</h3>
        <p></p>
        <p></p>
        <h3 id="view-2-4">2.4. 闭包</h3>
          <p>闭包可以维持函数内部的局部变量</p>
          <p>所以闭包中，作用域中没有用的属性可以删除以减少内存消耗</p>

        <h2 id="view-3">3. 闭包</h2>
        <p>当函数可以 记住 并 访问 其(定义时的)作用域，就产生了闭包。</p>
        <p>闭包使得函数在其词法作用域之外执行时，可以访问其作用域内的数据</p>
        <p>函数 A 内部有一个函数 B，函数 B 可以访问到函数 A 中的变量，那么函数 B 就是闭包</p>

        <h2 id="view-4">4. link和@import的区别</h2>
        <p>link和@import主要都是为了引入css</p>
        <h3 id="view-4-1">4.1. 来源</h3>
        <p>link是html提供的标签，除了加载css还可以定义RSS(?)，定义ref链接属性(?)等。</p>
        <p>而@import只能引入css。</p>
        <h3 id="view-4-2">4.2. 加载顺序</h3>
        <p>link引用的css会在页面加载的时候同步加载</p>
        <p>而@import引入的css要等页面全部加载完再加载</p>
        <h3 id="view-4-3">4.3. 兼容性</h3>
        <p>@import只有IE5以上才支持</p>
        <p>link不存在兼容性问题</p>
        <h3 id="view-4-4">4.4. 操作dom</h3>
        <p>link可以通过js插入操作dom，@import 不可以！</p>

        <h2 id="view-5">5. view水平、垂直居中的写法</h2>
        <h3 id="view-5-1">5.1. 水平居中</h3>
        <p>flex:</p>
        <p>博主的偏爱</p>
        <PreFormat content={flex}/>
        <p>行内元素</p>
        <PreFormat content={codes[1]}/>
        <p>块级元素</p>
        <PreFormat content={codes[2]}/>
        <p>偏移50%(父元素要设置relative)</p>
        <PreFormat content={left}/>
        <h3 id="view-5-2">5.2. 垂直居中</h3>
        <p>设置line-height等于height</p>
        <p>flex:</p>
        <PreFormat content={flexItem}/>
        <p>偏移50%(父元素要设置relative)</p>
        <PreFormat content={top}/>

        <h2 id="view-6">6. 盒模型</h2>
        <p>我才发现原来我的博客用的是IE盒子模型 border-box。。。</p>
        <p>没错，是ant干的。。。</p>
        <p>box-sizing的默认属性是content-box</p>
        <p>盒模型的组成，由里至外：</p>
        <p>content、padding、border、margin</p>
        <h3 id="view-6-3">6.1. IE盒模型</h3>
        <PreFormat content={borderBox}/>
        <p>IE盒子模型中：width = content + padding + border</p>
        <h3 id="view-6-3">6.2. 标准(W3C)盒模型</h3>
        <PreFormat content={content}/>
        <p>标准的盒子模型中：width = content</p>
        <p>所以当你的box-sizing是border-box，当你定好div的长宽，再调整padding和border，这个div的大小是不会改变的。</p>
        <p>写完这些我发现，哦～～原来我就是想要border-box的呀。。。谢谢antd。。。</p>

        <h2 id="view-7">7. 画一个三角形</h2>
        <p>利用border-width和border-color将正方形分割成4个三角形，其中一个上色，另三个透明，就可以实现三角形啦。</p>
        <p>还可以只设置下边框和左右边框，然后左右边框透明的实现方式，原理是一样的。而且还可以调整三角形的比例。</p>
        <p>还能实现直角三角形。(将左/右border-width置为0)</p>
        <PreFormat content={border}/>
        <PreFormat content={square}/>
        <a href='/css/triangle' target="_blank" rel="noopener norefferrer">看具体效果请戳这里<i
          className='fa fa-arrow-left'> </i></a>
        <h2 id="view-8">8. 清除浮动</h2>
        <p>先说一下什么是浮动吧，虽然在我画blog的过程中基本没怎么用到过</p>
        <p>但是最开始工作的时候经常用到</p>
        <p>当时希望两个div并排显示，就会用float属性，然而这样就会导致元素浮动</p>
        <a href='/css/float' target="_blank" rel="noopener norefferrer">看具体效果请戳这里<i
          className='fa fa-arrow-left'> </i></a>
        <p>浮动后是什么样子呢，就是元素浮起来啦，虽然看起来内容很多，但是父元素的高度是0(父元素没有设置告诉)，其他元素都无视它的存在，该站哪儿站哪儿啦</p>
        <p>如果不浮动，即便父元素不给高度，子元素还是会把父元素撑开的。</p>
        <p>显然，一般情况下我们是不希望这样的，那么，怎么解决呢？</p>

        <h3 id="view-8-1">8.1. 方法一</h3>
        <PreFormat content={codes[0]}/>
        <h3 id="view-8-2">8.2. 方法二</h3>
          <p>BFC(见/three)清除浮动</p>
        <p>创建父级 BFC(overflow:hidden)</p>
        <p>父级设置高度</p>
        <PreFormat content={bfc}/>
        <h3 id="view-8-3">8.3. 方法三</h3>
        <p>伪元素清除浮动：</p>
        <p>给父div添加after伪元素</p>
        <PreFormat content={after}/>
        <h3 id="view-8-4">8.4. 方法四</h3>
        <p>给父元素设置高度</p>

        <h2 id="view-9">9. 页面渲染html的过程</h2>
        <p>浏览器渲染页面的一般过程：</p>

        <p>1.浏览器解析html源码，然后创建一个 DOM树。并行请求 css/image/js在DOM树中，每一个HTML标签都有一个对应的节点，并且每一个文本也都会有一个对应的文本节点。DOM树的根节点就是
          documentElement，对应的是html标签。</p>

        <p>2.浏览器解析CSS代码，计算出最终的样式数据。构建CSSOM树。对CSS代码中非法的语法它会直接忽略掉。解析CSS的时候会按照如下顺序来定义优先级：浏览器默认设置 - 用户设置 - 外链样式 - 内联样式 -
          html中的style。</p>

        <p>3.DOM Tree + CSSOM --> 渲染树（rendering tree）。渲染树和DOM树有点像，但是是有区别的。</p>

        <p>DOM树完全和html标签一一对应，但是渲染树会忽略掉不需要渲染的元素，比如head、display:none的元素等。而且一大段文本中的每一个行在渲染树中都是独立的一个节点。渲染树中的每一个节点都存储有对应的css属性。</p>

        <p>4.一旦渲染树创建好了，浏览器就可以根据渲染树直接把页面绘制到屏幕上。</p>

        <p>以上四个步骤并不是一次性顺序完成的。如果DOM或者CSSOM被修改，以上过程会被重复执行。实际上，CSS和JavaScript往往会多次修改DOM或者CSSOM。</p>

        <p>1、将获取的html解析成dom树</p>
        <p>2、处理css，构成层叠样式表模型CSSOM</p>
        <p>3、将dom树和CSSOM合并为渲染树</p>
        <p>4、根据CSSOM将渲染树的节点布局计算</p>
        <p>5、将渲染树节点样式绘制到页面上</p>
          <p>注意在渲染的过程中是自上而下渲染， js会阻塞页面的渲染，优先等js执行完成如果在渲染的过程中改变了样式，会造成回流需要重新渲染</p>

        <h2 id="view-10">10. 事件代理</h2>
        <h3 id="view-10-1">10.1. 原理</h3>
        <p>第一次遇到事件代理是这么一个场景：</p>
        <p>需要给表格某一列的每一行绑定一个点击事件，当时第一个想法就是把这些元素选择出来for循环绑定。</p>
        <p>但是当时就出现了翻页的数据没有绑定的问题。</p>
        <p>咨询之后了解到了可以用事件代理</p>
        <p>就是将事件绑定到父元素上，能这样做其中一个原因是因为子元素的事件是会冒泡到父元素以及所有祖先元素身上的。</p>
        <p>这样一来也不用写for循环，也不用怕子元素新增后还要重新再绑定事件了。</p>
        <p>btw，如果不想父元素也触发事件，就在方法里面判断一个nodeName或者其他标识就可以了。</p>
        <h3 id="view-10-2">10.2. 优点</h3>
        <p>1.管理的函数变少了。不需要为每个元素都添加监听函数。对于同一个父节点下面类似的子元素，可以通过委托给父元素的监听函数来处理事件。</p>
        <p>2.可以方便地动态添加和修改元素，不需要因为元素的改动而修改事件绑定。</p>
        <p>3.JavaScript和DOM节点之间的关联变少了，这样也就减少了因循环引用而带来的内存泄漏发生的概率。</p>
        <h3 id="view-10-3">10.3. 适用事件</h3>
        <p>click，mousedown，mouseup，keydown，keyup，keypress都可以。</p>
        <p>mouseover和mouseout处理起来要注意。</p>
        <p>focus，blur之类没有冒泡特性的就不适用。</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. 纯CSS画的基本图形（矩形、圆形、三角形、多边形、爱心、八卦等）</Link><br/>
          <Link to={urlStates[1]}>2. 清除浮动的最常用的四种方法，以及优缺点</Link><br/>
          <Link to={urlStates[2]}>3. 2020前端面试(一面面试题）</Link><br/>
          <Link to={urlStates[3]}>4. JS中的事件委托（事件代理）</Link><br/>
          <Link to={urlStates[4]}>5. 简述JS中的事件委托和事件代理</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://www.cnblogs.com/ming1025/p/7363074.html" target="_blank" rel="noopener noreferrer">
            1. 纯CSS画的基本图形（矩形、圆形、三角形、多边形、爱心、八卦等）</a><br/>
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
