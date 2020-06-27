import React, { Component } from 'react';
import PreFormat from '../../Components/PreFormat/PreFormat';
import Reference from '../../Components/Reference/Reference';
import code from './code';

export default class ReactB extends Component {
  static propTypes = {};

  render() {
    const { bindActionCreator, bindActionCreators, connect } = code;
    const urlStates = [
      {
        pathname: '/common/leave',
        state: 'http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html',
      },
      {
        pathname: '/common/leave',
        state: 'https://time.geekbang.org/course/detail/100009301-9453',
      },
      {
        pathname: '/common/leave',
        state: 'https://segmentfault.com/a/1190000016460366',
      },
    ];
    const titles = ['1. Redux 入门教程（一）：基本用法', '2. 极客时间-React实战进阶45讲', '3. 我的源码阅读之路：redux源码剖析'];
    return (
      <div className="blog-react-b">
        <p>介绍一下react的生态圈中比较复杂但非常好用的redux</p>
        {/*<p>开这篇博客的时候已经用了很长时间redux了，但其实真正了解并不深，源码也没怎么看，写博客要到处查资料，看视频。</p>*/}
        {/*<p>其实这样挺好的，能够督促我掌握它，不然也写不出一片博文来。</p>*/}
        {/*<p>但是边查资料边写，听上去就很low，所以我决定来个1、2...n稿，一遍遍加深对redux的理解(毕竟dan大神真的好帅哦)</p>*/}
        {/*<p>那就开始吧</p>*/}


        <h2 id="react-1">1. redux</h2>
        <p>redux是js的状态管理框架。</p>
        <p>我最先知道、了解并开始使用就是在react中，但其实redux可以用在任何地方帮助你管理状态。</p>
        <p>我当初在接触vue的时候，让我觉得最艰难的就是组件通信，那个父子props真的折磨了我很久，以至于后来慢慢就不怎么看vue了(其实vue也可以用redux管理状态的)。</p>
        <p>后来用react，redux是facebook官方的状态管理工具，跟react对接得非常好，基本都是摆在一起出现，我也就开始使用redux。</p>
        <p>当时看视频教学，就是一堆state、store、reducer、action，搞得云里雾里的。</p>
        <p>不管怎样也开始用起来了，确实挺好用的，状态都统一管理，想要就从一个地方拿，想改就写个action。</p>
        <p>但一开始也出现过死活拿不到状态的情况，都是因为redux没写对，或者引入方式错误导致没有用到redux管理。</p>
        <p>我是直接用rekit脚手架搭建的项目，之后创建component什么的都是用它封装好的一个Rekit Studio，前台操作会自动创建文件，很方便。</p>
        <p>自动创建的文件里面就已经引入了redux。但是做到后面会发现，其实很多页面并不需要redux</p>
        <p>比如我的博客里面的所有博文，没有交互，数据源单一，完全不需要redux，增加了反而影响性能。所以后期我就都删掉了。</p>
        <p>那什么时候需要redux呢</p>
        <ol>
          <li>某个组件的状态需要共享</li>
          <li>某个状态需要在任何地方都能拿到</li>
          <li>一个组件需要改变全局状态</li>
          <li>一个组件需要改变另一个组件状态</li>
        </ol>
        <p>看完这几句就发现，啊，我的blog写得确实一团糟。。。回炉重造准备起</p>


        <h2 id="react-2">2. redux基本概念</h2>

        <h3 id="react-2-1">2.1. store</h3>
        <p>redux最核心概念store，所有状态都放在store中</p>
        <p>首先产生一个store只需要调用createStore函数(结合源码看)，他接收reducer参数，reducer是一个纯函数。preloadedState用的比较少，enhancer也是一个function</p>
        <PreFormat content='const store  = createStore(reducer, preloadedState, enhancer)'/>
        <p>store是这么一个对象，里面有5个方法，前三个比较常用</p>
        <PreFormat content='{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}'/>
        <ol>
          <li>getState(): 返回当前状态currentState，这个方法获取的state可以直接更改，但是redux不允许这样做，因为这样不会通知订阅者更新数据</li>
          <li>dispatch(action): 将action dispatch给reducer</li>
          <li>subscribe(listener): 注册订阅者，当store更新时，执行listener</li>
        </ol>

        <h3 id="react-2-2">2.2. state</h3>
        <p>一个 State 对应一个 View。只要 State 相同，View 就相同。</p>
        <p>当前时刻的state可以通过store.getState()获取</p>
        <h3 id="react-2-3">2.3. action</h3>
        <p>state改变，view才会改变，而用户无法接触到state，所以只能通过在view上出发action来改变state</p>
        <p>action是一个对象，其中type是必须的属性</p>
        <p>其他属性可以自由设置，社区有一个规范：</p>
        <p>An action MUST NOT include properties other than type, payload, error, and meta.</p>
        <p>嗯，完全没遵守。。。</p>

        <h3 id="react-2-4">2.4. dispatch</h3>
        <p>dispatch是view发出action的唯一方法，dispatch给所有的reducer。</p>

        <h3 id="react-2-5">2.5. reducer</h3>
        <p>Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。</p>
        <p>reducer是一个函数，他接收state和action作为参数，返回一个新的state</p>
        <p>为什么叫做reducer呢，因为他可以作为数组reduce方法的参数(array一问中给过例子，这边说一个类似的)</p>
        <PreFormat content='actions.reduce(reducer, newState)'/>
        <PreFormat content='actions.reduce((state, action) => {}, newState)'/>
        <p>表示一系列的action依次经过reducer，得到最终state</p>
        <p>当然，reducer在实际应用中，不需要手动调用reducer，store.dispatch方法会触发reducer(看一下源码就会发现了)，只要在创建store的时候吧reducer传进去就可以了</p>

        <h3 id="react-2-6">2.6. subscribe</h3>
        <p>store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。</p>
        <p>显然，只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。(所以react是怎么实现自动渲染的呢)</p>
        <p>store.subscribe方法返回一个函数，调用这个函数就可以解除监听(看源码)。</p>


        <h2 id="react-3">3. redux工具函数</h2>

        <h3 id="react-3-1">3.1. combineReducers</h3>
        <p>一般一个应用中如果只定义一个reducer，那么肯定会把不相关的属性都放在一起处理，所以一般我们都需要拆分成多个reducer，不同的reducer处理不同属性，随后再合并成一个大的reducer。</p>
        <p>而combineReducers就能够帮助我们将子reducer合并。比如我们现在有两个reducer：A和B</p>
        <PreFormat content='combineReducers({A,B})'/>
        <p>也就是</p>
        <PreFormat content='combineReducers({A: A,B: B})'/>
        <p>返回的还是一个reducer</p>
        <p>总之，combineReducers()做的就是产生一个整体的 Reducer 函数。该函数根据 State 的 key 去执行相应的子 Reducer，并将返回结果合并成一个大的 State
          对象(还需要看源码再理解)。</p>

        <h3 id="react-3-2">3.2. bindActionCreators</h3>
        <p>当有一个action，我们总是需要将它dispatch出去，这样才会触发reducer进行更新，所以，我们可以将action和dispatch封装在一起来简化操作。</p>
        <p>bindActionCreators就帮助我们实现了这个需求。</p>
        <p>这个源码就比较短，直接放上来</p>
        <PreFormat content={bindActionCreator}/>
        <PreFormat content={bindActionCreators}/>
        <p>这个理解起来就比较容易，你可以直接传一个function和dispatch进入，返回一个被dispatch的function，可以直接执行，或者传一个有functions组成的对象和dispatch进入，对象里的function都会被dispatch，然后在作为一个整体对象返回。</p>
        <p>这其实就是一个提供便利的工具函数，你完全可以直接调用store.dispatch(action)，一样一样的。</p>


        <h2 id="react-4">4. redux在react中的应用</h2>
        <p>上面说的那些东西，都可以在react中使用，也可以在别的框架使用，下面说一下redux跟react结合的产物。</p>
        <p>redux上面说了，主要就是产生一个store，而react中核心概念就是component组件，组件需要从store中获取数据，同时组件上一些UI的操作要更新store中的数据。这个过程就是通过connect实现的
          (*这边再提一下，如果你这个组件UI非常简单，没有什么交互，数据来源唯一，也不影响别的组件，那就没必要用redux，用了反而影响性能，直接用state就可以了，或者不想写class，就写function，用钩子函数useState，也很方便(改期讲))。</p>

        <h3 id="react-4-1">4.1. connect</h3>
        <p>connect是'react-redux'包提供的方法，作用就是把组件connect到store上。</p>
        <p>它的基本用法是这样的，我就直接把例子搬上来了</p>
        <PreFormat content={connect}/>
        <p>这个组件需要store上的count数据，那么就定义mapStateToProps，返回count属性，这边不要把整个store都绑定到组件上，虽然获取属性方便，但是任何属性变化都会触发这个组件更新。影响性能，所以需要什么属性就绑定什么属性。</p>
        <p>此外，这个组件还需要访问redux的两个action，minusOne和plusOne，定义mapDispatchToProps方法，调用bindActionCreators方法，把定义好的两个action传进去，前面说了bindActionCreators会自动调用dispatch，把两个action，dispatch出去</p>
        <p>connect接收上面两个函数作为参数，再传入已有的组件，创建高阶组件。这样CounterRedux中就可以获得上面说的三个属性。</p>

        <h3 id="react-4-2">4.2. Provider</h3>
        <p>那么这个高阶组件如何使用呢，我们需要在根节点上定义Provider，传入store，这样下面的所有节点都可以访问到store。</p>
        <p>一个应用中只有根节点上会有一个Provider，也就是一个应用只会有一个store</p>


        <Reference reference={{ urlStates, titles }}/>
      </div>
    );
  }
}
