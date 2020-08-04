import React, { Component } from 'react';

function InterviewSix() {

  return (
    <div className="blog-interview-six">

      <details>
        <summary>前端工程化</summary>
        <div>
          <p>这几年前端发展飞速，各种新的框架出现，尤其是nodeJs的出现，更是让js可以跑在服务器上。</p>
          <p>前后端分离，前端可以实现的功能越来越多，网页制作越来越复杂，文件越来越多，就需要规范化、标准化、提高效率，降低成本，这些都是前端工程化的任务。</p>
          <p>像以前写前端，js、css、html都写在一个页面上，开发效率低，无法复用，维护成本也很高。</p>
          <p>前端工程化就是要改变这种情况。</p>
          <p>首先是自动化，从项目搭建开始，就应该使用工具来解决一些重复性的复杂的工作。用脚手架工具来创建项目，用webpack等打包工具来打包、压缩合并代码，
            用eslint等工具规范代码自动格式化，用jenkins自动部署发布，写单元测试进行自动化测试。</p>
          <p>模块化，将实现一个特定功能的文件放在一个模块下export，哪里需要使用就在那里import，提高代码复用率。</p>
          <p>组件化，在UI层面将一个界面拆分成一个个小组件，自由组合，也是提高复用率和可维护性</p>
          <p>规范化，在项目初期就制定好规范，提升开发效率，提高代码的可阅读性，降低后期维护成本。主要规定代码的目录结构，编码规范，代码注释、git提交message等等。</p>
        </div>
      </details>

      <details>
        <summary>前端组件化</summary>
        <div>
          <p>从前拿到一个UI，可能会分成上下两部分，然后上面再分左右或者左中右这样，然后就开始div top,div bottom这样开发。</p>
          <p>这样一个页面的代码量很大，定位都比较麻烦，难以复用，而且维护成本高。</p>
          <p>那首先就可以将各个部分分开，比如我又左上，右上，下三部分，那就分成三个文件，这样每个文件的代码量就小了很多。但是这样写复用率肯定还是很低。</p>
          <p>那我们可以将每个部分的之处再拆分出来，比如都有相似的header，就可以把header拿出来，单独写一个文件，上面的文字等利用参数传进去。</p>
          <p><em style={{ textDecoration: 'underline' }}>body部分可以用slot做模版，react就用props.children</em></p>
          <p>尽量把每一个部分拆到最小，提高复用率，这样定位问题会更加容易，以后要做功能扩展也更加容易(毕竟不变的是一直在变的需求)。</p>
        </div>
      </details>

      <details>
        <summary>web性能调优</summary>
        <div>
          {/*<p>1. react初始化加载很慢，main.js大，加载慢，开启gzip压缩</p>*/}
          <p>减少http请求：合并js，合并css，将css内联到html页面上</p>
          <p>css sprite</p>
        </div>
      </details>

      <details>
        <summary>web兼容</summary>
        <div>
          <p>1. react初始化加载很慢，main.js大，加载慢，开启gzip压缩</p>
          <p>减少http请求：合并js，合并css，将css内联到html页面上</p>
          <p>css sprite</p>
        </div>
      </details>
    </div>
  );
}

export default InterviewSix;
