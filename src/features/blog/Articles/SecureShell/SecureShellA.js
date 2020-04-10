import React, { Component } from 'react';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';

export class SecureShellA extends Component {
  static propTypes = {};

  render() {
    const { config, localConfig, codes } = code;
    return (
      <div className="blog-secure-shell-a">
        <h2 id="ssh-1-1">1. 配置文件</h2>
        <p>进入服务器</p>
        <PreFormat content={codes[0]}/>
        <p>找到以下内容并且把注释符 # 删掉：</p>
        <PreFormat content={config}/>
        <p>然后重启sshd服务：</p>
        <PreFormat content={codes[1]}/>

        <h2 id="ssh-1-2">2. 生成ssh key</h2>
        <p>因为我原来就有ssh，所以～目录下有.ssh文件夹，里面有authorized_keys文件，内容是以ssh-rsa打头的公钥，将其备份一下(其实不需要了可以删掉)。</p>
        <p>生成新的ssh key：</p>
        <PreFormat content={codes[2]}/>
        <p>之后的提示都直接回车，默认会在～/.ssh目录下生成id_rsa私钥、id_rsa.pub公钥两个文件,known_hosts文件会记录ssh密钥登陆的主机列表。</p>

        <h2 id="ssh-1-3">3. 将公钥导入认证文件</h2>
        <p>之前，我们将 AuthorizedKeysFile .ssh/authorized_keys 这句话启用，就是将.ssh目录下的authorized_keys作为认证文件，</p>
        <p>现在我们换了新的ssh key，就把新生成的id_rsa.pub公钥复制到.ssh目录下，并改名为authorized_keys。</p>

        <h2 id="ssh-1-4">4. 本地配置</h2>
        <p>将密钥从服务器复制到本地</p>
        <PreFormat content={codes[3]}/>
        <p>在本地～目录下新建.ssh文件夹，进入该文件夹，新建config文件，写入这段配置：</p>
        <PreFormat content={localConfig}/>
        <p>然后 ssh ever 就可以免密登录我的服务器啦！</p>
        <p>ps 如果不免密登录，也可以在config里面配置除了IdentityFile以外的属性，登录的时候就可以不用写ip和登录用户啦。</p>
      </div>
    );
  }
}

export default SecureShellA;
