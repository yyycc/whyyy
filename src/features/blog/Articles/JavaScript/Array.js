import React, { Component } from 'react';
import tableCode from './tableCode';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';
import Reference from '../../Components/Reference/Reference';

export class Array extends Component {

  render() {
    const { array, arrayTitle, arrayName } = tableCode;
    const { reduce, reducer, proxy, sort } = code;
    const urlStates = [
      {
        pathname: '/common/leave',
        state: 'https://wangdoc.com/javascript/stdlib/array.html',
      },
    ];
    const titles = ['1. Array对象'];
    return (
      <div className="blog-array">
        <h2 id="javaScript-1-1">1. 初始化</h2>
        <p>两种初始化的方式，第一种是使用构造函数</p>
        <pre>var arr = new Array();</pre>
        <p>括号里面可以给参数，但是不同的参数，会导致它的行为不一致。</p>
        <p>所以，建议使用另一种方式，也就是数组字面量</p>
        <pre>var arr = [1, 2, 3];</pre>
        <h2 id="javaScript-1-2">2. 实例方法</h2>
        <p>数组的实例方法真的有好多，这里我把它分成两种：</p>
        <p>会改变原数组的 & 不会改变原数组的</p>
        <p>本来想一一列举的，但是好像没啥意义</p>
        <p>就画个表格吧～～</p>
        <SimpleTable titles={arrayTitle} data={array} name={arrayName}/>
        <p>[1]. 如果数组成员包括对象，concat方法返回当前数组的一个浅拷贝。新数组拷贝的是对象的引用。</p>
        <p>[2]. 将类数组转化为真正的数组: Array.prototype.slice.call(document.querySelectorAll("div"));</p>
        <p>[3.1]. push: 在最后一个位置添加。</p>
        <p>[3.2]. unshift: 在第一个位置添加。</p>
        <p>[4.1]. pop: 删除最后一个元素。</p>
        <p>[4.2]. shift: 删除第一个元素。</p>
        <p>[5]. 默认按照字典顺序排序，所以如果要按数字大小，则要写function，并且最好返回数值</p>
        <p>[6]. forEach方法只能改变数组里的对象，而不能改变数组中的基本数据类型值！！！</p>
        <p>ES6还新增了fill、entries、keys、values、includes、flat、flatMap等方法</p>
        <br/>
        <p>最后再提一下for…in和for…of</p>
        <p>for…in会遍历所有可枚举属性，所以适合对象，不适合数组</p>
        <p>for…in遍历值是键名</p>
        <p>for…of只遍历数组元素</p>
        <p>for…of遍历值是键值</p>
        <p style={{ color: '#c40000', fontSize: '12px', marginBottom: '1px' }}>更新于2020-06-23</p>
        <h2 id="javaScript-1-3">3. 举例</h2>
        <p>画个表格显然是不够的，把用到的都举例详述一下。</p>

        <h3 id="javaScript-1-3-1">3.1. reduce</h3>
        <p>reduce意为减少，缩小。reduce()一般用来求和(可能是什么引申义吧，我猜)。</p>
        <p>reduce方法(从左至右)依次处理数组成员，接收两个参数，第一个是一个函数。</p>
        <p>这个函数接收以下四个参数</p>
        <ol>
          <li>累积变量，默认为数组的第一个成员(之后都是上一轮的返回值)</li>
          <li>当前变量，默认为数组的第二个成员</li>
          <li>当前位置（从0开始）</li>
          <li>原数组</li>
        </ol>
        <p>前两个必须，后两个可选</p>
        <p>第二个参数(可选)是积累变量的初值。</p>
        <p>先来一个常用的求和例子</p>
        <PreFormat content={reduce}/>
        <p>(这个箭头函数写起来真的很爽，但是看代码的时候总会有点磕绊，不大适应，需要提醒自己有个return。)</p>
        <p>这边这个积累变量a的初始值就是10，之后一次是11，13，16，20</p>
        <p>(我之前一直以为a是1，3，5。。。也不细想，真的是蠢。。。)</p>
        <p>再看一个react的例子</p>
        <PreFormat content={reducer}/>
        <p>reducers是reducer的集合，newState是state初始值</p>
        <p>所以这个方法就是每个reducer执行reducer(state, action)，这个方法返回新的state作为下一轮的state参数一直到最后得到最终state。</p>
        <p>这么看来这个reduce用在这里简直完美。</p>
        <p>又想起来，前两天看proxy时候也看到reduce这个方法，当时还一脸懵逼不知所以然。</p>
        <PreFormat content={proxy}/>
        <p>现在看就很明了了，value是初始值3，挨个执行funcStack数组里面的方法，将方法执行后的值返回作为下一轮的参数val的值，所以就是(3*2)的平方再reverse。</p>

        <h3 id="javaScript-1-3-2">3.2. sort</h3>
        <p>sort的参数函数接收两个参数，如果该函数返回值>0，则第一个成员排在第二个成员后面，否则第一个成员排在第二个成员前面。</p>
        <p>函数不推荐返回布尔值，应该返回数值。</p>
        <PreFormat content={sort}/>

        <Reference reference={{ urlStates, titles }}/>


      </div>
    );
  }
}

export default Array;
