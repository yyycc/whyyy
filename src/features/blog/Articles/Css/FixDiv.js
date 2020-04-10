import React, { Component } from 'react';
import code from './code';
import { PreFormat } from '../../Components/PreFormat/PreFormat';
import { Link } from 'react-router-dom';
import urls from './urls';

export default class FixDiv extends Component {
  static propTypes = {};

  render() {
    const { fixDiv, codes, scroll } = code;
    let leaveConfirm = true;
    const { urlStates } = urls;
    return (
      <div className="blog-fix-div">
        <h2 id="css-1-1">1. 基本思路</h2>
        <p>判断文档在垂直方向一滚动的像素值，到达制定阈值后，给要固定的div position:fixed。</p>

        <h2 id="css-1-2">2. 页面结构</h2>
        <p>我的页面基本结构是这样的</p>
        <PreFormat content={fixDiv}/>
        <p>左边的内容比较长，右边比较短，所以希望右边滚动到 className="blog-home-page-right-fix" 的div到达顶部之后，就固定不再滚动。</p>

        <h2 id="css-1-3">3. 实现</h2>

        <p>添加监听</p>
        <PreFormat content={codes[3]}/>

        <p>当滚动超过440的时候，就将 className="blog-home-page-right-fix" 的div 固定。</p>
        <PreFormat content={scroll}/>
        <p>记得else给static，不然滚回去就还是固定的。</p>
        <p>这边给了top因为我的页面上还有个header，所以根据自己页面情况调整。</p>
        <p>另外，当我固定div后，这个div宽度改变了。</p>
        <p>所以width给inherit，保证宽度不改变。这里还有一个前提，就是他的父亲width得给定值，不能是百分数，不然width还是会改变。</p>

        <h2 id="css-1-4">4. transform</h2>
        <p>这样实现基本就ok，但是可能还会有一个问题。</p>
        <p>如果className="blog-home-page-right-fix" 的div 的父亲有transform:translateX()(或者scale()和rotate()
          未验证)，就会导致fix降级为absolute！！</p>
        <p>即: fixed跟transform不能共存！！！</p>
        <p>讲真，我刚刚发现transform这么美好，这么可爱，这么好用，你就给我当头一棒，告诉我他暗搓搓就把我各种渲染都给改变啦？！！</p>
        <p>really？</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. 如何固定一块div滑动到一定位置之后不再滑动？</Link><br/>
          <Link to={urlStates[1]}>2. div随屏幕滚动到一定高度后固定</Link><br/>
          <Link to={urlStates[2]}>3. CSS3 transform对普通元素的N多渲染影响</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a href="https://segmentfault.com/q/1010000000393293" rel="noopener noreferrer" target="_blank">
            1. 如何固定一块div滑动到一定位置之后不再滑动？</a><br/>
          <a href="https://blog.csdn.net/weixin_41655541/article/details/88874601" rel="noopener noreferrer"
             target="_blank">
            2. div随屏幕滚动到一定高度后固定</a><br/>
          <a href="https://www.zhangxinxu.com/wordpress/2015/05/css3-transform-affect/" rel="noopener noreferrer"
             target="_blank">
            3. CSS3 transform对普通元素的N多渲染影响</a><br/>
        </p>
        }
      </div>
    );
  }
}
