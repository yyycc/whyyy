import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  scrollBanner,
  changePage,
  queryPostsByDate,
  queryPostsByTag,
  changeImage,
  autoChangeImages,
} from '../redux/actions';
import CarouselIndex from '../Components/CarouselIndex/CarouselIndex';
import Post from '../Components/PostsIndex/Post';
import { Pagination } from 'antd';
import TagsIndex from '../Components/TagsIndex/TagsIndex';
import Collections from '../Components/CollectionsIndex/Collections';
import RecommendedPost from '../Components/RecommendIndex/RecommendedPost';
import ScrollText from '../Components/ScrollText/ScrollText';
import instance from '../../../interceptors';

/*
 * @name: 首页
 * @description: 包括轮播公告、轮播图片、博客列表、全站搜索、标签、归档、本站推荐
 */

export class HomePage extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  scroll(blog) {
    let a = document.getElementsByClassName('blog-home-page-right-fix')[0];
    let tag = document.getElementsByClassName('blog-tags-index')[0];
    let col = document.getElementsByClassName('blog-collections')[0];
    let top = 0;
    if (tag && col) {
      top = tag.offsetHeight + col.offsetHeight + 60;
    }
    if (!!a && top > 0) {
      if (window.scrollY > top && !blog.drawer) {
        a.style.position = 'fixed';
        a.style.top = '34px';
      } else {
        a.style.position = 'static';
      }
    }
  }

  componentDidMount() {
    let init = this.props.actions.initPost;
    let posts = this.props.blog.posts;
    let url = this.props.blog.queryAllBlogs;
    if (posts.length === 0) {
      instance.get(url).then(
        function(res) {
          init(res.data.data);
          if (!window.localStorage.posts) {
            window.localStorage.setItem('posts', JSON.stringify(res.data.data));
          }
        }, function(e) {
          init([]);
        });
    }
    window.addEventListener('scroll', () => this.scroll(this.props.blog));
  }

  // 移除监听，否则会造成内存泄漏
  componentWillUnmount() {
    window.removeEventListener('scroll', () => this.scroll(this.props.blog));
  }

  render() {
    const changePageAndScroll = (changePage, page, pageSize) => {
      window.scrollTo(0, 0);
      changePage(page, pageSize);
    };
    const { posts, current, texts, animate, international, imageIndex, images, imageRoutes } = this.props.blog;
    const { scrollBanner, changePage, queryPostsByDate, queryPostsByTag, changeImage, autoChangeImages } = this.props.actions;
    let { postsToDisplay, postsQueried } = this.props.blog;
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
              <ScrollText blog={{ texts, animate }} scrollBanner={scrollBanner}/>
            </div>
            <div className="blog-home-page-carousel">
              <CarouselIndex blog={{ imageIndex, images, imageRoutes }} actions={{ autoChangeImages, changeImage }}
                             history={this.props.history}/>
            </div>
            <div className="blog-home-page-lists">
              {
                postsToDisplay.map((ele, index) => {
                  return <Post key={index} posts={ele} queryPostsByTag={queryPostsByTag}/>;
                })
              }
              {/*分页*/}
              <div className="blog-home-page-lists-pagination">
                <Pagination size='small' current={current}
                            onChange={(page, pageSize) => changePageAndScroll(changePage, page, pageSize)}
                            total={postsQueried.length}/>
                <p>共{postsQueried.length}条</p>
              </div>
            </div>
          </div>
          <div className="blog-home-page-right">
            <TagsIndex blog={{ international, posts }} queryPostsByTag={queryPostsByTag}/>
            <Collections blog={{ posts, international }} actions={{ queryPostsByDate, queryPostsByTag }}/>
            <div className="blog-home-page-right-fix">
              <RecommendedPost posts={posts}/>
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
    actions: bindActionCreators({
      scrollBanner,
      changePage,
      queryPostsByDate,
      queryPostsByTag,
      changeImage,
      autoChangeImages,
    }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
