import React, { Component } from 'react';
import PreFormat from '../../Components/PreFormat/PreFormat';

export default class InterviewFive extends Component {
  static propTypes = {};

  render() {
    let brace = '{';
    let reg = 'function isUSD(str) {\n' +
      '    var re = /^\\$([1-9]\\d{0,2}(,\\d{3})*|0)(\\.\\d{2})?$/;\n' +
      '    return re.test(str);\n' +
      '}';
    return (
      <div className="blog-interview-five">

        <h2 id='view-1'>1. before</h2>
        <p>我真的害怕面试，归根结底是不够优秀，菜是原罪。</p>
        <p>没时间whining，好好学习吧。</p>


        <h2 id='view-2'>2. some titles</h2>
        <p>1. 静态语言和动态语言(定义、优缺点)</p>
        <p>2. 原型、原型链</p>
        <p>3. this(apply、call、bind)</p>
        <p>4. 作用域、变量的生存周期</p>
        <p>5. 闭包(定义、用处、举例，优缺点)</p>
        <p>6. 高阶函数</p>
        <p>7. 单线程和多线程，js为什么是单线程的</p>
        <p>8. 事件循环</p>
        <p>9. 异步编程</p>
        <p>10. 回调函数的缺点</p>
        <p>11. 函数式编程和面向对象编程</p>
        <p>12. promise</p>
        <h2 id='view-3'>3. some answers</h2>


        <h3 id='view-3-1'>3.1. 静态语言和动态语言</h3>
        <p>定义：</p>
        <p>静态类型语言在编译时便已确定变量的类型，而动态类型语言的变量类型要到程序运行的时候，待变量被赋予某个值之后，才会具有某种类型。</p>
        <details>
          <summary>静态语言优缺点</summary>
          <div>
            <p>优点：</p>
            <p>1. 编译时就能发现类型不匹配的错误，编译器可以帮助我们提前避免程序在运行期间可能发生的一些错误。</p>
            <p>2. 如果在程序中明确规定了数据类型。编译器就可以针对这些信息对程序进行优化工作，提高运行速度。</p>
          </div>
          <div>
            <p>缺点：</p>
            <p>1. 要求按照规定来编写程序，为每个变量规定数据类型，会增加更多代码，这些细节会使得程序员的经历从业务逻辑上分散。</p>
          </div>
        </details>
        <details>
          <summary>动态语言优缺点</summary>
          <div>
            <p>优点：</p>
            <p>1. 代码数量少，看起来更简洁，可以把更多精力放在业务逻辑上。</p>
            <p>2. 编码灵活性更强。因为无需类型检测，所以可以尝试调用对象的任何方法，而无需考虑他们是否被设计拥有该方法。</p>
            <p>examples(不是真正的数组也可以使用数组的push方法)：</p>
            <p>let a = {brace}0: 2, 1: 3, 2: 6, 3: 4, length: 4};</p>
            <p>Array.prototype.push.call(a, 77);</p>
            <p>> a</p>
            <p>{brace}0: 2, 1: 3, 2: 6, 3: 4, 4: 77, length: 5};</p>
          </div>
          <div>
            <p>缺点：</p>
            <p>1. 无法保证变量的类型，运行期间有可能发生与类型相关的错误。</p>
          </div>
        </details>


        <h3 id='view-3-2'>3.2. 原型、原型链</h3>
        <p>javaScript中是没有标准的类的概念的，创建对象需要一个构造函数P，通过构造器new来生成一个对象。</p>
        <p>每个函数都可以作为构造函数，他有一个叫做prototype的属性，这个属性就是对像的原型。</p>
        <p>每个对象都有一个__proto__属性来记录他的原型，但是我们通常不用它来获取原型，而是用Object.getPrototypeOf()。</p>
        <p>当我们定义一个对象属性的引用，我们会从最近的对象上找同名属性，如果有就返回，如果没有就会从对象的原型上找，如果还没有就在找原型的原型，知道找到Object的原型。</p>
        <p>如果还没有，就返回空，因为Object的原型的原型是null，他也是一切对象的根节点。</p>
        <p>这就是原型链</p>
        <h3 id='view-3-3'>3.3. this</h3>
        <p>this在javaScript中有4种情况。</p>
        <ol>
          <li>作为对象的方法调用，this指向这个对象</li>
          <li>作为普通函数调用，this指向顶层对象，window(浏览器)，严格模式下是undefined</li>
          <li>作为构造函数执行，this指向构造函数创建的对象</li>
          <li>Function.prototype.apply和Function.prototype.call中，this指向传入的第一个参数。</li>
          <li>箭头函数中，this默认指向函数定义时所处上下文的(对象的)this指向，而且bind，apply和call也不能改变this的指向</li>
        </ol>
        <h3 id='view-3-4'>3.4. 作用域和变量的生存周期</h3>
        <p></p>
        <h3 id='view-3-5'>3.5. 闭包</h3>
        <p></p>
        <h3 id='view-3-6'>3.6. 高阶函数</h3>
        <p></p>
        <h3 id='view-3-7'>3.7. 单线程和多线程</h3>
        <p></p>
        <h3 id='view-3-8'>3.8. 事件循环</h3>
        <p>tick</p>
        <h3 id='view-3-9'>3.9. 异步编程</h3>
        <p>事件、回调、注册</p>
        <h3 id='view-3-10'>3.10. 回调函数的缺点</h3>
        <p>多层回调</p>
        <h3 id='view-3-11'>3.11. 函数式编程和面向对象编程</h3>
        <p></p>
        <h3 id='view-3-12'>3.12. promise</h3>
        <p></p>

        <h2 id='view-4'>4. 那些我答不上来的面试题</h2>
        <h3 id='view-4-1'>4.1. 常用的BOM属性对象</h3>
        <p>BOM，顾名思义是浏览器对象模型，各家浏览器都开发了很多不同的BOM，其中公共的就成了，BOM标准。</p>
        <p>核心：window</p>
        <p>这是浏览器提供的javaScript访问浏览器的接口对象。</p>
        <p>浏览器窗口大小(screenTop)，浏览器窗口距屏幕边缘的举例(screenTop/screenY，screenLeft/screenX)，浏览器窗口位置、移动浏览器窗口(move)、改变窗口大小等等(resize)。</p>
        <p>window.open打开浏览器窗口。</p>
        <p>弹窗alert、confirm、prompt还有find、print等</p>

        <p>location</p>
        <p>包含当前URL的信息，hash、host、hostname、protocol、port、searchParam等。</p>

        <p>history</p>
        <p>访问的历史记录</p>
        <p>.go()/.back()/.forward()</p>
        <p>navigator</p>
        <p>浏览器信息</p>
        <h3 id='view-4-2'>4.2. 事件捕获、冒泡、委托</h3>


        <h3 id='view-4-3'>4.3. 正则</h3>
        <p>题目</p>
        <p>给定字符串 str，检查其是否符合美元书写格式</p>
        <p>1、以 $ 开始</p>
        <p>2、整数部分，从个位起，满 3 个数字用 , 分隔</p>
        <p>3、如果为小数，则小数部分长度为 2</p>
        <p>4、正确的格式如：$1,023,032.03 或者 $2.03，错误的格式如：$3,432,12.12 或者 $34,344.3</p>
        <p>我真的老老实实的if-else半天，结果，答案都是用正则，就4行，我服。</p>
        <p>让我写我估计写不出来，分析一下好了</p>
        <PreFormat content={reg}/>
        <p>/正则表达式主体/</p>
        <p>^表示开头，$表示结尾</p>
        <p>^\$表示以$开头</p>
        <p>接下来第一个小括号(表示分出一个组)里面：</p>
        <p>&nbsp;&nbsp;[1,9]表示一位1-9的任意数字(一对方括号只能匹配一个字符)</p>
        <p>&nbsp;&nbsp;\d{brace}0,2}表示0-2位任意数字(\d代表任意数字，{brace}n, m}表示匹配前项至少n次，至多m次)</p>
        <p>&nbsp;&nbsp;接下去是当前小括号里面又一个小括号(,\d{3})，逗号表示匹配逗号，\d{3}表示任意数字3位</p>
        <p>&nbsp;&nbsp;这个括号后面是个*，表示这个小括号内容可以匹配0到多次</p>
        <p>&nbsp;&nbsp;接着是|0，|表示或者，也就是说可以匹配前面 [1-9]\d{brace}0,2}(,\d{3})* 这么一大推，或者就匹配一个0。</p>
        <p>&nbsp;&nbsp;(那我确实没想到$0.123/$0这种情况，合着我写的不仅又臭又长，还是错的。。。)</p>


        <p>接下来第二个小括号里面：</p>
        <p>&nbsp;&nbsp;\.表示匹配.</p>
        <p>&nbsp;&nbsp;\d{2}表示任意数字两位</p>
        <p>&nbsp;&nbsp;小括号后面是个？，表示小括号内容出现0或者1次</p>

        <p>最后以$结尾</p>

        <p>.、$是特殊符号，所以想用子面量要加上\，,(逗号)则不用。</p>


        <h3 id='view-4-4'>4.4. Cookie、sessionStorage、localStorage的区别</h3>
        <p>都保存在浏览器端，并且是同源的(?)。</p>
        <details>
          <summary>cookie</summary>
          <div>
            <p>document.cookie</p>
            <p>cookie在这只的cookie过期时间之前一直有效，及时窗口或浏览器关闭</p>
            <p>在同源窗口中共享</p>
            <p>cookie数据在同源http请求中携带，可以在服务器和客户端之间来回传递。</p>
          </div>
        </details>
        <details>
          <summary>sessionStorage</summary>
          <div>
            <p>window.sessionStorage</p>
            <p>仅在当前浏览器窗口关闭之前有效，不可能持久化</p>
            <p>本地保存，不会发给服务器。</p>
            <p></p>
          </div>
        </details>
        <details>
          <summary>localStorage</summary>
          <div>
            <p>window.localStorage</p>
            <p>始终有效，窗口或浏览器关闭也一直保存，因此作为持久化数据。</p>
            <p>在同源窗口中共享</p>
            <p>本地保存，不会发给服务器。</p>
          </div>
        </details>


        <h3 id='view-4-5'>4.5. JS实现new关键字的功能</h3>
      </div>
    );
  }
}
