import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import code from './code';
import PreFormat from '../component/PreFormat';

export class DockerA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { fontSize } = this.props.blog;
    const { docker, ssh, codes, yum } = code;
    return (
      <div className="blog-docker-a">
        <h1>docker(1): 其实就为了装oracle数据库</h1>
        <body style={{ fontSize: `${fontSize}px` }}>

        <h2 id="docker-1-1">1. docker中启动数据库</h2>
        <p>今天早上，um。。。又是无所事事的一个早上，研究了一些乱七八糟的东西，研着研着就到了docker</p>
        <p>自从装了docker之后(小哥哥装的。。。)，每天打开电脑第一件事就是</p>
        <PreFormat content={docker}/>
        <p>启动oracle数据库，之后就不理睬docker了。</p>

        <h2 id="docker-1-2">2. 进入容器</h2>
        <p>还有需要导入数据库的时候</p>
        <PreFormat content={ssh}/>
        <p>然后执行一系列oracle命令</p><br/>
        <p>从来也没有仔细研究过docker，这样一想，还是蛮对不起这只可爱的小鲸鱼的。</p><br/>
        <p>然而今天我连上docker之后，突然看到了这句话(以前一直没注意，我是瞎么)</p><br/>
        <p>Welcome to Ubuntu 14.04.1 LTS</p><br/>
        <p>哇，我家docker的操作系统是Ubuntu啊,怪不得我一直应ssh连接。。。</p><br/>
        <p>(补充一下[2019-11-11]：上面说docker的操作系统是Ubuntu是不对的，docker是一个容器引擎，它不是模拟一个完整的操作系统。</p>
        <p>所以我的docker中只有一个容器：oracle，只不过这个oracle是基于Ubuntu环境的，这是由image制作者决定的，</p>
        <p>而我能够用ssh访问容器是因为，制作者将这个功能开放出来了，不然的话，就需要用 </p>
        <PreFormat content={codes[5]}/>
        <p>在容器中运行command，来访问容器了。所以其实这篇日志跟docker关系不大。。。</p>
        <p>本来我以为docker带操作系统，我要运行tomcat还要装JDK，但其实操作系统、tomcat、JDK等等全都封装再一个镜像中，</p>
        <p>运行后就是一个独立的容器，跟原有的oracle容器是完全隔离互不影响的。)</p><br/>
        <p>所以我会什么一直要用这么一长串鬼东西登录呢，还要输密码，我的ssh免密钥登录日志是白写的么</p>
        <PreFormat content={codes[0]}/>

        <h2 id="docker-1-3">3. 配置ssh免密登录</h2>
        <p>于是，实战开始。</p>
        <p>首先是配置文件(/etc/ssh/sshd_config),看了一下只需要把AuthorizedKeysFile属性的注释符去掉就行了，这边看到他是这样的</p>
        <PreFormat content={codes[1]}/>
        <p>%h就相当于～</p>
        <p>这边我用vi想去掉注释的时候发现删除键以及上下左右键都不听话，网上说用vim，</p>
        <p>于是</p>
        <PreFormat content={yum}/>
        <p>经历了漫长的等待，终于装好了。。。</p>
        <p>去掉注释之后，重启一下ssh服务</p>
        <PreFormat content={codes[2]}/>
        <p>之后ssh连接就断开了，直接再连也连不上，我重启了一下docker就连上了</p>
        <p>之后就是公钥和密钥了，进入/etc/ssh目录，我看到好多对公钥和密钥，我就选了一对，把公钥放到～/.ssh目录，重命名为authorized_keys，</p>
        <p>把私钥copy到我本地，再在本地~/.ssh目录的config里面配置一下。这边端口配49160。</p>
        <p>ssh的端口是22，我这边docker映射出来的是49160。</p>
        <PreFormat content={codes[3]}/>
        <p>就直接登录啦，美滋滋～～</p><br/>

        <h2 id="docker-1-4">4. docker cp</h2>
        <p>这边提一下docker容器和本地复制文件的命令</p>
        <PreFormat content={codes[4]}/>
        <p>这里的oracle是我的容器的名字</p>
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
)(DockerA);
