import React, { Component } from 'react';
import PreFormat from '../../Components/PreFormat/PreFormat';
import Reference from '../../Components/Reference/Reference';
import code from './code';

export default class PropTypes extends Component {

  render() {
    const urlStates = [
      {
        pathname: '/common/leave',
        state: 'https://blog.csdn.net/sjpeter/article/details/81079619',
      },
      {
        pathname: '/common/leave',
        state: 'https://www.jianshu.com/p/a73fb26c88b5',
      },
    ];
    const { titles, props, staticProp, old, types, oneType, arrayOf, shape, require, fun } = code;
    return (
      <div className="blog-prop-types">
        <p>react也写了一段时间了，基本从一开始写每个页面都能看到下面这一段，今天才终于明白了。</p>
        <PreFormat content={props}/>
        <h2 id='prop-1'>1. 动态语言</h2>
        <p>javaScript是一门动态语言，什么事动态语言呢，就是变量的类型是要在运行时，变量被赋值后才能确定的，这就导致很多错误知道运行时才会发生。</p>
        <p>比如你期待传入值是string类型，你对他使用了string类型才有的方法，但结果他传了一个数组进来。。。</p>
        <p>所以类型检测就很有必要啦</p>
        <h2 id='prop-2'>2. prop-types</h2>
        <PreFormat content={`import PropTypes from 'prop-types';`}/>
        <p>安装并引入这个包</p>
        <p>如何使用呢：基本写法就是下面这样，作为class的静态属性，这是ES7的写法，在这之前，要类的静态属性是定义在类外边的</p>
        <PreFormat content={staticProp}/>
        <PreFormat content={old}/>
        <h3 id='prop-2-1'>2.1. 可以检测的类型</h3>
        <PreFormat content={types}/>
        <h3 id='prop-2-2'>2.2. oneOfType-多选择检测</h3>
        <p>当希望一个变量有指定的多种数据类型是，可以使用oneOfType</p>
        <PreFormat content={oneType}/>
        <h3 id='prop-2-3'>2.3. arrayOf，objectOf实现多重嵌套检测</h3>
        <p>想检测数组每个成员类型，就要用到arrayOf</p>
        <PreFormat content={arrayOf}/>
        <p>检测对象成员类型，就要用到objectOf，方法和arrayOf一样，但是这就规定对象内部属性的数据类型只有一种，但一般情况，不同属性的类型都是不同的。</p>
        <p>这样objectOf就不合适了，应该用shape</p>
        <PreFormat content={shape}/>
        <h3 id='prop-2-4'>2.4. 必填属性</h3>
        <p>当在idea中调用某个组件是，用他自动补全，会自动把属性名也带出来，让你填值，这也是prop-types的功劳。</p>
        <PreFormat content={require}/>
        <p>这样number就是一个必传的参数</p>
        <h3 id='prop-2-5'>2.5. 更复杂的类型检测</h3>
        <p>除了类型，你可能还会有更具体的检测，比如手机号码格式，邮箱格式等等，这个时候就可以自定义一个方法，来进行检测</p>
        <PreFormat content={fun}/>

        <p><strong>Ps: 上述的这些类型检测如果失败都会报错，但不是fatal error，程序依然会正常运行</strong></p>

        <Reference reference={{ urlStates, titles }}/>
      </div>
    );
  }
}
