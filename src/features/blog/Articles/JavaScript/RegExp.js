import React, { Component } from 'react';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

export default class RegExp extends Component {

  render() {
    const { codes } = code;
    return (
      <div className="blog-reg-exp">
        <p>正则其实用的地方还蛮多的，像手机、邮箱格式校验什么的，一直感觉这是一个很神奇的东东。</p>
        <h2 id="javaScript-1">1. 正则表达式</h2>
        <p>使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。</p>
        <p>一般用于文本搜索和文本替换</p>


        <h2 id="javaScript-2">2. 语法</h2>
        <p>/pattern/modifiers 即</p>
        <p>/模式/修饰符</p>
        <p>举个例子，我要搜索my name is cyy中是否有cyy，就可以</p>
        <PreFormat content={codes[0]}/>
        <p>其中i是修饰符表示 执行对大小写不敏感的匹配</p>
        <p>返回值是匹配到的字符串的其实位置，未匹配到则返回-1。</p>
        <p>除了search，字符串支持正则表达式的方法还有 match、replace、split</p>
        <p>ES6 将这 4 个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。</p>

        <h2 id="javaScript-3">3. RegExp 对象</h2>
        <p>除了字面量的方式，还可以用new来新建一个正则对象</p>
        <p>var patt = new RegExp(pattern,modifiers);</p>
        <PreFormat content={codes[1]}/>
        <p>RegExp参数有两种情况，(字符串, 修饰符)，或者(正则表达式)。</p>
        <p>ES6新增了(正则表达式, 修饰符)，第二个参数会覆盖，正则表达式中的修饰符。</p>

      </div>
    );
  }
}
