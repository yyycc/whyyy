import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addFontSize, minusFontSize, defaultFontSize } from '../redux/actions';
import ChangeFont from '../Components/ChangeFont/ChangeFont';
import PostFooter from '../Components/PostFooter/PostFooter';
import BreadCrumb from '../BreadCrumb/BreadCrumb';
import willow from '../../../images/willow.png';

/*
 * @name: 文章layout
 * @description: 显示改编字体、右上角图片、翻页等组件
 */
export class Articles extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
  };

  render() {
    const pathname = this.props.location.pathname;
    const { posts, fontSize, mode, top, international } = this.props;
    const location = this.props.location;
    const { addFontSize, minusFontSize, defaultFontSize } = this.props.actions;
    let articleTitle = '';
    let display = posts.some((ele) => {
      if (ele.route === pathname) {
        articleTitle = ele.title;
        return true;
      }
      return false;
    });
    if (!display && pathname === '/blog/articles') {
      articleTitle = '站内地图';
    } else if (pathname === '/blog/articles/css') {
      articleTitle = 'css';
    } else if (pathname === '/blog/articles/interview') {
      articleTitle = '面试准备';
    } else if (pathname === '/blog/articles/interview/all') {
      articleTitle = '面试题汇总';
    }
    if (!articleTitle) {
      articleTitle = this.props.location.state;
    }
    if (!articleTitle && pathname.includes('/blog/articles/')) {
      articleTitle = pathname.replace('/blog/articles/', '');
    }
    return (
      <div className="blog-articles-overall">
        <BreadCrumb bread={{ top, pathname, international }}/>
        <div className="blog-articles">
          <img className="blog-articles-img" src={willow} alt=""/>
          <ChangeFont actions={{ addFontSize, minusFontSize, defaultFontSize }}/>
          <div className="blog-articles-content">
            <h1>{articleTitle}</h1>
            <article style={{ fontSize: `${fontSize}px` }}>
              {this.props.children}
            </article>
          </div>
        </div>
        {display && <div className="blog-articles-footer">
          <PostFooter blog={{ mode, location, posts }}/>
        </div>}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    posts: state.blog.posts,
    fontSize: state.blog.fontSize,
    mode: state.blog.mode,
    top: state.blog.top,
    international: state.blog.international,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addFontSize, minusFontSize, defaultFontSize }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Articles);
