import React, { Component } from 'react';
import urls from './urls';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';

export default class ViewFour extends Component {
  static propTypes = {};

  render() {
    const { urlStates } = urls;
    const { inline, block } = code;
    let leaveConfirm = true;
    return (
      <div className="blog-view-four">
        <h2 id="view-1">1. 行内元素&块级元素</h2>
        <h3 id="view-1-1">1. 区别</h3>
        <p>块级元素：</p>
        <ul>
          <li>独占一行</li>
          <li>可设置款高，默认宽度是父级的100%</li>
        </ul>
        <p>行内元素：</p>
        <ul>
          <li>与其他元素并排排列</li>
          <li>不能设置宽高，默认宽度就是内容的宽度</li>
        </ul>
        <h3 id="view-1-2">2. 标签</h3>
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
        <h3 id="view-1-3">3. 转换</h3>
        <p>变成行内元素</p>
        <PreFormat content={inline}/>
        <p>变成块级元素</p>
        <PreFormat content={block}/>
        <h2 id="view-2">2. js内置对象</h2>
        <p>JS中，可以将对象分为“内部对象”、“宿主对象”和“自定义对象”三种。</p>
        <p>1，内部对象</p>
        <p>js中的内部对象包括Array、Boolean、Date、Function、Global、Math、Number、Object、RegExp、String以及各种错误类对象，包括Error、EvalError、RangeError、ReferenceError、SyntaxError和TypeError。</p>
        <p>其中Global和Math这两个对象又被称为“内置对象”，这两个对象在脚本程序初始化时被创建，不必实例化这两个对象。</p>
        <p>2.宿主对象</p>
        <p>宿主对象就是执行JS脚本的环境提供的对象。对于嵌入到网页中的JS来说，其宿主对象就是浏览器提供的对象，所以又称为浏览器对象，如IE、Firefox等浏览器提供的对象。不同的浏览器提供的宿主对象可能不同，即使提供的对象相同，其实现方式也大相径庭！这会带来浏览器兼容问题，增加开发难度。</p>
        <p>浏览器对象有很多，如Window和Documen，Element，form，image，等等。</p>
        <p>3.自定义对象</p>
        <p>顾名思义，就是开发人员自己定义的对象。JS允许使用自定义对象，使JS应用及功能得到扩充</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[11]}>1. 块级元素和行内元素</Link><br/>
          <Link to={urlStates[12]}>2. 最讨厌晚上9点半，钉钉响起的声音</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://www.cnblogs.com/stfei/p/9084915.html" target="_blank" rel="noopener noreferrer">
            1. 块级元素和行内元素</a><br/>
          <a href="https://www.nowcoder.com/test/question/done?tid=33089519&qid=55728#summary" target="_blank"
             rel="noopener noreferrer">
            2. 最讨厌晚上9点半，钉钉响起的声音</a><br/>
        </p>
        }
      </div>
    );
  }
}
