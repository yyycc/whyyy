import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import CarouselIndex from '../Components/CarouselIndex/CarouselIndex';
import Post from '../Components/PostsIndex/Post';
import { Pagination } from 'antd';
import TagsIndex from '../Components/TagsIndex/TagsIndex';
import Collections from '../Components/CollectionsIndex/Collections';
import RecommendedPost from '../Components/RecommendIndex/RecommendedPost';
import ScrollText from '../Components/ScrollText/ScrollText';

/*
 * @name: 首页
 * @description: 包括轮播公告、轮播图片、博客列表、全站搜索、标签、归档、本站推荐
 */

export class HomePage extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  scroll() {
    let a = document.getElementsByClassName('blog-home-page-right-fix')[0];
    if (!!a) {
      if (window.scrollY > 440) {
        a.style.position = 'fixed';
        a.style.top = '34px';
        a.style.width = 'inherit';
      } else {
        a.style.position = 'static';
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  render() {
    const { posts, current } = this.props.blog;
    let { postsToDisplay, postsQueried } = this.props.blog;
    const { changePage } = this.props.actions;
    if (postsToDisplay.length === 0) {
      postsToDisplay = posts.slice(0, 10);
    }
    if (postsQueried.length === 0) {
      postsQueried = posts;
    }
    return (
      <div className="blog-home-page">
        <div className="blog-home-page-top">
        </div>
        <div className="blog-home-page-bottom">
          <div className="blog-home-page-left">
            <div className="blog-home-page-left-scroll-text">
              <ScrollText blog={this.props.blog} actions={this.props.actions}/>
            </div>
            <div className="blog-home-page-carousel">
              <CarouselIndex blog={this.props.blog} actions={this.props.actions} props={this.props}/>
            </div>
            <div className="blog-home-page-lists">
              {
                postsToDisplay.map((ele, index) => {
                  return <Post key={index} post={ele} actions={this.props.actions}/>;
                })
              }
              {/*分页*/}
              <div className="blog-home-page-lists-pagination">
                <Pagination size='small' current={current} onChange={changePage} total={postsQueried.length}/>
                <p>共{postsQueried.length}条</p>
              </div>
            </div>
          </div>
          <div className="blog-home-page-right">
            <TagsIndex blog={this.props.blog} actions={this.props.actions}/>
            <Collections blog={this.props.blog} actions={this.props.actions}/>
            <div className="blog-home-page-right-fix">
              <RecommendedPost blog={this.props.blog}/>
            </div>
          </div>
        </div>
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
)(HomePage);
