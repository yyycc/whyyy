import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Link } from 'react-router-dom';
import theEnd from '../../../images/theEnd.png';
import theEndNight from '../../../images/theEndNight.jpg';
// import day from '../../../images/flower-2.png';
import day from '../../../images/willow.png';
import night from '../../../images/sakura.png';
import { Input } from 'antd';

/*
 * @name: 页眉
 * @description: 包括blog名，motto，全站搜索、首页、友链、关于
 */

export class Header extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  changeMode() {
    let list = document.getElementsByTagName('body')[0].classList;
    let mode = 'reader-night-mode';
    let img = document.getElementsByClassName('blog-post-footer-img');
    let imgA = document.getElementsByClassName('blog-articles-img');
    if (list.contains('reader-night-mode')) {
      list.remove(mode);
      if (img.length > 0) {
        img[0].src = theEnd;
      }
      if (imgA.length > 0) {
        imgA[0].src = day;
      }
    } else {
      list.add(mode);
      if (img.length > 0) {
        img[0].src = theEndNight;
      }
      if (imgA.length > 0) {
        imgA[0].src = night;
      }
    }
  }

  render() {
    const { Search } = Input;
    const { fuzzyQueryPosts } = this.props.actions;
    return (
      <header className="blog-header">
        <div className="blog-header-name"> whyyy his blog</div>
        <div className="blog-header-motto"> |每天都努力地搬砖</div>
        <div className="blog-header-search">
          <Search
            placeholder="搜索文章标题"
            onSearch={value => fuzzyQueryPosts(value)}
            style={{ width: 200 }}
          />
        </div>
        <div className="blog-header-menu">
          <div className="blog-header-menu-mode" onClick={() => this.changeMode()}>
            <i className="fa fa-moon-o"> </i>
          </div>

          <div className="blog-header-menu-home">
            <i className="fa fa-home"> </i>
            <Link to="/blog">首页</Link>
          </div>
          <div className="blog-header-menu-about">
            <i className="fa fa-anchor"> </i>
            <Link to="/blog/about">关于</Link>
          </div>
          <div className="blog-header-menu-links">
            <i className="fa fa-handshake-o"> </i>
            <Link to="/blog/fLinks">友链</Link>
          </div>
        </div>
      </header>
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
)(Header);
