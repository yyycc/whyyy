import React, { Component } from 'react';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import urls from './urls';
import { Link } from 'react-router-dom';
import cors from './cors.jpg';
import tableCode from './tableCode';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';

export default class ViewTwo extends Component {

  render() {
    let leaveConfirm = true;
    const { request, requestName, requestTitle, html, htmlName, htmlTitle } = tableCode;
    const { urlStates } = urls;
    const { support, supportNot, media, codes, access, exportDefault, export_1, export_2, export_3, import_as_whole } = code;
    return (
      <div className="blog-view-two">

        <h2 id="view-two-1">1. calc, support, media各自的含义及用法</h2>
        <h3 id="view-two-1-1">1.1. calc</h3>
        <p>calc() 函数用于动态计算长度值</p>
        <PreFormat content={codes[3]}/>
        <h3 id="view-two-1-2">1.2. @support</h3>
        <p>@support主要是用于检测浏览器是否支持CSS的某个属性</p>
        <p>其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。</p>
        <PreFormat content={support}/>
        <PreFormat content={supportNot}/>
        <p>还支持与(and)或(or)的语法</p>

        <h3 id="view-two-1-3">1.3. @media</h3>
        <p>@media 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，@media 是非常有用的。</p>
        <p>当你重置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面。</p>
        <PreFormat content={media}/>
        <p>重置浏览器查看大小。当浏览器窗口的宽度小于 1000 像素时，背景颜色会变成淡蓝，否则是淡绿色。</p>


        <h2 id="view-two-2">2. 1rem、1em、1vh、1px各自代表的含义(?)</h2>
        <h3 id="view-two-2-1">2.1. rem</h3>
        <p>rem是全部的长度都相对于根元素</p>
        <p>html元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。</p>

        <h3 id="view-two-2-2">2.2. em</h3>
        <p>子元素字体大小的em是相对于父元素字体大小</p>
        <p>元素的width/height/padding/margin用em的话是相对于该元素的font-size</p>
        <h3 id="view-two-2-3">2.3. vw/vh</h3>
        <p>全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好。</p>

        <h3 id="view-two-2-4">2.4. px</h3>
        <p>px像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的。</p>
        <p>一般电脑的分辨率有{1920 * 1024}等不同的分辨率</p>
        <p>1920*1024 前者是屏幕宽度总共有1920个像素,后者则是高度为1024个像素</p>


        <h2 id="view-two-3">3. CORS</h2>
        <p>CORS是一个W3C标准，全称是"跨域资源共享"</p>
        <p>需要浏览器和服务器同时支持，一般浏览器都支持，所以只要服务器实现了CORS接口，就可以实现跨源通信了</p>
        <p>最开始搭前端项目的时候，因为是前后端分离的嘛，肯定涉及到跨域了，就碰到过这个问题。直接访问会报错：</p>
        <img style={{ width: '80%', color: '#c40000' }} src={cors}
             alt='Access to XMLHttpRequest ... has been blocked by CORS policy: ...'/>
        <p>对于简单请求，浏览器会在头信息中增加origin字段，表明本次请求来自于哪个源(协议+域名+端口)，服务器根据这个值决定要不要同意。</p>
        <PreFormat content={codes[6]}/>
        <p>服务器端需要增加</p>
        <PreFormat content={access}/>
        <p>响应中也可以看到这几个字段以及他们对应的值</p>

        <p>如果是非简单cors请求</p>
        <p>会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。请求方法是options。</p>
        <p>如果服务器否定了"预检"请求，会返回一个正常的HTTP回应，但是没有任何CORS相关的头信息字段。这时，浏览器就会认定，服务器不同意预检请求。</p>
        <p>如果通过了"预检"请求，后续就像简单请求一样了。</p>


        <h2 id="view-two-4">4. export和export default的区别</h2>
        <p>ES6引入了模块module的概念，一个模块就是一个独立的文件，该文件内部的所有变量，外部无法获取。如果你希望外部可以访问内部的某些变量，那就需要用export关键词输出变量。</p>
        <p>export与export default均可用于导出常量、函数、文件、模块等</p>
        <p>一个文件中export和import可以有多个，但是export default只能有一个</p>
        <p>export有两种写法</p>
        <p>第一种，逐条定义、输出</p>
        <PreFormat content={export_1}/>

        <p>第二种，定义好后放在大括号里面一次性输出(注意，即便只有一个变量，也需要放进花括号才能输出)</p>
        <PreFormat content={export_2}/>

        <p>export输出的是本来的名字，可以用as来重命名</p>
        <PreFormat content={export_3}/>
        <p>重命名后这些变量可以用不同名字输出多次</p>
        <p>export导出的，在import导入时要加大括号，可以用as重命名。</p>
        <p>export default导出的，import导入时不用加大括号，并且可以任意指定导入的名字。</p>
        <PreFormat content={exportDefault}/>
        <p>import输入的变量都是只读的，他的本质是导入接口，也就是不允许在加载模块的脚本里修改接口。</p>
        <p>import命令是编译阶段执行的，在代码运行之前。他是静态执行，所以不能是用表达式和变量，因为这些是只有运行时才能得到结果的语法结构。</p>
        <p>export
          default导出的在import导入的时候不要用大括号(因为它只会有唯一一个输出)，之前遇到过它默认给我加大括号就出了问题(关键是用还是可以用，但是会丢失一些信息，比如跟class平级的function)。</p>
        <p>模块还可以整体加载，就不用在花括号里一一列出来，直接*就可以了，所有需要的都可以通过circle. 来获取。</p>
        <PreFormat content={import_as_whole}/>


        <h2 id="view-two-5">5. 数组去重</h2>
        <h3 id="view-two-5-1">5.1. 方法一</h3>
        <p>对于数组a，新建一个临时数组，循环遍历a，判断每一个元素在a中是否存在，不存在就push进临时数组</p>
        <h3 id="view-two-5-2">5.2. 方法二</h3>
        <p>利用Set成员值都是唯一，不会重复，且类似数组的特性</p>
        <p>Array.from方法用于将两类对象转为真正的数组：</p>
        <p>类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。</p>
        <PreFormat content={codes[4]}/>
        <h3 id="view-two-5-3">5.3. 方法三</h3>
        <p>利用扩展运算符</p>
        <h3 id="view-two-5-4">5.4. 方法四</h3>
        <p>利用数组下标，循环判断数组a.indexOf(a[i] == i)如果相等说明是第一次出现，则push进临时数组，如果不等说明是第n+1次出现，就continue。</p>
        <PreFormat content={codes[5]}/>


        <h2 id="view-two-6">6. get、post的区别</h2>
        <SimpleTable titles={requestTitle} data={request} name={requestName}/>


        <h2 id="view-two-7">7. http的响应码及含义</h2>
        <p>2XX：成功</p>
        <p>3XX：重定向</p>
        <p>4XX：客户端错误</p>
        <p>5XX：服务器错误</p>
        <p>200：请求成功</p><br/>
        <p>304：按F5刷新 304 表明此次请求为条件请求 判断出客户端缓存的资源是否是最新的,如果是的话,服务器就会返回HTTP/304 Not Modified响应头</p><br/>
        <p>400：请求有语法错误</p>
        <p>401：没有提供认证信息(一般提供了认证信息之后就可以访问)</p>
        <p>403：没有权限，服务器拒绝</p>
        <p>404：请求的内容不存在</p>
        <p>500：服务器错误</p>


        <h2 id="view-two-8">8. HTML5的新特性</h2>
        <p>语义化标签</p>
        <SimpleTable titles={htmlTitle} data={html} name={htmlName}/>
        <p>audio、video标签</p>
        <p>canvas、svg绘图</p>
        <p></p>

        <h2 id="view-two-9">9. JS的类型</h2>

        <h3 id="view-two-9-1">9.1. 类型</h3>
        <p>js数据类型可以分为原始数据类型和引用数据类型</p>
        <p>原始数据类型包括null、undefined、布尔值(boolean)、字符串(string)、数值(number)、以及es6新增的symbol，表示独一无二的值</p>
        <p>引用数据类型包括对象(object)、函数(function)、数组(array)</p>

        <h3 id="view-two-9-2">9.2. 区分(?)</h3>
        <p>这些类型的区分方式有很多</p>

        <h3 id="view-two-9-3">9.3. 值</h3>
        <p>如果一个变量是基本数据类型，那么在它被赋值之后，这个值就是不可变的</p>


        <h2 id="view-two-10">10. JS中如何复制一个值</h2>
        <p>首先，如果是基本数据类型，那就直接赋值就可以了。</p>
        <p>如果是引用数据类型：对象、数组、函数，那么就有深拷贝和浅拷贝。</p>
        <p>引用数据类型保存在堆内存中，然后在栈内存中保存了一个对堆内存中实际对象的引用，即数据在堆内存中的地址，
          JS对引用数据类型的操作都是操作对象的引用而不是实际的对象。</p>
        <p>浅拷贝只拷贝对象的第一层，你如果操作复制出来的对象，原对象也会一起变，因为他们指向相同。</p>
        <p>而深拷贝是拷贝多层，每一层的数据都会拷贝出来</p>
        <p>...</p>

        <h2 id="Z-two-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[5]}>1. 跨域资源共享 CORS 详解</Link><br/>
          <Link to={urlStates[6]}>2. http常见的状态码，400,401,403状态码分别代表什么？</Link><br/>
          <Link to={urlStates[7]}>3. export default 和 export 区别</Link><br/>
          <Link to={urlStates[8]}>4. GET 和 POST 到底有什么区别？</Link><br/>
          <Link to={urlStates[9]}>5. export</Link><br/>
          <Link to={urlStates[18]}>6. ECMAScript 6 入门</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="http://www.ruanyifeng.com/blog/2016/04/cors.html" target="_blank" rel="noopener noreferrer">
            1. 跨域资源共享 CORS 详解</a><br/>
          <a href="https://blog.csdn.net/liouswll/article/details/80698619" target="_blank"
             rel="noopener noreferrer">
            2. http常见的状态码，400,401,403状态码分别代表什么？</a><br/>
          <a href="https://www.cnblogs.com/mengfangui/p/9073459.html" target="_blank"
             rel="noopener noreferrer">
            3. export default 和 export 区别</a><br/>
          <a href="https://www.zhihu.com/question/28586791" target="_blank" rel="noopener noreferrer">
            4. GET 和 POST 到底有什么区别？</a><br/>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export"
             target="_blank"
             rel="noopener noreferrer">
            5. export</a><br/>
          <a href="https://es6.ruanyifeng.com/#docs/module"
             target="_blank"
             rel="noopener noreferrer">
            6. ECMAScript 6 入门</a><br/>
        </p>
        }
      </div>
    );
  }
}
