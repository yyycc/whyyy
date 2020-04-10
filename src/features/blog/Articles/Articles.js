import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
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
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const pathname = this.props.location.pathname;
    const { posts, fontSize } = this.props.blog;
    let articleTitle = '';
    const display = posts.some((ele) => {
      if (ele.route === pathname) {
        articleTitle = ele.title;
        return true;
      }
      return false;
    });
    if (!display && pathname === '/blog/articles') {
      articleTitle = '站内地图';
    }
    return (
      <div>
        <BreadCrumb props={this.props}/>
        <div className="blog-articles">
          <img className="blog-articles-img" src={willow} alt=""/>
          <ChangeFont actions={this.props.actions}/>
          {/*{this.props.children}*/}
          <div className="blog-articles-content">
            <h1>{articleTitle}</h1>
            <article style={{ fontSize: `${fontSize}px` }}>
              {this.props.children}
            </article>
          </div>
        </div>
        {display && <div className="blog-articles-footer">
          <PostFooter props={this.props}/>
        </div>}
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
)(Articles);
