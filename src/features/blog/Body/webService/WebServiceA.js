import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import SimpleTable from '../component/SimpleTable';
import PreFormat from '../component/PreFormat';
import code from './code';
import tableCode from './tableCode';

export class WebServiceA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { pom, dependency, show, web, spring } = code;
    const { annotate, annotateTitles, annotateName } = tableCode;
    const { fontSize } = this.props.blog;

    return (
      <div className="blog-web-service-a">
        <h1>web service(1): spring + cxf 发布web service</h1>
        <body style={{ fontSize: `${fontSize}px` }}>
        <p>今天又差点被web service搞崩溃，起因是在跟客户联调的时候报错：</p>
        <p>Couldn’t create soap message. Expecting Envelop in namespace http://www.w3.org/2003/05/soap-envelope</p>
        <p>but got http://schemas.xmlsoap.org/soap/envelope/</p>
        <p>(这还是他们提供的，说什么报文一定要一模一样，我真是不想吐槽。。。)</p>
        <p>经过一番百度，终于搞明白了是soap协议不一致导致的，前者是soap1.1，后者是soap1.2</p>
        <p>我们这边的服务使用Axis搭建的，我各种百度怎么改协议都失败了，这个需要之后继续研究。</p>
        <p>一气之下关了所有窗口，自己重写一个web service。</p>
        <p>之前用Endpoint.publish(<em>address, new MyFirstWebService()</em>)方法发布过web service，一直想用cxf框架搭一个，这次就用cxf吧。</p>
        <h2 id="webService-1-1">1. 准备</h2>
        <p>IDE工具：idea</p>
        <h2 id="webService-1-2">2. 搭建</h2>
        <h3 id="webService-1-2-1">2.1. 创建maven项目</h3>
        <p>先新建一个 maven project，创建出来后，会有一个pom.xml，这是maven项目的配置文件：</p>
        <PreFormat content={pom}/>
        <p>这边packaging配了war，就可以直接用maven的package指令打war包，name是项目的名字，version是版本号，finalName是war包包名可以看打包时候的部分输出</p>
        <pre>
          [INFO] ------------------------------&lt; core:ws &gt;-------------------------------<br/>
          [INFO] Building My Cxf Web Service 1.0-SNAPSHOT<br/>
          [INFO] --------------------------------[ war ]---------------------------------<br/>
        </pre>
        <h3 id="webService-1-2-2">2.2. 导入jar包</h3>
        <p>在pom中引入cxf的jar包：</p>
        <PreFormat content={dependency}/>
        <h3 id="webService-1-2-3">2.3. 接口类</h3>
        <p>接下去就可以写相关接口类和实现类啦，下面是一个简单的接口类，用@WebService和@WebMethod注解(必要的)</p>
        <PreFormat content={show}/>
        <h3 id="webService-1-2-4">2.4. 注解</h3>
        <p>还有别的一些注解</p>
        <SimpleTable titles={annotateTitles} data={annotate} name={annotateName}/>
        <p>这些后续测试访问的时候再提</p>
        <h3 id="webService-1-2-5">2.5. 配置web.xml</h3>
        <p>接下来就是配置web.xml</p>
        <p>WEB-INF/web.xml</p>
        <PreFormat content={web}/>
        <h3 id="webService-1-2-6">2.6. 配置cxf</h3>
        <p>然后是spring配置</p>
        <p>WEB-INF/spring/cxf-beans.xml</p>
        <PreFormat content={spring}/><br/>
        <h3 id="webService-1-2-7">2.7. 部署启动</h3>
        <p>配置好了，就可以部署在tomcat上跑起来啦，通过http://localhost:7070/ws/webservice/one?wsdl进行访问。</p>
        </body>
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
)(WebServiceA);

