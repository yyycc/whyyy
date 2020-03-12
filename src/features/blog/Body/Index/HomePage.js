import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import { CarouselIndex } from './CarouselIndex/CarouselIndex';
import { Post } from './ListsIndex/Post';
import { Pagination } from 'antd';

export class HomePage extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { posts, current, start, end } = this.props.blog;
    const { src, alt, images } = this.props.blog;
    const { changePage, changeImage } = this.props.actions;
    return (
      <div className="blog-home-page">
        <div className="blog-home-page-left">
          <div className="blog-home-page-carousel">
            <CarouselIndex changeImage={(i) => changeImage(images, i)} src={src} alt={alt} />
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
          <p>where should I go</p>
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
