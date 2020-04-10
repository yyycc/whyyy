import React, { Component } from 'react';
import tableCode from './tableCode';
import SimpleTable from '../../Components/SimpleTable/SimpleTable';

export class Array extends Component {
  static propTypes = {};

  render() {
    const { array, arrayTitle, arrayName } = tableCode;
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
        <br/>
        <p>最后再提一下for…in和for…of</p>
        <p>for…in会遍历所有可枚举属性，所以适合对象，不适合数组</p>
        <p>for…in遍历值是键名</p>
        <p>for…of只遍历数组元素</p>
        <p>for…of遍历值是键值</p>
      </div>
    );
  }
}

export default Array;
