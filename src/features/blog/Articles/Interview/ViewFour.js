import React, { Component } from 'react';
import urls from './urls';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';

export default class ViewFour extends Component {
  static propTypes = {};

  render() {
    const { urlStates } = urls;
    const { inline, block, func, funcs, head } = code;
    let leaveConfirm = true;
    return (
      <div className="blog-view-four">


        <h2 id="view-four-1">1. 行内元素&块级元素</h2>
        <h3 id="view-four-1-1">1. 区别</h3>
        <p>块级元素(默认display属性是block)：</p>
        <ul>
          <li>独占一行</li>
          <li>可设置款高，默认宽度是父级的100%</li>
          <li>可设置margin、padding</li>
        </ul>
        <p>行内元素(默认display属性是inline)：</p>
        <ul>
          <li>与其他元素并排排列</li>
          <li>不能设置宽高，默认宽度就是内容的宽度</li>
          <li>垂直方向上的margin、padding失效</li>
        </ul>
        <h3 id="view-four-1-2">2. 标签</h3>
        <p>块级元素：</p>
        <ul>
          <li>p</li>
          <li>pre</li>
          <li>h1~h6</li>
          <li>li</li>
          <li>fieldset</li>
          <li>legend</li>
        </ul>
        <p>行内元素：</p>
        <ul>
          <li>img</li>
          <li>select</li>
          <li>span</li>
          <li>var</li>
          <li>kbd</li>
        </ul>
        <p>一般文本元素都是行内元素</p>
        <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-05-12</p>
        <p>常见的行块级元素(拥有内在尺寸，可设置高宽，不会自动换行，默认display属性是inline-block)有：</p>
        <ul>
          <li>button</li>
          <li>input</li>
          <li>textarea</li>
          <li>select</li>
          <li>img</li>
        </ul>
        <p>上述都是浏览器默认状态下的，但是你可以通过设置display来改变，比如a元素只要设置inline-block或block，宽高就会生效，设置block就会自动换行啦</p>
        <a href='/css/inlineBlock' target="_blank" rel="noopener norefferrer">眼见为实，请戳这里<i
          className='fa fa-arrow-left'> </i></a>
        <h3 id="view-four-1-3">3. 转换</h3>
        <p>变成行内元素</p>
        <PreFormat content={inline}/>
        <p>变成块级元素</p>
        <PreFormat content={block}/>


        <h2 id="view-four-2">2. js内置对象</h2>
        <p>JS中，可以将对象分为“内部对象”、“宿主对象”和“自定义对象”三种。</p>
        <p>1，内部对象</p>
        <p>js中的内部对象包括Array、Boolean、Date、Function、Global、Math、Number、Object、RegExp、String以及各种错误类对象，包括Error、EvalError、RangeError、ReferenceError、SyntaxError和TypeError。</p>
        <p>其中Global和Math这两个对象又被称为“内置对象”，这两个对象在脚本程序初始化时被创建，不必实例化这两个对象。</p>
        <p>2.宿主对象</p>
        <p>宿主对象就是执行JS脚本的环境提供的对象。对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，所以又称为浏览器对象，如IE、Firefox等浏览器提供的对象。不同的浏览器提供的宿主对象可能不同，即使提供的对象相同，其实现方式也大相径庭！这会带来浏览器兼容问题，增加开发难度。</p>
        <p>浏览器对象有很多，如Window和Documen，Element，form，image，等等。</p>
        <p>3.自定义对象</p>
        <p>顾名思义，就是开发人员自己定义的对象。JS允许使用自定义对象，使JS应用及功能得到扩充</p>


        <h2 id="view-four-3">3. 继承属性</h2>
        <p>可以继承的属性很少，只有颜色，文字，字体间距行高对齐方式，和列表的样式可以继承。</p>
        <p>所有元素可继承：visibility和cursor。</p>
        <p>内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction。</p>
        <p>终端块状元素可继承：text-indent和text-align。</p>
        <p>列表元素可继承：list-style、list-style-type、list-style-position、list-style-image。</p>


        <h2 id="view-four-4">4. css权重</h2>
        <p>CSS 优先规则1：最近的"祖先样式"比其他"祖先样式"优先级高。</p>
        <p>CSS 优先规则2："直接样式"比"祖先样式"优先级高</p>
        <p>CSS 优先规则3：内联样式 > ID 选择器 > 类选择器 = 属性选择器 = 伪类选择器 > 标签选择器 = 伪元素选择器</p>
        <p>CSS 优先规则4：计算选择符中 ID 选择器的个数（a），计算选择符中类选择器、属性选择器以及伪类选择器的个数之和（b），计算选择符中标签选择器和伪元素选择器的个数之和（c）。按 a、b、c
          的顺序依次比较大小，大的则优先级高，相等则比较下一个。若最后两个的选择符中 a、b、c 都相等，则按照"就近原则"来判断(写在后面的覆盖前面的)。</p>
        <p>CSS 优先规则5：属性后插有 !important 的属性拥有最高优先级。若同时插有 !important，则再利用规则 3、4 判断优先级。</p>

        <h2 id="view-four-5">5. html元素获取焦点</h2>
        <p>1. input标签、textarea标签、button标签、select标签</p>
        <p>2. contentEditable：true|false 规定元素文本是否可编辑</p>
        <p>3. tabindex：0 | -1 | x</p>
        <ul>
          <li> 0：tab键可获取焦点；</li>
          <li> -1：tab键不可获取焦点；</li>
          <li> x：x>0，x越<strong>小</strong>获取焦点优先级越高</li>
        </ul>
        <p>4. a标签，有href属性时可以获取焦点</p>
        <a href='/css/focus' target="_blank" rel="noopener norefferrer">看具体效果请戳这里<i
          className='fa fa-arrow-left'> </i></a>

        <h2 id="view-four-6">6. JavaScript实现继承</h2>
        <p>JavaScript实现继承共6种方式：
          原型链继承、借用构造函数继承、组合继承、原型式继承、寄生式继承、寄生组合式继承。</p>
        <p>https://www.nowcoder.com/test/question/done?tid=33408632&qid=323515#summary</p>

        <h2 id="view-four-7">7. 立即执行函数</h2>
        <h3 id="view-four-7-1">7.1. 定义</h3>
        <p>声明一个匿名函数然后马上调用他，就叫做立即执行函数</p>
        <h3 id="view-four-7-2">7.2. 写法</h3>
        <p>因为function 这个关键字，既可以当做语句，也可以当做表达式</p>
        <p>为了避免解析上的歧义，JS引擎规定，如果function出现在行首，一律解析成语句。</p>
        <p>JS引擎看到行首是function关键字以后，认为这一段都是函数定义，不应该以圆括号结尾，会报错。</p>
        <p>所以需要把function放进圆括号里面，比如下面两种写法：</p>
        <PreFormat content={func}/>
        <p>还有一些其他的写法（加一些小东西，不让解析成语句就可以）,比如下边：</p>
        <PreFormat content={funcs}/>
        <h3 id="view-four-7-3">7.3. 作用</h3>
        <p>立即执行函数会形成一个单独的作用域，我们可以封装一些临时变量或者局部变量，避免污染全局变量</p>
        <h3 id="view-four-7-1">7.1. user</h3>
        <p></p>
        <h3 id="view-four-7-1">7.1. user</h3>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>


        <PreFormat content={head}/>

        <h2 id="Z-four-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[11]}>1. 块级元素和行内元素</Link><br/>
          <Link to={urlStates[12]}>2. 最讨厌晚上9点半，钉钉响起的声音(js对象分类)</Link><br/>
          <Link to={urlStates[13]}>3. CSS 样式优先级</Link><br/>
          <Link to={urlStates[16]}>4. 深入理解 vertical-align 属性</Link><br/>
          <Link to={urlStates[17]}>5. 什么是立即执行函数，它有什么作用？</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://www.cnblogs.com/stfei/p/9084915.html" target="_blank" rel="noopener noreferrer">
            1. 块级元素和行内元素</a><br/>
          <a href="https://www.nowcoder.com/test/question/done?tid=33089519&qid=55728#summary" target="_blank"
             rel="noopener noreferrer">
            2. 最讨厌晚上9点半，钉钉响起的声音(js对象分类)</a><br/>
          <a href="https://www.runoob.com/w3cnote/css-style-priority.html" target="_blank"
             rel="noopener noreferrer">
            3. CSS 样式优先级</a><br/>
          <a href="https://www.cnblogs.com/shenggao/p/12382060.html" target="_blank"
             rel="noopener noreferrer">
            4. 深入理解 vertical-align 属性</a><br/>
          <a href="https://www.jianshu.com/p/b10b6e93ddec" target="_blank"
             rel="noopener noreferrer">
            5. 什么是立即执行函数，它有什么作用？</a><br/>
        </p>
        }
      </div>
    );
  }
}
