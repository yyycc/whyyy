import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import code from './code';
import tableCode from './tableCode';
import urls from './urls';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';
import { Link } from 'react-router-dom';

export class WebServiceB extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const {
      commandReport, generatedReport, packageInfo,
      interceptorDefinition, inPreProtocolInterceptor, inReceiveInterceptor, outPreStreamInterceptor,
    } = code;
    const {
      inInterceptorTitles, inInterceptor, inInterceptorName,
      outInterceptorTitles, outInterceptor, outInterceptorName,
    } = tableCode;
    const { urlStates } = urls;
    const { fontSize, leaveConfirm } = this.props.blog;
    return (
      <div className="blog-web-service-b">
        <h1>web service(2): spring + cxf 发布web service相关问题解决</h1>
        <article style={{ fontSize: `${fontSize}px` }}>
          <p>这个项目的接口，断断续续做了3个月了，从一开始的一脸懵逼，到现在的一知半解。。。</p>
          <h2 id="webService-2-1">1. 问题描述</h2>
          <h3 id="webService-2-1-1">1.1. 命名空间</h3>
          <p>以系统简称作为命名空间，并且要求body下每个节点前面都有命名空间前缀</p>
          <p>那么我遇到了什么问题呢</p>
          <p>首先我们这个系统简称有点长，有6个字母，生成的报文前缀直接给我截取成了3个字母。。。</p>
          <p>其次就是每个节点前都要加命名空间前缀，让我好一番折腾</p>
          <h3 id="webService-2-1-2">1.2. 节点要求</h3>
          <p>Body中第一层应使用输入数据模型根节点信息，即服务方法名+"Request"。</p>
          <p>而我生成的第一层永远是方法名，第二层才是数据模型。</p>
          <h3 id="webService-2-1-3">1.3. header</h3>
          <p>服务请求报文在Header中添加服务安全验证信息</p>
          <p>想校验安全信息，找不到Header。。。</p><br/>
          <p>每每回想起那审查后的十大问题，我都觉得要是到时候报文不严格按照这个来，都对不起我这么久的研究</p>
          <p>IDE工具：idea</p>
          <h2 id="webService-2-2">2. 解决方法</h2>
          <p>先上报文，要求是这样的</p>
          <PreFormat content={commandReport}/>
          <p>我只能生成这样的</p>
          <PreFormat content={generatedReport}/>
          <p>先说说这样的是怎么生成的</p>
          <h3 id="webService-2-2-1">2.1. 命名空间</h3>
          <p>在接口方法上加注释(这样就会有xmlns，security，request前面会有命名空间)</p>
          <p>@WebService(targetNamespace = "http://qwerty.com")</p><br/>
          <p>在方法参数上加注释(这样方法名前面就会有命名空间)</p>
          <p>@XmlElement(required = true, namespace = "http://qwerty.com") @WebParam(name = "functionNameRequest",
            partName = "functionNameRequest")</p>
          <p>FunctionNameRequest functionNameRequest</p><br/>
          <p>要在对象每个属性前面加命名空间前缀有两个方法：</p>
          <p>在属性的get方法上加</p>
          <p>@XmlElement(namespace = "http://qwerty.com")</p>
          <p>但是必须每个都加，才能实现每个节点都有</p><br/>
          <p>或者FunctionNameRequest对象目录下新增文件 package-info.java</p>
          <PreFormat content={packageInfo}/>
          <h3 id="webService-2-2-2">2.2. 节点要求</h3>
          <p>。。。失败了</p>
          <h3 id="webService-2-2-3">2.3. header</h3>
          <p>在请求接口方法中添加</p>
          <p>@XmlElement(required = true) @WebParam(name = "security", header = true) InHeaderMessage
            inHeaderMessage</p>
          <p>加了@XmlElement(required = true)就不会有被注释了的 Optional: 了。</p>
          <h2 id="webService-2-3">3. 拦截器</h2>
          <p>最后来说说解决一切烦恼的拦截器吧。</p>
          <h3 id="webService-2-3-1">3.1. 定义</h3>
          <p>在web service(1): spring + cxf 发布web service</p>
          <p>中，已经说过发布接口需要配置cxf-beans.xml，拦截器也在这里配置：</p>
          <PreFormat content={interceptorDefinition}/>
          <p>这里配置了两个拦截器，一个输入拦截器，一个输出拦截器</p>
          <h3 id="webService-2-3-2">3.2. 输入阶段</h3>
          <SimpleTable titles={inInterceptorTitles} data={inInterceptor} name={inInterceptorName}/>
          <h3 id="webService-2-3-3">3.3. 输入拦截器</h3>
          <p>修改报文</p>
          <PreFormat content={inReceiveInterceptor}/>
          <p>这样就解决了节点以及命名空间的问题。这里是在RECEIVE，接收阶段处理了报文，且把报文放进了exchange中。</p>
          <p>因为拦截器不同阶段的数据流不同，到输出拦截器的时候是读不到输入的报文的，所以要存起来，便于后面取出来记录日志。</p><br/>
          <p>获取Header信息</p>
          <PreFormat content={inPreProtocolInterceptor}/>
          <p>可以对请求用户进行用户名、密码的校验</p>
          <h3 id="webService-2-3-4">3.4. 输出阶段</h3>
          <SimpleTable titles={outInterceptorTitles} data={outInterceptor} name={outInterceptorName}/>
          <h3 id="webService-2-3-5">3.5. 输出拦截器</h3>
          <p>修改报文、记录日志：</p>
          <PreFormat content={outPreStreamInterceptor}/>
          <p>从exchange中取出请求报文，记录日志。</p>
          <h2 id="Z-参考">Z. 参考</h2>
          {leaveConfirm && <p>
            <Link to={urlStates[0]}>1. cxf拦截器，实现对接收到的报文和发送出去的报文格式自定义</Link><br/>
            <Link to={urlStates[1]}>2. CXF 入门：创建一个基于SOAPHeader的安全验证(CXF拦截器使用)</Link><br/>
            <Link to={urlStates[2]}>3. CXF实战之拦截器Interceptor(四)</Link><br/>
          </p>}
          {!leaveConfirm &&
          <p>
            <a href="https://blog.csdn.net/zhaofuqiangmycomm/article/details/78702125" target="_blank"
               rel="noopener noreferrer">
              1. cxf拦截器，实现对接收到的报文和发送出去的报文格式自定义</a><br/>
            <a href="https://www.iteye.com/blog/jyao-1343722" target="_blank"
               rel="noopener noreferrer">2. CXF 入门：创建一个基于SOAPHeader的安全验证(CXF拦截器使用)</a><br/>
            <a href="https://blog.csdn.net/accountwcx/article/details/47102319" rel="noopener noreferrer"
               target="_blank">
              3. CXF实战之拦截器Interceptor(四)</a>
          </p>
          }
        </article>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WebServiceB);
