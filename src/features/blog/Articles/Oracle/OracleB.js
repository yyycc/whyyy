import React, { Component } from 'react';
import code from './code';
import url from './urls';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';

export default class OracleB extends Component {

  render() {
    const { codes, acl, request } = code;
    const { urlStates } = url;
    let leaveConfirm = true;
    return (
      <div className="blog-oracle-b">
        <p>去年十一来了nw这个新项目，任务是开发接口，当时我还没做过类似的项目，对oracle不熟悉，更不要说用oracle请求web service了。</p>
        <p>当时研究了很久，但是最后都以失败告终，后来启用了plan B，用java做。(用java就简单多了嘛～～)</p>
        <p>但是最近出了一种业务，导致只能在oracle里面调用web service，我就又研究了一遍。</p>
        <p>不到一个小时就搞定了。。。</p>
        <p>半年了啊，我果然还是成长了么。。。不枉我写了那么多package。。。</p>
        <h2 id="oracle-1">1. utl_http</h2>
        <p>我本地连oracle用的是sql developer，当时因为utl_http一直报错，我还特地弄了一个plsql(mac装plsql不大容易)，结果也失败了。</p>
        <p>今天还是这个"必须声明标识符 'utl_http'"的报错</p>
        <p>sysdba登录数据库执行一下</p>
        <PreFormat content={codes[0]}/>
        <p>就搞定了。。。(当时我的心里：小朋友，你是否有很多问号？？？)</p>
        <p>半年前的我果然对oracle一无所知吧。。。</p>
        <h2 id="oracle-2">2. ACL权限</h2>
        <p>代码这边我就不挂了，基本就是参考链接里面提供的代码</p>
        <p>测试一开始遇到的就是acl的问题，执行一下下面的就可以了</p>
        <PreFormat content={acl}/>
        <p>principle后面的是数据库用户名</p>
        <p>其实一直到这里，差不多都和半年前一样，但是。。。</p>
        <h2 id="oracle-3">3. ip</h2>
        <p>初始化request是这样的，其中的g_url_test就是wsdl(要用post哦，get不行)。是我本地发布的一个soap。</p>
        <PreFormat content={request}/>
        <p>大约是最近ip提供多了，测试的时候就把ip改成了公网ip(之前只试过localhost和127.0.0.1，当然对应的acl我都加了)</p>
        <p>然后就成功了。。。</p>
        <p>圆满了。。。</p>
        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[1]}>1. Oracle存储过程请求WebService并解析返回报文</Link><br/>
          <Link to={urlStates[2]}>2. ORACLE存储过程调用Web Service</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://blog.csdn.net/ruixue0117/article/details/78876039" target="_blank"
             rel="noopener noreferrer">
            1. Oracle存储过程请求WebService并解析返回报文</a><br/>
          <a href="https://www.cnblogs.com/agileai/p/6030612.html" target="_blank"
             rel="noopener noreferrer">
            2. ORACLE存储过程调用Web Service</a><br/>
        </p>
        }
      </div>
    );
  }
}
