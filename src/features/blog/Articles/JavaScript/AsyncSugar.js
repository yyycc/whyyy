import React, { Component } from 'react';
import urls from './urls';
import { Link } from 'react-router-dom';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

export default class AsyncSugar extends Component {

  render() {
    const { ajax, callBack, event, promise, generate, async } = code;
    let leaveConfirm = true;
    const { urlStates } = urls;
    return (
      <div className="blog-async">
        <h2 id="async-1">1. 单线程</h2>
        <p>大家都知道，javaScript是单线程的，也就是同一时间，只能做一件事，其他的任务都得排队。</p>
        <p>为什么呢，这样不是效率很低么。</p>
        <p>考虑到javaScript主要的用途是用户交互以及操作dom，如果是多线程就会发生一个线程修改dom，另一个线程删除dom这样的操作。</p>
        <p>避免复杂性，所以javaScript一直是单线程。实现简单。</p>
        <p>但是这样的确会导致速度很慢，如果有一个任务耗时过长，就会拖延整个程序的执行</p>
        <p>于是javaScript设计了异步运行机制。当你执行了异步代码，不需要傻等它的返回，可以先将它挂起，执行后续的任务，等异步任务有了结果，再去执行挂起的任务。</p>
        <p>这是如何实现的呢？</p>
        <h2 id="async-2">2. 异步机制</h2>
        <p>首先，js是单线程，但浏览器是多线程的</p>
        <p>一个网页的渲染有很多同步任务以及很多异步任务，比如页面渲染就是同步任务，数据、图像等资源请求就是异步任务。</p>
        <p>所有同步任务都在主线程上进行(执行栈)，JS引擎线程来执行执行栈中的同步任务，当有异步任务，比如ajax请求，那么浏览器会新开一个ajax线程请求。</p>
        <p>而异步任务的回调函数会被放进一个先进先出的消息队列中。</p>
        <p>一旦执行栈中的所有同步任务执行完成，栈被清空后，JS引擎线程就会去消息队列中读取任务压入执行栈中执行。</p>
        <p>主线程从任务队列中读取事件(执行栈一空就开始)，这个过程是循环不断的，所以整个的这种运行机制又称为Event Loop</p>
        <h2 id="async-3">3. 异步编程</h2>
        <p>这边先封装一个ajax请求(jQuery的ajax，url是本地写好的一个请求)</p>
        <PreFormat content={ajax}/>
        <p>最基本的就是回调函数。</p>
        <h3 id="async-3-1">3.1. 回调函数</h3>
        <PreFormat content={callBack}/>
        <h3 id="async-3-2">3.2. 事件</h3>
        <PreFormat content={event}/>
        <h3 id="async-3-3">3.3. Promise</h3>
        <PreFormat content={promise}/>
        <h3 id="async-3-4">3.4. Generate</h3>
        <PreFormat content={generate}/>
        <h3 id="async-3-5">3.5. async</h3>
        <PreFormat content={async}/>


        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. 为什么javascript是单线程的却能让AJAX异步调用？</Link><br/>
          <Link to={urlStates[1]}>2. Js异步机制的实现</Link><br/>
          <Link to={urlStates[2]}>3. JavaScript异步机制详解</Link><br/>
          <Link to={urlStates[3]}>4. JS异步执行机制</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://www.cnblogs.com/yasmi/articles/5064588.html" rel="noopener noreferrer" target="_blank">
            1. 为什么javascript是单线程的却能让AJAX异步调用？</a><br/>
          <a href="https://blog.csdn.net/qq_40413670/article/details/105555381" rel="noopener noreferrer"
             target="_blank">
            2. Js异步机制的实现</a><br/>
          <a href="https://www.jianshu.com/p/4ea4ee713ead" rel="noopener noreferrer" target="_blank">
            3. JavaScript异步机制详解</a><br/>
          <a href="https://www.cnblogs.com/sunidol/p/11301808.html" rel="noopener noreferrer" target="_blank">
            4. JS异步执行机制</a><br/>
        </p>
        }
      </div>
    );
  }
}
