import React, { Component } from 'react';

export default class LinuxC extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="blog-linux-c">
        <p>介绍一下linux系统下文件相关指令</p>
        <h2 id='linux-1'>1. linux文件系统权限</h2>
        <p>Linux中每个文件或者目录都有一组共9个基础权限位，每三位字符被分为一组。</p>
        <p>他们分别是属主U(文件owner)权限位（占三个字符）、用户组权限位G（占三个字符）、其他用户权限位O（占三个字符）；</p>
        <p>比如rwxr-xr-x，在linux中正是这9个字符权限位来控制文件属主、用户组以及其他用户的权限</p>
        <p>有权限 用数字1表示</p>
        <p>r - read 读 100 4</p>
        <p>w - write 写 010 2</p>
        <p>x - execute 操作 001 1</p>
        <p>- 没有权限 用数字0表示</p>
        <p>可以通过数字/字母来更改文件权限</p>
        <p>chmod 777</p>
        <p>+ 添加权限</p>
        <p>- 取消权限</p>
        <p>chmod u+x</p>
        <p>chmod o-w</p>
        <h3 id='-1-1'>1.1. </h3>
        <p></p>
        <p></p>


        <p>cat file1 file2 > file3</p>
      </div>
    );
  }
}
