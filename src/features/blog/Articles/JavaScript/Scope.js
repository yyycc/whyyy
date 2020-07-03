import React, { Component } from 'react';
import PreFormat from '../../Components/PreFormat/PreFormat';
import code from './code';
import Reference from '../../Components/Reference/Reference';

export default class Scope extends Component {
  static propTypes = {};

  render() {
    const urlStates = [
      {
        pathname: '/common/leave',
        state: 'https://es6.ruanyifeng.com/#docs/let',
      },
      {
        pathname: '/common/leave',
        state: 'https://www.cnblogs.com/forever-Ys/p/10091422.html',
      },
    ];
    const titles = ['1. let 和 const 命令', '2. https://www.cnblogs.com/forever-Ys/p/10091422.html'];
    const { for_let, let_1, let_2, let_3, global_var, scope_chain } = code;
    return (
      <div className="blog-scope">
        <p>ES6也看了好久的，对于它新增的这个块级作用域感觉蛮好的，就细说一下。</p>
        <h2 id='scope-1'>1. 概念</h2>
        <p>作用域是个有点复杂的概念，在ES6之前，javaScript中有<strong>全局作用域</strong>和<strong>函数作用域</strong>。</p>
        <p>何为作用域呢，简单来说就是<strong>有效范围</strong>。他决定了代码区块中的资源的可见性。</p>
        <p>比如我定义了一个变量a，我在某一处可以访问到a，而另一处就无法访问，这就是作用域的效果。</p>
        <p>对我而言，在知道作用域这个词之前，它已经渗透在我的日常开发中了，要学术一点地把它记录下来，老实说，还是蛮困难的(老样子，写一篇博客，得找8万篇资料)。</p>


        <h2 id='scope-2'>2. 类型</h2>

        <h3 id='scope-2-1'>2.1. 全局作用域</h3>
        <p>所有定义在函数之外以及花括号之外的变量，都在全局作用域之中。一旦你声明了一个全局变量，你在任何地方都可已使用它，包括函数内部以及花括号内。</p>

        <h3 id='scope-2-2'>2.2. 函数作用域</h3>
        <p>当你在函数里面定义了一个变量，那么这个变量你就只能在这个函数中访问，外部是无法访问的，这就是函数作用域。</p>

        <h3 id='scope-2-3'>2.3. 块级作用域</h3>
        <p>当你在花括号中声明了一个变量，那么你就只能在这个花括号内访问这个变量，之外都不行。</p>
        <p>或者你使用let/const声明一个变量，那么就只能在let/const所在的这个代码块(花括号内)中访问这个变量，之外都不行。</p>


        <h2 id='scope-3'>3. 问题</h2>

        <h3 id='scope-3-1'>3.1. 重复声明</h3>
        <p>都说javaScript跟java虽然名字很像，其实是两个不同的东西，但是他们也有很多相似之处，尤其是javaScript为了让自己更接近面向对象的语言，一直在使劲像java靠。</p>
        <p>我基本上是同时开始接触这两门语言，javaScript上手更快一些，java语言的语法更复杂一些，但是就我而言，我更喜欢javaScript，浏览器就可以执行，真的很便利。</p>
        <p>跑题了。。。</p>
        <p>java中很显然是有块级作用域这么一个东西的，我在花阔号里面定义的变量，在花括号之外是无法访问的，编译就不通过，这一点其实非常好，避免无意覆盖变量。</p>
        <p>javaScript在ES6之前是没有这个概念的，最常见的例子，我在for(var i...)里面定义的变量i，我在哪儿哪儿都可以访问，这就很容易导致i的误解。</p>
        <p>如果我有多个for循环，就不得不使用不同的变量名，很麻烦(通常i，j，k之后我就不知道该用啥了)。</p>
        <p>有了块级作用域之后呢，麻烦就不复存在啦</p>
        <PreFormat content={for_let}/>
        <p>出了这个for循环的花括号，这个i就无法访问了，你完全可以在下一个for循环中继续使用i作为变量名。</p>
        <p>这边还有一个经典的闭包例子，我也放上来。</p>
        <PreFormat content={let_1}/>
        <PreFormat content={let_2}/>
        <p>for 循环头部的 let 声明还会有一个特殊的行为。这个行为指出变量在循环过程中不止被声明一次，每次迭代都会声明。随后的每个迭代都会使用上一个迭代结束时的值来初始化这个变量。</p>
        <p>第一个输出4个4，第二个输出0，1，2，3，都是在两秒之后输出的。</p>
        <p>之前用var如果想要第二种的效果，就得使用IIFE(立即执行函数表达式)。而有了块级作用域，这个IIFE就可以光荣退休啦(代码还是放上来)。</p>
        <PreFormat content={let_3}/>

        <h3 id='scope-3-2'>3.2. 全局变量污染</h3>
        <p>全局变量是个比较方便却很危险的存在，因为随处可以访问，所以随处可以修改，一般的项目都应该避免全局变量的存在。</p>
        <p>在ES6之前，如果我们不想产生全局变量，想封装一些外部无法读取的似有变量，方法就是IIFE。但是有了块级作用域，他就用不上了，只需要写个花括号，就可以避免全局变量。</p>
        <p>意外的全局变量：</p>
        <PreFormat content={global_var}/>
        <p>在函数中未用命令声明的b，其实是被声明成了全局变量，在函数外部也可以使用，就造成了全局变量污染(这么写的通通打shi)。</p>

        <h2 id='scope-4'>4. 作用域链</h2>
        <p>javaScript中真的有好多链呀，原型链，作用域链，链式调用。</p>
        <p>什么是作用域链呢，举个简单的例子：</p>
        <PreFormat content={scope_chain}/>
        <p>输出结果是3和9，这边就有我们上面讲的三个作用域。</p>
        <p>要console.log(a)，先在函数作用域里面找a，因为这里的a定义在花括号里面，是一个独立的块级作用域，外面访问不到，所以在函数作用域里面找不到a，那就去全局作用域里面找，找到了，就输出3。</p>
        <p>要console.log(b)，先在函数作用域里面找b，这边就找到了b，就输出9，就不会再往外继续找了。</p>
        <p>这就是作用域链，从内向外优先级降低，只有里面找不到才会继续向外找。</p>

        <Reference reference={{ titles, urlStates }}/>
      </div>
    );
  }
}
