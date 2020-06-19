import React, { Component } from 'react';
import urls from './urls';
import { Link } from 'react-router-dom';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

export default class DockerC extends Component {
  static propTypes = {};

  render() {
    const { rpm, docker_codes } = code;
    const leaveConfirm = true;
    const { urlStates } = urls;
    return (
      <div className="blog-docker-c">
        <h2 id="docker-1">1. oracle啊</h2>
        <p>客户最近换服务器，生产换了，测试环境也要换，生产找的我们公司专业dba来装的，测试环境。。。就轮到我装了。。。</p>
        <p>离线安装</p>
        <p>一开始用oracle安装包装，奈何遇到的问题解决不了。。。于是决定用docker</p>
        <h2 id="docker-2">2. centOS7离线安装docker</h2>
        <a href="https://download.docker.com/linux/centos/7/x86_64/stable/Packages/" rel="noopener noreferrer"
           target="_blank">
          &nbsp;&nbsp;安装包下载地址</a><br/>
        <a href="http://mirrors.163.com/centos/7/os/x86_64/Packages/" rel="noopener noreferrer"
           target="_blank">
          &nbsp;&nbsp;依赖包下载地址</a>
        <p>首先把安装包、依赖包统统下载下来</p>
        <ol>
          <p>安装包：</p>
          <li>docker-ce-18.03.1.ce-1.el7.centos.x86_64.rpm</li>
          <p>依赖：</p>
          <li>container-selinux-2.9-4.el7.noarch.rpm(自己寻找一下)</li>
          <li>audit-libs-python-2.8.5-4.el7.x86_64.rpm</li>
          <li>checkpolicy-2.5-8.el7.x86_64.rpm</li>
          <li>libcgroup-0.41-21.el7.x86_64.rpm</li>
          <li>libseccomp-2.3.1-4.el7.x86_64.rpm</li>
          <li>libsemanage-python-2.5-14.el7.x86_64.rpm</li>
          <li>libtool-ltdl-2.4.2-22.el7_3.x86_64.rpm</li>
          <li><a
            href="https://links.jianshu.com/go?to=http%3A%2F%2Fmirror.centos.org%2Fcentos%2F7%2Fextras%2Fx86_64%2FPackages%2Fpigz-2.3.3-1.el7.centos.x86_64.rpm"
            rel="noopener noreferrer"
            target="_blank">
            pigz-2.3.3-1.el7.centos.x86_64.rpm(附下载地址)</a></li>
          <li>policycoreutils-python-2.5-34.el7.x86_64.rpm</li>
          <li>python-IPy-0.75-6.el7.noarch.rpm</li>
          <li>setools-libs-3.3.8-4.el7.x86_64.rpm</li>
        </ol>
        <p>创建一个目录，我这边是/home/docker</p>
        <p>安装包和container-这两个放在/home/docker下，另外的放在/home/docker/package下</p>
        <p>在package目录下批量安装依赖包：</p>
        <PreFormat content={rpm[0]}/>
        <p>在docker目录下安装container-selinux-2.9-4.el7.noarch.rpm</p>
        <PreFormat content={rpm[1]}/>
        <p>在docker目录下安装docker</p>
        <PreFormat content={rpm[2]}/>
        <p>启动docker</p>
        <PreFormat content={rpm[3]}/>
        <p>查看docker启动容器列表</p>
        <PreFormat content={rpm[4]}/>
        <p>到此为止，docker就安装并且成功启动啦～</p>


        <h2 id="docker-3">3. docker离线安装oracle</h2>
        <p>首先要获取镜像，docker pull在服务器上是用不了了</p>
        <p>所以现在本地拉取oracle镜像</p>
        <PreFormat content={docker_codes[0]}/>
        <p>:后面加tag，不写默认latest(如果没有latest就会报错)</p>
        <p>当然啦，鉴于我本地oracle就是docker装的，我本地已经有了oracle镜像的，可以看一下。</p>
        <PreFormat content={docker_codes[1]}/>
        <p>可以看到我本地有两个镜像，一个oracle一个tomcat，REPOSITORY是gautamsaggar/oracle11g(参考5的镜像)</p>
        <p>保存镜像</p>
        <PreFormat content={docker_codes[2]}/>
        <p>把oracle_11g.tar传到服务器上</p>
        <p>在服务器上装载镜像</p>
        <PreFormat content={docker_codes[3]}/>
        <p>看一下镜像，有一个IMAGE ID记录一下</p>
        <PreFormat content={docker_codes[1]}/>
        <p>运行容器</p>
        <PreFormat content={docker_codes[4]}/>
        <p>把22端口和1521端口映射出来，22端口使得我们可以通过ssh访问容器，1521是oracle的端口</p>
        <p>到此为止，oracle就装好啦</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. centos7 rpm 离线安装 docker？</Link><br/>
          <Link to={urlStates[1]}>2. Docker镜像保存save、加载load</Link><br/>
          <Link to={urlStates[2]}>3. CentOS7使用docker安装Oracle</Link><br/>
          <Link to={urlStates[3]}>4. docker 无网络环境下使用docker加载镜像</Link><br/>
          <Link to={urlStates[3]}>5. gautamsaggar/oracle11g</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://www.jianshu.com/p/b5b35c0a00ee" rel="noopener noreferrer" target="_blank">
            1. centos7 rpm 离线安装 docker？</a><br/>
          <a href="https://www.cnblogs.com/yshyee/p/7258477.html" rel="noopener noreferrer"
             target="_blank">
            2. Docker镜像保存save、加载load</a><br/>
          <a href="https://www.jianshu.com/p/b5b35c0a00ee" rel="noopener noreferrer" target="_blank">
            3. CentOS7使用docker安装Oracle</a><br/>
          <a href="https://blog.csdn.net/jwy2014/article/details/84074833" rel="noopener noreferrer" target="_blank">
            4. docker 无网络环境下使用docker加载镜像</a><br/>
          <a href="https://hub.docker.com/r/gautamsaggar/oracle11g" rel="noopener noreferrer" target="_blank">
            5. gautamsaggar/oracle11g</a><br/>
        </p>
        }
      </div>
    );
  }
}
