import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';
import { Link } from 'react-router-dom';
import array from './../../../../../images/array.jpeg';
import linux from './../../../../../images/linux.jpeg';
import git from './../../../../../images/git.jpg';
import oracle from './../../../../../images/oracle.png';

export class RecommendedPost extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const images = [array, linux, linux, git, oracle];
    const { posts } = this.props.blog;
    const recommendedPosts = posts.filter((ele) => !!ele.recommended);
    return (
      <div className="blog-recommended-post">
        <h3>
          <li>
            <i className="fa fa-thumbs-up"/>
          </li>
          推荐
        </h3>
        <div className="blog-recommended-post-lists">
          {
            recommendedPosts.map((ele, index) => {
              return <li key={index}>
                <span className="blog-recommended-post-lists-image"><img src={images[index]} alt="array"/></span>
                <span className="blog-recommended-post-lists-content">
                  <Link to={ele.route + '/' + ele.order}>{ele.title}</Link>
                  <p>{ele.date}</p>
                </span>
              </li>;
            })
          }
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
)(RecommendedPost);
