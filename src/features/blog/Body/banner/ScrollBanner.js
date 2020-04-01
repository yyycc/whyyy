import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import code from './code';
import urls from './urls';
import PreFormat from '../component/PreFormat';
import { Link } from 'react-router-dom';
import scroll from '../../../../images/scroll.gif';

export class ScrollBanner extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { html, css, js, texts, interval } = code;
    const { urlStates } = urls;
    const { fontSize, leaveConfirm } = this.props.blog;
    return (
      <div className="blog-scroll-banner">
        <h1>react实现文字公告滚动轮播</h1>
        <body style={{ fontSize: `${fontSize}px` }}>
        <p>先上效果图</p>
        <div className="blog-scroll-banner-img">
          <img src={scroll} alt="轮播效果图"/>
          <p>图1. 轮播效果图</p>
        </div>
        <p>(小喇叭部分的代码没有贴出来)</p>
        <p>主要的实现逻辑是这样滴：</p>
        <p>1. 将每个公告放在li标签下，限制ul的高度使得只显示一个li，并且设置overflow为hidden，这样当ul动起来，浮出的部分也会隐藏。</p>
        <p>2. 设置定时器，定时设置ul动画的class，给一个负的margin-top，使得整个ul向上挪动，给transition: all 0.5s，就会有滚动的动画效果，而不是闪现啦。</p>
        <p>3. 因为这边滚动需要0.5s，所以延迟至少0.5s后，将第一个li，也就是已经滚到上方的li放到ul的最后，再将前面设置的class清掉。</p>
        <p>就实现啦～</p>

        <h2 id="scroll-1-1">1. html</h2>
        <p>html代码</p>
        <PreFormat content={html}/>
        <p>其中的texts是这样的</p>
        <PreFormat content={texts}/>


        <h2 id="scroll-1-2">2. css</h2>
        <p>css代码</p>
        <PreFormat content={css}/>
        <p>加上了高度和overflow: hidden;就可以实现只显示一个li,下面的li都不显示,并且滚动上去的li也会隐藏。</p>


        <h2 id="scroll-1-3">3. js</h2>
        <p>js代码</p>
        <PreFormat content={js}/>
        <p>这里利用setInterval定时器，实现自动轮播。</p>
        <p>首先给ul加上blog-scroll-text-scroll-animate的class，transition提供向上滚动的动画效果。</p>
        <p>然后将第一个li放到最后一个就实现轮播啦。</p>
        <PreFormat content={interval}/>
        <p>加上onMouseOver，onMouseOut时间可以实现当鼠标在文字上时，停止滚动。</p>

        <h2 id="Z-参考">Z. 参考</h2>
        {leaveConfirm && <p>
          <Link to={urlStates[0]}>1. React 原生实现新闻播报上下滚动效果</Link><br/>
        </p>}
        {!leaveConfirm &&
        <p>
          <a
            href="https://blog.csdn.net/weixin_33682719/article/details/88007334?depth_1-utm_source=distribute.pc_relevant_right.none-task&utm_source=distribute.pc_relevant_right.none-task"
            target="_blank" rel="noopener">
            1. React 原生实现新闻播报上下滚动效果</a><br/>
        </p>
        }
        </body>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    blog: state.blog,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScrollBanner);
