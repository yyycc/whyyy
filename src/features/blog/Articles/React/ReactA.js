import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';
import pack from '../../../../images/package.png';
import urls from './urls';
import { Link } from 'react-router-dom';

export class ReactA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { urlStates } = urls;
    const { codes, json, dependencies, scripts, json_server, json_route, less, rekit } = code;
    const { fontSize, leaveConfirm } = this.props.blog;
    return (
      <div className="blog-react-a">
        <h1>react(1): 利用rekit脚手架搭建react项目</h1>
        <article style={{ fontSize: `${fontSize}px` }}>
          <p>2019年的最后一天。</p>
          <p>好久没写博客了，真的是从善如流，从恶如崩。</p>
          <p>今年最大的收获应该是学习了react吧，虽然才入了个门，不记录一下，可能过完年就忘光了。。。</p>

          <h2 id="react-1-1">1. 环境</h2>
          <p>rekit脚手架搭建的react。</p>
          <p>node.js v12.13.1</p>
          <p>npm 6.12.1</p>

          <p>webpack</p>
          <p>redux</p>
          <p>router</p>
          <p>antd</p>
          <p>axios</p>
          <p>json-server</p>

          <h2 id="react-1-2">2. 目录结构</h2>
          <p>根目录：/rekit-app</p>

          <h3 id="react-1-2-1">2.1. package.json</h3>
          <PreFormat content={codes[0]}/>
          <p>就可以生成这个文件，下面就是我初始化的一个package.json。</p>
          <p>他是一个json对象，记录了项目的一些基本信息等等</p>
          <PreFormat content={json}/>

          <p>下面具体介绍一下，rekit项目的package.json文件,几个主要部分：dependencies，scripts，devDependencies等</p>
          <div className="blog-react-a-img">
            <img src={pack} alt="package.json"/>
            <p>图1. package.json</p>
          </div>

          <h4>dependencies</h4>
          <p>如下，是我项目的依赖，模块名+版本范围</p>
          <p>dependencies是项目运行依赖的模块，devDependencies是项目开发依赖的模块。</p>
          <p>也就是devDependencies并不会被打进生产的包里。</p>
          <p>安装依赖包的时候 --save就会写入dependencies中，--save-dev就会写入devDependencies中</p>
          <PreFormat content={dependencies}/>

          <h4>scripts</h4>
          <p>script中定义脚本命令</p>
          <p>当我执行比如</p>
          <PreFormat content={codes[1]}/>
          <p>的时候，就相当于执行了</p>
          <PreFormat content={codes[2]}/>
          <p>其中start可以直接写</p>
          <PreFormat content={codes[3]}/>

          <PreFormat content={scripts}/>
          <p>可以看到start后面的指令有两部分，我这边是为了在启动项目的同时，把json-server也启动，所以用到了concurrently</p>
          <p>json-server是一个可以在前端运行，返回json数据的服务。用来提供前端测试数据还是不错的。</p>
          <PreFormat content={codes[4]}/>

          <p>然后修改package.json中script：</p>
          <PreFormat content={json_server}/>


          <h4>rekit</h4>
          <p>这里配置了启动端口，可以在start.js中获取到，项目就会在你指定的端口下启动。</p>
          <PreFormat content={rekit}/>

          <p>当然啦，用 rekit creat app-name 创建一个rekit项目，这些他都帮你配置好了，可以直接开始业务代码的编写。</p>

          <h3 id="react-1-2-2">2.2. /src</h3>
          <p>所有的文件都放在这个目录下面</p>

          <h4>index.js</h4>
          <p>这是项目的入口文件，将资源都挂载到root节点上。</p>
          <p>rekit中，他加载了Root组件，这个组件接收store和routeConfig，主要就是为了加载路由</p>
          <PreFormat content={codes[5]}/>

          <h4>/common/routeConfig.js</h4>
          <p>不同feature的子路由都集中定义在这里</p>
          <p>使用json方式定义路由、使用renderRouteConfigV3解析json，转换成react声明式语法</p>
          <PreFormat content={json_route}/>

          <h4>Root.js</h4>
          <p>这里定义了index.js中加载的Root组件，他调用了Root渲染函数renderRouteConfigV3解析json，转换成react声明式语法。</p>

          <h4>/images & /styles</h4>
          <p>images不说了，就是放图片，styles下主要有global.less以及index.less</p>
          <p>global中定义一些全局的样式，而index.less中引入global.less以及每个feature中定义的style.less</p>
          <PreFormat content={less}/>

          <h4>/common</h4>
          <p>除了上面说的routeConfig.js集中定义各个feature的路由，还有</p>
          <p>rootReducer.js集中定义各个feature的reducer</p>

          <h4>/features</h4>
          <p>这是最重要的啦，之前说的feature就是他，features中就是项目的各个功能。</p>
          <h2 id="Z-参考">Z. 参考</h2>
          {leaveConfirm && <p>
            <Link to={urlStates[0]}>1. 配置package.json 使一次npm run start 执行两个指令或者多个指令</Link><br/>
          </p>}
          {!leaveConfirm &&
          <p>
            <a href="https://blog.csdn.net/zhaofuqiangmycomm/article/details/78702125" target="_blank"
               rel="noopener noreferrer">
              1. 配置package.json 使一次npm run start 执行两个指令或者多个指令</a><br/>
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
)(ReactA);
