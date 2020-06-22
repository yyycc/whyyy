import React, { Component } from 'react';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';
import urls from './urls';

export default class Pm2 extends Component {
  static propTypes = {};

  render() {
    let leaveConfirm = true;
    const { urlStates } = urls;
    return (
      <div className="blog-pm-2">
        <h2 id="node-1">1. pm2</h2>
        <p>用node给我的博客搭了一个后端应用，使用了node+express+mysql来时先数据的增删改查。</p>
        <p>这个我就不在这里细说了，可以去另一篇专门的博客里面看。这边主要讲pm2。</p>
        <p>pm2是一个进程管理工具，主要用来管理node进程，保持应用始终在线</p>
        <h2 id="node-2">2. 安装</h2>
        <p>使用npm安装</p>
        <PreFormat content='npm i -g pm2'/>
        <p>可以指定版本</p>
        <PreFormat content='npm i -g pm2@latest'/>
        <p>使用yarn安装</p>
        <PreFormat content='yarn global add pm2'/>
        <h2 id="node-3">3. 启动</h2>
        <p>一般我们运行一个js，就</p>
        <PreFormat content='node sth.js'/>
        <p>如果是一个http应用的话，就会占用控制台，如果关闭控制台，进程也就结束了。这个时候就可以使用pm2</p>
        <PreFormat content='pm2 start sth.js'/>
        <p>pm2会帮助你管理进程，那么我们的express应用也是一样的。</p>
        <p>进入应用的根目录，执行(这边不详细介绍这个www，同样放在专门的博客里)</p>
        <PreFormat content='pm2 start bin/www'/>
        <p>然后就会自动打出当前的pm2进程，有id，name，status等</p>
        <p>还有配套的停止、删除、重启、查看状态的指令</p>
        <PreFormat content='pm2 stop|delete|restart|status bin/www'/>
        <p>还可以查看某个进程的具体情况</p>
        <PreFormat content='pm2 describe [name]|[id]'/>
        <h2 id="node-4">3. 配置开机自启动</h2>
        <p>执行下面的指令，就会自动在用户目录下的.pm2目录里生成dump.pm2脚本，开机自启动当前的node进程。</p>
        <PreFormat content='pm2 save'/>
        <p>把已启动服务加到systemd中</p>
        <PreFormat content='pm2 startup'/>
        <p>如果不生效，就以sudo执行</p>
        <PreFormat content='sudo pm2 save'/>
        <PreFormat content='sudo pm2 startup'/>
        <p>如果要删除配置好的自启动项目，就执行</p>
        <PreFormat content='pm2 unstartup systemd'/>
        <p>否则，即使删除pm2 delete了，还是会启动服务(待测试)</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. PM2快速入门？</Link><br/>
          <Link to={urlStates[1]}>2. pm2</Link><br/>
          <Link to={urlStates[1]}>3. pm2 设置开机自动启动已启动的服务</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://pm2.keymetrics.io/docs/usage/quick-start/" rel="noopener noreferrer" target="_blank">
            1. PM2快速入门？</a><br/>
          <a href="https://www.jianshu.com/p/e15fd72727fe" rel="noopener noreferrer"
             target="_blank">
            2. pm2</a><br/>
          <a href="https://blog.csdn.net/nickDaDa/article/details/86748712" rel="noopener noreferrer"
             target="_blank">
            3. pm2 设置开机自动启动已启动的服务</a><br/>
        </p>
        }
      </div>
    );
  }
}
