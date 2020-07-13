import React, { Component } from 'react';
import PreFormat from '../../Components/PreFormat/PreFormat';
import code from './code';

export class NginxA extends Component {

  render() {
    const {
        transfer, brew, services, check, yum, tars, install, start, nginxConfig, listen, gzip,
    } = code;
    return (
      <div className="blog-nginx-a">


          <h2 id="nginx-1">1. 搭建nginx</h2>

          <h3 id="nginx-1-1">1.1. mac</h3>
        <p>我的机子是mac的，我本地装了homebrew，所以我本地的nginx使用homebrew安装的</p>
        <PreFormat content={brew}/>
        <p>安装好就可以启动啦(status)</p>
        <PreFormat content={services}/>
        <p>用 http://localhost:8080 就可以访问</p>
        <p>nginx -t 检查配置文件语法，他会返回给你配置文件的目录结构的</p>
        <PreFormat content={check}/>

          <h3 id="nginx-1-2">1.2. centos</h3>
        <p>centos 7的服务器上搭建nginx</p>
        <PreFormat content={yum}/>

          <h3 id="nginx-1-3">1.3. redHat6</h3>
        <p>本来也想用yum的，奈何这个服务器不通外网。。。我q</p>
        <p>所以我就把安装包下载到我本地，然后sftp到服务器上</p>
        <p>nginx的安装包不止nginx，他还有很多依赖模块，包括pcre、zlib、openssl</p>
        <PreFormat content={tars}/>
        <p>这些都下下来，解压，进入文件目录</p>
        <PreFormat content={install}/>
        <p>/usr/local/nginx/sbin/nginx -t 检查配置文件语法</p>
        <p>/usr/local/nginx/sbin/nginx 启动nginx</p>
        <p>这个跟用yum安装是一样的</p>
        <p>可以配置成系统服务启动</p>
        <PreFormat content={start}/>


          <h2 id="nginx-2">2. nginx部署前端项目</h2>
        <p>安装完了，就来说使用吧，nginx搭建非常的容易，用他来实现各种代理，主要就是写配置文件nginx.conf</p>
        <p>我的blog就是部署在nginx上的，之前搭的vue项目，也部署在nginx上，这样我们就不需要在控制台运行项目啦。</p>
        <p>配置文件主要是这么一个结构</p>
        <p>这个配置问题，一定记得加分号，每次都是因为忘记;然后就报错。。。</p>
        <PreFormat content={nginxConfig} className='xml'/>
        <p>listen是监听的端口，配多个server就可以监听多个端口，server_name是服务名，可以随意取。</p>
        <p>我本地的nginx是监听了8091端口，部署了blog，8092端口会显示cyy.html。配置分别如下</p>
        <PreFormat content={listen}/>
        <p>alias和root后面都是目录，我blog的index.html，就在nginx(/usr/local/Cellar/nginx/1.15.8/html)html/public目录下,</p>
        <p>cyy.html是我自己新建的就在html下，这个文件夹里面一开始就会生成50x.html、index.html，刚安装好访问的时候就是访问这个index.html。</p><br/>
        <p>之前还在服务器上用nginx部署过vue服务</p>


          <h2 id="nginx-3">3. 转发</h2>
        <p>之前项目上有一个任务，是调接口的时候要做一个转发，因为生产服务器在内网，访问不了外网，要调用的服务在外网。</p>
        <p>需要从生产先发请求到中间区域，从中间区域接受请求转发到外网服务。</p>
        <PreFormat content={transfer}/>

          <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-07-10</p>

          <h2 id="nginx-4">4. 性能优化</h2>
          <p>react搭建的web服务放到服务器上(nginx部署)之后，第一次访问首页很慢，要等很久才会加载出来，然后背景图片还要再等很久才能完全加载出来。</p>
          <p>看了一下network，主要是呢个main.***.js比较大加载慢(大概要6秒以上)，然后背景图片也很大，要加载更久。</p>
          <p>虽说这个图片加载可以无视，不影响操作，但是看着确实不爽。所以就把图片压缩了。。。</p>
          <p>这都不是重点，重点是如何用nginx来做这个静态资源下载速度优化</p>
          <PreFormat content={gzip}/>
          <p>其他是部署的时候配置的，gzip那几行是这次的优化配置。</p>
          <p>配置好后重启一下nginx</p>
          <p>再看一下network，js已经被压缩了只有1M多，加载大概2、3秒，比之前快了不少。</p>


      </div>
    );
  }
}

export default NginxA;
