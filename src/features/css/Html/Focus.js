import React, { Component } from 'react';

export default class Focus extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="css-focus">
        <div contentEditable="true">
          contentEditable是true就可以编辑啦
        </div>
        <p tabIndex="-1">不能获取焦点</p>
        <p tabIndex="0">获取焦点</p>
        <p tabIndex="66">获取焦点的优先级更高</p>
        <p tabIndex="33">获取焦点的优先级更高(我是第一个获得到焦点的哦)</p>
        <a>没有href</a>
        <br/>
        <br/>
        <a href="">有href(加个样式，不然获取到焦点了也看不出来)</a>
        <br/>
        <br/>
        <input type="text" placeholder="我是input框呀"/>
      </div>
    );
  }
}
