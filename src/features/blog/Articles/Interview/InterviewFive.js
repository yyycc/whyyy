import React, { Component } from 'react';

export default class InterviewFive extends Component {
  static propTypes = {};

  render() {
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
        <p>5. 闭包(定义、用处、举例)</p>
        <p>6. 高阶函数</p>
        <h2 id='view-3'>3. some answers</h2>
        <h3 id='view-3-1'>3.1. 静态语言和动态语言</h3>
        <p>静态语言是在编译的过程中就确定了变量的类型，而动态语言则是要等到运行时，给变量赋值了之后，才能确定变量的类型。</p>
        <p>静态语言的优点：</p>
        <p>类型的错误在编译时就能发现，无须等到运行时。代码规范性强，容易理解</p>
        <p>静态语言的缺点：</p>
        <p>代码的规范性强也就意味着要记忆的语法多，代码长。</p>
        <p>动态语言的优点：</p>
        <p>代码的规范性若，代码短。可以更加关注业务逻辑。</p>
        <p>动态语言的缺点：</p>
        <p>类型想关的错误要到运行时才能发现(比如1+2=3很有可能变成'1'+2=12)。</p>

        <h3 id='view-3-2'>3.2. 原型、原型链</h3>
        <p>javaScript中没有类，要生成一个对象就需要一个构造函数(Person)。利用构造器new Person()就可以生成一个对象。</p>
        <p>每个函数都有一个叫做prototype的属性，这个属性就指向对象的原型</p>
        <p></p>
        <h3 id='view-3-3'>3.3. this</h3>
        <p>有四种情况</p>
        <p>1. 作为对象的函数调用，this指向该对象。</p>
        <p>2. 作为普通函数吊桶，this指向window，严格模式为undefined。</p>
        <p>3. 作为构造函数调用，this指向构造函数生成的对象。</p>
        <p>4. Function.prototype.call和Function.prototype.apply，this指向他们俩传入的第一个参数。</p>
        <p>5. 还有ES6新增的箭头函数，this指向函数创建时的作用域对象(//TODO)。</p>
        <p>apply传两个参数，第一个是绑定this，第二个是参数数组。</p>
        <p>call和bind参数一样，第一个是绑定this，后面是具体参数，个数不限。</p>
        <p>但bind是返回一个函数，需要调用。</p>
        <h3 id='view-3-4'>3.4. 作用域和变量的生存周期</h3>
        <p>java中有private、protect、public关键字表示外部访问权限，但是javaScript没有关键字，他是通过作用域来限制变量访问的。</p>
        <p>全局作用域、函数作用域、块作用域(ES6)</p>
        <p>js可以通过创建一个函数来产生一个函数作用域，定义在函数中的变量，外部是无法访问的，当函数调用结束后，这个变量就会被回收。</p>
        <p>定义在函数之外的变量就处在全局作用域下，除非主动删除，否则会一直存在。不用var关键字定义的变量默认为全局变量。</p>
        <p>定义在花括号内或者let关键字定义就会产生一个块作用域，外部无法访问块作用域中的变量。</p>
        <p>显然，全局作用域下的变量不回收，占内存，而且容易被误改，所以我们需要在函数作用域中定义变量。</p>
        <p>ES6之前我们需要封装私有变量就需要立即执行函数来帮忙，有了块作用域就可以将私有变量写在代码块中，js会自动回收。</p>
        <p>然而有时候我们也需要演唱变量的生命周期，比如页面的点击事件，我就希望点一次触发一次，这个时候就需要用到闭包(//TODO)</p>
        <h3 id='view-3-5'>3.5. 闭包</h3>
        <p>能在函数之外访问到函数内部定义的变量，这就是闭包。</p>
        <p>//TODO</p>
        <h3 id='view-3-6'>3.6. 高阶函数</h3>
        <p>可以使用函数作为参数，且函数可以作为返回值。</p>
        <p>js满足这两个条件，所以可以创建高阶函数。</p>

      </div>
    );
  }
}
