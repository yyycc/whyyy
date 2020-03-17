import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { CarouselIndex } from '../Index/CarouselIndex/CarouselIndex';
import { Post } from './ListsIndex/Post';
import { Pagination } from 'antd';
import { TagsIndex } from './TagsIndex/TagsIndex';

export class HomePage extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { posts, current, start, end } = this.props.blog;
    const { changePage } = this.props.actions;
    return (
      <div className="blog-home-page">
        <div className="blog-home-page-left">
          <div className="blog-home-page-carousel">
            <CarouselIndex blog={this.props.blog} actions={this.props.actions} props={this.props} />
          </div>
          <div className="blog-home-page-lists">
            {posts.map((ele, index) => {
              if (index >= start && index < end) {
                return <Post key={index} post={ele}/>;
              }
              return null;
            })}
            <Pagination size='small' current={current} onChange={changePage} total={posts.length}/>
          </div>
        </div>

        <div className="blog-home-page-right">
          <TagsIndex blog={this.props.blog} actions={this.props.actions} />
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
