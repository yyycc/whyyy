import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { CarouselIndex } from '../Index/CarouselIndex/CarouselIndex';
import { Post } from './ListsIndex/Post';
import { Pagination } from 'antd';
import { TagsIndex } from './TagsIndex/TagsIndex';
import Collections from './CollectionsIndex/Collections';

export class HomePage extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

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
        <div className="blog-home-page-left">
          <div className="blog-home-page-carousel">
            <CarouselIndex blog={this.props.blog} actions={this.props.actions} props={this.props}/>
          </div>
          <div className="blog-home-page-lists">
            {
              postsToDisplay.reverse().map((ele, index) => {
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
          {/*<div className="blog-home-page-right-lists">

          </div>*/}
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
