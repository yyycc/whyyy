import React, { Component } from 'react';
import promote from '../../../../images/promote.png';

export class Promote extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="blog-java-script">
        <div className="blog-java-script-img">
          <img src={promote} alt="promote"/>
          <p>图1. function</p>
        </div>
        <p>搜console控制台如何换行的时候(shift + enter),看到这样一张图，乍一看就很懵〇。。。</p>
        <h2 id="javaScript-2-1">1. 运行结果</h2>
        <p>首先，运行结束后a的值是多少：</p>
        <p>我的第一反应是5。。。居然是5，哎，傻*</p>
        <p>显然是1，因为函数中是 var a = 5 而不是 a = 5</p>
        <p>外部定义的a是全局变量，也就是定义在window对象中</p>
        <p>而函数内部定义的是局部变量</p>
        <p>所以运行完 var a = 5，函数内部作用域里面其实存在两个a</p>
        <p>一个 a = 5，另一个 window.a = 1</p>
        <p>而函数运行完后，所有局部变量都会被回收，只剩下了window.a = 1</p>
        <h2 id="javaScript-2-2">2. 提升</h2>
        <p>那么为什么console.log(a)是undefined，换言之，为什么进入函数后a是undefined了呢</p>
        <p>这就涉及另一个知识，叫做提升</p>
        <pre>b = 2;<br/>
        var b;<br/>
        console.log(b)</pre>
        <p>运行这么一段你会发现输出是2</p>
        <p>为什么呢</p>
        <p>var b;不会覆盖b = 2的声明么，答案是不会的</p>
        <p>在js中函数声明和变量声明都会被提升到头部</p>
        <p>也就是你可以先用，再声明(虽然这样做不好，请不要这样做，重复，请不要这样做)</p>
        <p>所以其实当你进入函数b的时候，首先运行的是</p>
        <pre>var a;</pre>
        <p>这个时候a的值是undefined，因为上面我们说了，函数中的a跟外面的a其实不是同一个，只不过名字一样而已</p>
        <p>函数中var a;是重新定义了一个变量</p>
        <p>所以此时运行console.log(a),打印的值即undefined。</p>
      </div>
    );
  }
}

export default Promote;
