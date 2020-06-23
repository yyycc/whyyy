import React, { Component } from 'react';
import code from './code';
import urls from './urls';
import { Link } from 'react-router-dom';
import PreFormat from '../../Components/PreFormat/PreFormat';

export class Ntfs extends Component {

  render() {
    let leaveConfirm = true;
    const { codes } = code;
    const { urlStates } = urls;
    return (
      <div className="blog-ntfs">
        <h2 id="mac-1-1">1. 问题</h2>
        <p>MacBook连移动硬盘发现文件复制不进去，拖也拖不进去。。。</p>

        <h2 id="mac-1-2">2. 原因</h2>
        <p>学术方面的解释是：因为移动硬盘或 U 盘是使用 Windows 系统下的 NTFS 分区格式，</p>
        <p>而 Mac 系统原生是不支持这种格式的，也就是为什么不能向硬盘里拷贝资料的原因。</p>

        <h2 id="max-1-3">3. 解决</h2>
        <p>百度到一个方法，链接在参考中，成功的复制了文件。</p>
        <p>这边简述一下：</p>
        <p>我的设备默认在/Volumes/ever</p>
        <p>查看硬盘挂在的节点Device Node:</p>
        <PreFormat content={codes[0]}/>
        <p>查出来是</p>
        <PreFormat content={codes[1]}/>

        <p>然后用下面的命令将硬盘弹出，但是不要拔掉移动硬盘连接</p>
        <PreFormat content={codes[2]}/>

        <p>构建一个目录</p>
        <PreFormat content={codes[3]}/>

        <p>将NTFS硬盘 挂载 mount 到mac</p>
        <PreFormat content={codes[4]}/>

        <p>这时候就可以拷贝文件啦，用cp指令就可以了</p>
        <p>最后将NTFS硬盘从 mac 上卸载 umount</p>
        <PreFormat content={codes[5]}/>

        <h2 id="max-1-4">4. NTFS</h2>
        <p>发现了另一个一劳永逸的方法</p>
        <p>安装Paragon NTFS For Mac or 赤友NTFS助手</p>
        <p>目前最优秀的NTFS分区驱动软件，安后相当于装了一个支持读写NTFS格式的驱动程序，以后就可以自由的读写移动硬盘和U盘啦。</p>
        <p>但是会过期。。。</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1.Mac上挂载移动硬盘出现"Read-only file system"问题</Link><br/>
          <Link to={urlStates[1]}>2.macbook为什么无法向移动硬盘复制文件？因为你缺少这个软件！</Link><br/>
          <Link to={urlStates[2]}>3.赤友NTFS助手</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://blog.csdn.net/sayoko06/article/details/79164858" target="_blank"
             rel="noopener noreferrer">
            1.Mac上挂载移动硬盘出现"Read-only file system"问题</a><br/>
          <a href="https://www.cnblogs.com/happyday56/p/8906443.html" target="_blank"
             rel="noopener noreferrer">1.macbook为什么无法向移动硬盘复制文件？因为你缺少这个软件！</a>
          <a href="https://aibotech.cn/ad/ntfs-mac.html" target="_blank"
             rel="noopener noreferrer">3.赤友NTFS助手</a>
        </p>
        }
      </div>
    );
  }
}

export default Ntfs;
