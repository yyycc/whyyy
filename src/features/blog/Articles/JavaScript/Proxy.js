import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import urls from './urls';

export default class Proxy extends Component {
  static propTypes = {};

  render() {
    let leaveConfirm = true;
    const { urlStates } = urls;
    return (
      <div className="blog-proxy">
        <h2 id="javaScript-1">1. 正则表达式</h2>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. 为什么javascript是单线程的却能让AJAX异步调用？</Link><br/>
          <Link to={urlStates[1]}>2. Js异步机制的实现</Link><br/>
          <Link to={urlStates[2]}>3. JavaScript异步机制详解</Link><br/>
          <Link to={urlStates[3]}>4. JS异步执行机制</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://pm2.keymetrics.io/docs/usage/quick-start/" rel="noopener noreferrer" target="_blank">
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
