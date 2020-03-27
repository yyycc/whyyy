import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import PreFormat from '../component/PreFormat';
import code from './code';

export class DockerB extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { fontSize } = this.props.blog;
    const { rm, codes } = code;
    return (
      <div className="blog-docker-b">
        <h1>Docker(1): 变量、函数的声明提升</h1>
        <body style={{ fontSize: `${fontSize}px` }}>

        <h2 id="docker-2-1">1. 拉镜像</h2>
        <p>接下来我想在里面装一个tomcat，把我的axis服务部署在上面</p>
        <p>可以到docker hub上看tomcat的镜像，冒号后面的是他的tag(如果不写tag就默认latest，如果没有latest就会报错)</p>
        <PreFormat content={codes[6]}/>
        <p>拉了茫茫久，终于拉好了，接下来就是用镜像来运行容器啦</p>

        <h2 id="docker-2-2">2. 运行</h2>
        <PreFormat content={codes[7]}/>

        <h2 id="docker-2-3">3. 端口映射</h2>
        <p>第一次我想映射7070，但我本地正在用7070端口，所以报错了，但是容器还是有了，所以先删了容器,然后再运行一次</p>
        <PreFormat content={rm}/>
        <p>删了之后，再运行，再用命令再看一下，果然有了一个有端口映射的tomcat容器</p>
        <PreFormat content={codes[8]}/>

        <h2 id="docker-2-4">4. 进入容器</h2>
        <p>进入tomcat容器</p>
        <PreFormat content={codes[9]}/>
        <p>失败了。。。指令没有任何效果</p>
        <p>呜</p>
        <p>重来</p>
        <p>经过学习了解到</p>
        <p>拉了某个镜像，就要去看这个镜像发布者提供的使用方法，自己猜是猜不到的</p>
        <p>所以就去看。</p>
        <p>这个tomcat默认的启动端口是8080，所以我吧7080和8090映射出来有啥用呢。。。哎</p>
        <PreFormat content={codes[10]}/>
        <p>容器启动之后，在本地用 http://localhost:8888 就可以访问啦，经典的tomcat页面呀</p>
        <p>这个命令是尝试之后最终的命令，跟它提供的不一样，主要是参数不同</p>
        <p>加了 -d 表示容器在后台运行，不然你执行完，就会在控制台输出一堆日志， ctrl + c结束掉之后，tomcat也停掉了</p>
        <p>去掉了 --rm 这个参数加了表示容器停止后自动删除容器，他跟 -d 互斥</p>
        <p>再提一下 -it 也就是 -i 加上 -t，分别指用于控制台交互和支持终端登录</p>
        <p>然后再用exec指令</p>
        <PreFormat content={codes[11]}/>
        <p>成功地进入容器打开终端交互啦</p>
        <p>根据它提供的路径，进入webapps把我的war放进去,然后重启一下</p>
        <PreFormat content={codes[12]}/>
        <p>再访问一下，可以成功访问到我的服务了，棒！</p>


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
)(DockerB);
