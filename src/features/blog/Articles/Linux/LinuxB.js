import React, { Component } from 'react';
import code from './code';
import urls from './urls';
import PreFormat from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';

export class LinuxB extends Component {

  render() {
    const { codes } = code;
    let leaveConfirm = true;
    const { urlStates } = urls;
    return (
      <div className="blog-linux-b">
        <p>记录一下linux中常用的指令</p><p></p>

        <h2 id="linux-2-1">1. netstat</h2>
        <p>查看端口占用情况</p>
        <PreFormat content={codes[1]}/>

        <h2 id="linux-2-2">2. find</h2>
        <p>在 当前目录下，查找所有内容包含‘abc’的文件</p>
        <PreFormat content={codes[2]}/>

        <p>在当前目录下，查找所有文件名以my开头的文件</p>
        <PreFormat content={codes[3]}/>

        <p>在当前文件夹下所有文件中(*)找包含'指定的内容'的文件输出文件名</p>
        <PreFormat content={codes[4]}/>

        <h2 id="linux-2-3">3. env</h2>
        <p>看环境变量</p>

        <h2 id="linux-2-4">4. whereis</h2>
        <p>搜索程序名</p>

        <h2 id="linux-2-5">5. which</h2>
        <p>搜索系统命令</p>

        <h2 id="linux-2-6">6. lsnrctl</h2>
        <p>oracle中设置监听器指令 +[status]/[start]/[stop]</p>

        <h2 id="linux-2-7">7. tar</h2>
        <p>打成tar包</p>
        <PreFormat content={codes[5]}/>
        <p>解压tar包</p>
        <PreFormat content={codes[6]}/>
        <p>如果要操作.tar.gz的压缩包，就多加一个z指令</p>

        <h2 id="linux-2-8">8. ></h2>
        <p>将指令的输出放进文件</p>
        <PreFormat content={codes[7]}/>
        <p>当前目录就会出现config文件，里面是git配置内容</p>

        <h2 id="linux-2-9">9. echo</h2>
        <p>输出cyy</p>
        <p>echo cyy</p>
        <p>输出黄底 红色的 ever</p>
        <PreFormat content={codes[8]}/>

        <h2 id="linux-2-10">10. find</h2>
        <p>找到当前目录(包括所有子目录)下的所有 .DS_Store，并删除</p>
        <PreFormat content='find .  -name ".DS_Store" -exec rm -rf {} \;  '/>
        <p>find： Linux的查找命令，用户查找指定条件的文件</p>
        <p>.： 当前目录</p>
        <p>".DS_Store"： 目标文件</p>
        <p>-exec： 选项</p>
        <p>rm -rf： 强制删除文件，包括目录</p>
        <p>{} \; ： 固定写法，一对大括号+空格+\</p>


        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. Linux xargs 命令</Link><br/>
          <Link to={urlStates[1]}>1. linux的一个find命令rm删除某目录下所有子目录 中的某类文件</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://www.runoob.com/linux/linux-comm-xargs.html" rel="noopener noreferrer" target="_blank">
            1. Linux xargs 命令</a><br/>
          <a href="https://blog.csdn.net/tiankongtiankong01/article/details/79174161" rel="noopener noreferrer"
             target="_blank">
            1. linux的一个find命令rm删除某目录下所有子目录 中的某类文件</a><br/>
        </p>
        }
      </div>
    );
  }
}

export default LinuxB;
