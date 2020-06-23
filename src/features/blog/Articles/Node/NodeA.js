import React, { Component } from 'react';

export default class NodeA extends Component {

  render() {
    return (
      <div className="blog-node-a">
        <p>目前已经搭建了一个基于node+express+mysql的服务，可以实现基本的增删改查(还在开发)</p>
        <p>总体体验就是整个架构很轻，javaScript本身就是一个比较随意(动态)的语言，写起来没啥限制，启动也超快</p>
        <p>就是调试上，我目前都是console，还在找更好的方法。</p>

        <h2 id="node-1">1. 什么是nodeJs</h2>
        <p>运行在服务端的javaScript</p>
        <p>基于JavaScript语言和V8引擎的开源Web服务器项目</p>
        <p>也就是可以用javaScript写后端啦，悄悄地丢开一会儿java</p>


        <h2 id="node-2">2. 安装</h2>
        <p>安装就不详细说了，安装好node和npm就OK了(可以运行node -v\npm -v)</p>
        <p>npm是一个包管理工具，就好像maven</p>
        <p>大家都把自己开发的模块打包后放到npm官网上，如果要使用，直接通过npm安装就可以直接用，不用管代码存在哪，应该从哪下载。</p>
        <p>更重要的是，如果我们要使用模块A，而模块A又依赖于模块B，模块B又依赖于模块X和模块Y，npm可以根据依赖关系，把所有依赖的包都下载下来并管理起来。否则，靠我们自己手动管理，肯定既麻烦又容易出错。</p>

        <h2 id="node-3">3. 搭建服务器</h2>
        <h2 id="node-4">4. 模块</h2>
      </div>
    );
  }
}
