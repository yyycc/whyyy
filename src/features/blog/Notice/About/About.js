import React, { Component } from 'react';
import luffy from '../../../../images/luffy.jpg';

export class About extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div className="blog-about">
        <h1>关于</h1>
        <article>
          <h2>关于博主</h2>
          <p>程序员一名</p>
          <p>资深小白</p>
          <p>日常实施工作</p>
          <p>主要使用技术栈：</p>
          <ul>
            <li>javaScript</li>
            <li>html</li>
            <li>css</li>
            <li>oracle</li>
            <li>mysql</li>
            <li>java</li>
            <li>mybatis</li>
          </ul>
          <p>ctrl + c ctrl + v搞定大部分工作(所以说实施其实挺无聊的，重复性的工作很多)</p>
          <p>好奇心相当重，啥都想知道</p>
          <p>想做前端，正在努力研究</p>

          <h2>关于博客</h2>
          <p>旨在记录日常遇到的问题以及一些学习心得</p>
          <p>还有一些碎碎念。。。</p>
          <p>文章内容均经过验证，如果错漏，请不吝告知</p>
          <p><img src={luffy} alt='yeah~'/></p>
        </article>
      </div>
    );
  }
}

export default About;
