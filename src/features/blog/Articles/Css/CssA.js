import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import code from './code';
import PreFormat from '../../Components/PreFormat/PreFormat';

export class CssA extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { div, p, flexCenter, flexColumn } = code;
    const { fontSize } = this.props.blog;
    return (
      <div className="blog-css-a">
        <h1>css(1): 如何让img居中显示</h1>
        <article style={{ fontSize: `${fontSize}px` }}>
          <p>今天画blog的时候遇见了一个小问题，记录一下。。。</p>

          <h2 id="css-1-1">1. 问题</h2>
          <p>img标签如何在父div中居中显示</p>

          <h2 id="css-1-2">2. 解决办法一</h2>
          <PreFormat content={div}/>
          <p>这就轻松解决了呀。。。还要啥plan B呀。</p>

          <h2 id="css-1-3">3. 解决办法二</h2>
          <p>利用p标签</p>
          <PreFormat content={p}/>
          <p>这种方法真的很有意思</p>

          <h2 id="css-1-4">4. 解决办法三</h2>
          <p>flex布局</p>

          <PreFormat content={flexCenter}/>
          <p>或者</p>
          <PreFormat content={flexColumn}/>
        </article>
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
)(CssA);
